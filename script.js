
const USERS_KEY = 'rs_users_v1';
const RESULTS_KEY = 'rs_results_v1';
const SESSION_KEY = 'rs_session_v1';

async function hashPassword(password) {
  const enc = new TextEncoder();
  const data = enc.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}


const api = {
  async getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  },
  async saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
  },
  async getResults() {
    return JSON.parse(localStorage.getItem(RESULTS_KEY) || '[]');
  },
  async saveResults(results) {
    localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
    return true;
  },
  async setSession(user) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
  },
  async getSession() {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null');
  },
  async clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
  }
};


const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginError = document.getElementById('loginError');
const signupError = document.getElementById('signupError');

const authContainer = document.getElementById('authContainer');
const dashboard = document.getElementById('dashboard');
const welcomeText = document.getElementById('welcomeText');
const logoutBtn = document.getElementById('logoutBtn');

const showAddFormBtn = document.getElementById('showAddFormBtn');
const resultFormCard = document.getElementById('resultFormCard');
const resultForm = document.getElementById('resultForm');
const resultFormError = document.getElementById('resultFormError');
const cancelResultBtn = document.getElementById('cancelResultBtn');
const formTitle = document.getElementById('formTitle');
const editingIdInput = document.getElementById('editingId');

const searchInput = document.getElementById('searchInput');
const filterSubject = document.getElementById('filterSubject');
const sortSelect = document.getElementById('sortSelect');
const refreshBtn = document.getElementById('refreshBtn');

const scoreboard = document.getElementById('scoreboard');


let currentUser = null;
let allResults = [];
let availableSubjects = new Set();


(async function init() {
  attachEventListeners();
  await restoreSession();
  await loadAllResults();
  renderUI();
})();


function attachEventListeners() {
  signupForm.addEventListener('submit', onSignup);
  loginForm.addEventListener('submit', onLogin);
  logoutBtn.addEventListener('click', logout);
  showAddFormBtn.addEventListener('click', () => openResultForm());
  resultForm.addEventListener('submit', onSaveResult);
  cancelResultBtn.addEventListener('click', closeResultForm);
  searchInput.addEventListener('input', renderScoreboard);
  filterSubject.addEventListener('change', renderScoreboard);
  sortSelect.addEventListener('change', renderScoreboard);
  refreshBtn.addEventListener('click', async () => { await loadAllResults(); renderScoreboard(); });
}


async function onSignup(e) {
  e.preventDefault();
  signupError.textContent = '';
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const password = document.getElementById('signupPassword').value;

  if (!name || !email || !password) {
    signupError.textContent = 'Please fill all fields.';
    return;
  }

  const users = await api.getUsers();
  if (users.some(u => u.email === email)) {
    signupError.textContent = 'Email already registered.';
    return;
  }

  const pwHash = await hashPassword(password);
  const newUser = { id: crypto.randomUUID(), name, email, pwHash };
  users.push(newUser);
  await api.saveUsers(users);
  await api.setSession({ id: newUser.id, name: newUser.name, email: newUser.email });
  await restoreSession();
  signupForm.reset();
  renderUI();
}

async function onLogin(e) {
  e.preventDefault();
  loginError.textContent = '';
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  if (!email || !password) {
    loginError.textContent = 'Please enter email and password.';
    return;
  }

  const users = await api.getUsers();
  const user = users.find(u => u.email === email);
  if (!user) {
    loginError.textContent = 'No account with that email.';
    return;
  }

  const pwHash = await hashPassword(password);
  if (pwHash !== user.pwHash) {
    loginError.textContent = 'Incorrect password.';
    return;
  }

  await api.setSession({ id: user.id, name: user.name, email: user.email });
  await restoreSession();
  loginForm.reset();
  renderUI();
}

async function restoreSession() {
  currentUser = await api.getSession();
  if (currentUser) {
    welcomeText.textContent = `Hello, ${currentUser.name}`;
    logoutBtn.classList.remove('d-none');
    authContainer.classList.add('d-none');
    dashboard.classList.remove('d-none');
  } else {
    welcomeText.textContent = '';
    logoutBtn.classList.add('d-none');
    authContainer.classList.remove('d-none');
    dashboard.classList.add('d-none');
  }
}

async function logout() {
  await api.clearSession();
  currentUser = null;
  renderUI();
}


async function loadAllResults() {
  allResults = await api.getResults();
  availableSubjects = new Set(allResults.map(r => r.subject).filter(Boolean));
  populateFilterSubjects();
}

function populateFilterSubjects() {
  filterSubject.innerHTML = '<option value="">All Subjects</option>';
  Array.from(availableSubjects).sort().forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    filterSubject.appendChild(opt);
  });
}

