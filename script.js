let products = JSON.parse(localStorage.getItem("Product")) || [
    {
        name: "Bags",
        brand: "Gussi",
        category: "Handbag",
        price: "15000",
        quantity: 1,
        des: "A Gucci bag description highlights its use of premium materials like leather, canvas, and suede.",
        color : "Coffee",
        material : "Leather",
        images : "https://images.pexels.com/photos/8989582/pexels-photo-8989582.jpeg"
    }
];
function saveProducts() {
    localStorage.setItem("Product", JSON.stringify(products));
}

function addProduct() {
    const form = document.getElementById("Form");
    if (!form) {
        return;
    }
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("productName").value;
        const brand = document.getElementById("brand").value;
        const category = document.getElementById("category").value;
        const price = parseFloat(document.getElementById("price").value);
        const quantity = parseInt(document.getElementById("quantity").value);
        const des = document.getElementById("description").value;
        const color = document.getElementById("color").value;
        const material = document.getElementById("material").value;
        const images = document.getElementById("images").value;
        if (!name || !brand || !category || !price || !quantity || !des || !color || !material || !images) {
            alert("Please Fill Up all the fields!!!");
            return;
        }
        products.push({ name, brand, category, price, quantity, des, color, material, images });
        form.reset();
        saveProducts();
        viewProduct();
    })
}
function viewProduct() {
    const productTable = document.getElementById("productTable");
    if (!productTable) {
        return;
    }
    productTable.innerHTML = "";
    products.forEach((p, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <tr>
                <td>${index + 1}</td>
                <td>${p.name}</td>
                <td>${p.brand}</td>
                <td>${p.category}</td>
                <td>${p.price}</td>
                <td>${p.quantity}</td>
                <td>${p.des}</td>
                <td>${p.color}</td>
                <td>${p.material}</td>
                <td><img src="${p.images}" alt="${p.name}" width="100"></td>
            </tr>
        `;
        productTable.appendChild(row);
    });
}

