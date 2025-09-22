let products = JSON.parse(localStorage.getItem("Product")) || [
    {
        id : 101,
        name: "Handbags",
        brand: "Gussi",
        category: "Handbag",
        price: "15000",
        quantity: 1,
        des: "A Gucci bag description highlights its use of premium materials like leather, canvas, and suede.",
        color : "Coffee",
        material : "Leather",
        images : "https://images.pexels.com/photos/8989582/pexels-photo-8989582.jpeg"
    },
    {
        id : 201,
        name: "Bags",
        brand: "Da Milano",
        category: "Bag",
        price: "5000",
        quantity: 1,
        des: "A bag is a lightweight, flexible container meant for carrying things.",
        color : "Gray",
        material : "Nylon",
        images : "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg"
    },
    {
        id : 301,
        name: "Handbag",
        brand: "Louis Vuitton",
        category: "Handbag",
        price: "50000",
        quantity: 1,
        des: "a small bag made of leather, etc., for carrying coins and often also paper money, used especially by women.",
        color : "Orange",
        material : "Polyester",
        images : "https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg"
    }
];
function saveProducts() {
    localStorage.setItem("Product", JSON.stringify(products));
}
let cart = JSON.parse(localStorage.getItem("Cart")) || [];
function saveCart() {
    localStorage.setItem("Cart", JSON.stringify(cart));
}
function addProduct() {
    const form = document.getElementById("Form");
    if (!form) {
        return;
    }
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const id = parseInt(document.getElementById("productId").value);
        const name = document.getElementById("productName").value;
        const brand = document.getElementById("brand").value;
        const category = document.getElementById("category").value;
        const price = parseFloat(document.getElementById("price").value);
        const quantity = parseInt(document.getElementById("quantity").value);
        const des = document.getElementById("description").value;
        const color = document.getElementById("color").value;
        const material = document.getElementById("material").value;
        const images = document.getElementById("images").value;
        if (!id ||!name || !brand || !category || !price || !quantity || !des || !color || !material || !images) {
            alert("Please Fill Up all the fields!!!");
            return;
        }
        products.push({id, name, brand, category, price, quantity, des, color, material, images });
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
            <td>${index + 1}</td>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.brand}</td>
            <td>${p.category}</td>
            <td>${p.price}</td>
            <td>${p.quantity}</td>
            <td>${p.des}</td>
            <td>${p.color}</td>
            <td>${p.material}</td>
            <td><img src="${p.images}" alt="${p.name}" width="100"></td>
            <td>
                <div class="d-flex flex-row justify-content-center align-items-center">
                <button class="btn btn-warning m-1" onclick="updateItem(${p.id})">
                <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-danger m-1" onclick="removeItem(${p.id})">
                <i class="bi bi-trash"></i>
                </button>
                </div>
            </td>

        `;
        productTable.appendChild(row);
    });
}
function addToCart(id) {
    const cartProduct = products.find((items) => {
        return items.id === id;
    });
    if (!cartProduct) {
        alert("Product not found!");
        return;
    }
    const existCart = cart.find((C) => {
        return C.id === id;
    });
    if(existCart){
        alert(`${cartProduct.name} is already in cart!!!`);
        return;
    }
    else{
        cart.push({
            ...cartProduct, quantity : 1
        })
    }

    saveCart();
    alert(`${cartProduct.name} is Added in Cart!!!`);
}
function removeItem(id){
    if(!confirm("Want to remove this item?")){
        return;
    }
    products = products.filter(c => c.id !== id);
    saveProducts();
    viewProduct();
}
function updateItem(id){
    const product = products.find(p => p.id == id);
    if(product){
        document.getElementById("productId").value;
        document.getElementById("productName").value = product.name;
        document.getElementById("brand").value = product.brand;
        document.getElementById("category").value = product.category;
        document.getElementById("price").value = product.price;
        document.getElementById("quantity").value = product.quantity;
        document.getElementById("description").value = product.des;
        document.getElementById("color").value = product.color;
        document.getElementById("material").value = product.material;
        document.getElementById("images").value = product.images;
    }
        document.getElementById("productId").disabled="true";
        const form = document.getElementById("Form");
        form.onsubmit = function(e){
        e.preventDefault();
        product.name = document.getElementById("productName").value;
        product.brand = document.getElementById("brand").value;
        product.category = document.getElementById("category").value;
        product.price = parseFloat(document.getElementById("price").value);
        product.quantity = parseInt(document.getElementById("quantity").value);
        product.des = document.getElementById("description").value;
        product.color = document.getElementById("color").value;
        product.material = document.getElementById("material").value;
        product.images = document.getElementById("images").value;

        saveProducts();   
        viewProduct();   
        form.reset();  
        document.getElementById("productId").disabled = false; 
        alert("Product updated successfully!!!");
    };   
}
 