function openResultForm(result = null) {
  resultFormError.textContent = '';
  resultFormCard.classList.remove('d-none');
  if (result) {
    formTitle.textContent = 'Edit Result';
    editingIdInput.value = result.id;
    document.getElementById('studentName').value = result.studentName;
    document.getElementById('subject').value = result.subject;
    document.getElementById('score').value = result.score;
  } else {
    formTitle.textContent = 'Add Result';
    editingIdInput.value = '';
    resultForm.reset();
  }
}

function closeResultForm() {
  resultFormCard.classList.add('d-none');
  resultFormError.textContent = '';
  resultForm.reset();
  editingIdInput.value = '';
}

async function onSaveResult(e) {
  e.preventDefault();
  resultFormError.textContent = '';

  if (!currentUser) {
    resultFormError.textContent = 'You must be logged in.';
    return;
  }

  const id = editingIdInput.value || null;
  const studentName = document.getElementById('studentName').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const scoreRaw = document.getElementById('score').value;

  if (!studentName || !subject || scoreRaw === '') {
    resultFormError.textContent = 'Please fill all fields.';
    return;
  }
  const score = Number(scoreRaw);
  if (Number.isNaN(score) || score < 0) {
    resultFormError.textContent = 'Invalid score.';
    return;
  }

  const results = await api.getResults();

  if (id) {
    const idx = results.findIndex(r => r.id === id);
    if (idx < 0 || results[idx].userId !== currentUser.id) {
      resultFormError.textContent = 'You may only edit your own results.';
      return;
    }
    results[idx] = { ...results[idx], studentName, subject, score };
  } else {
    const newResult = {
      id: crypto.randomUUID(),
      userId: currentUser.id,
      studentName,
      subject,
      score
    };
    results.push(newResult);
  }

  await api.saveResults(results);
  await loadAllResults();
  closeResultForm();
  renderScoreboard();
}

function renderUI() {
  restoreSession();
  renderScoreboard();
}

function getVisibleResults() {
  if (!currentUser) return [];
  let list = allResults.filter(r => r.userId === currentUser.id);

  const q = (searchInput.value || '').trim().toLowerCase();
  if (q) {
    list = list.filter(r =>
      r.studentName.toLowerCase().includes(q) || r.subject.toLowerCase().includes(q)
    );
  }

  const subj = filterSubject.value;
  if (subj) list = list.filter(r => r.subject === subj);

  const sortVal = sortSelect.value;
  if (sortVal === 'asc') list.sort((a, b) => a.score - b.score);
  else if (sortVal === 'desc') list.sort((a, b) => b.score - a.score);

  return list;
}

function renderScoreboard() {
  if (!currentUser) {
    scoreboard.innerHTML = '<div class="col-12"><p>Please login to view results.</p></div>';
    return;
  }

  const list = getVisibleResults();
  availableSubjects = new Set(allResults.map(r => r.subject).filter(Boolean));
  populateFilterSubjects();

  if (list.length === 0) {
    scoreboard.innerHTML = `<div class="col-12"><div class="alert alert-info">No results yet.</div></div>`;
    return;
  }

  scoreboard.innerHTML = '';
  list.forEach(r => {
    const dateText = r.date ? r.date : "Not set"; 
    const card = document.createElement('div');
    card.className = 'col-md-6 mb-3';
    card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title mb-1">${r.studentName}</h5>
            <span class="badge bg-secondary">${r.subject}</span>
          </div>
          <p class="mb-1"><strong>Score:</strong> ${r.score}</p>
          <p class="mb-1"><strong>Date:</strong> ${dateText}</p>
          <div class="mt-2">
            <button class="btn btn-sm btn-outline-primary me-2" data-action="edit" data-id="${r.id}">Edit</button>
            <button class="btn btn-sm btn-outline-danger" data-action="delete" data-id="${r.id}">Delete</button>
          </div>
        </div>
      </div>
    `;
    scoreboard.appendChild(card);
  });

  scoreboard.querySelectorAll('button[data-action]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const action = btn.getAttribute('data-action');
      const id = btn.getAttribute('data-id');
      if (action === 'edit') return onEditResult(id);
      if (action === 'delete') return onDeleteResult(id);
    });
  });
}


async function onEditResult(id) {
  const results = await api.getResults();
  const r = results.find(x => x.id === id);
  if (!r || r.userId !== currentUser.id) return alert('Not allowed.');
  openResultForm(r);
}

async function onDeleteResult(id) {
  if (!confirm('Delete this result?')) return;
  const results = await api.getResults();
  const idx = results.findIndex(x => x.id === id);
  if (idx === -1 || results[idx].userId !== currentUser.id) return alert('Not allowed.');
  results.splice(idx, 1);
  await api.saveResults(results);
  await loadAllResults();
  renderScoreboard();
}
