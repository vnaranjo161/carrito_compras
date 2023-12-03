const productsCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
const foods = JSON.parse(localStorage.getItem('foods')) || [];
const containerProducts = document.getElementById('containerCart');
const btnClearCart = document.getElementById('clearCart');
let btnsTrash;
let buttonsAdd;
let buttonsDelete;

renderCards();

function createCards(food) {
    const { product, image, id, price, description, quantityCart } = food;
    const card = document.createElement('div');
    card.classList.add('productCart');
    card.innerHTML = `
        <img class="imgProductCart" src="${image}" alt="${id - product}">
        <p class="description">${description}</p>
        <p class="quantityCart"> <button id="${id}-delete" class="buttonDelete"> - </button> cantidad: ${quantityCart} <button id="${id}-add" class="buttonAdd"> + </button></p>
        <p class="price">precio: ${price * quantityCart}</p>
        <img class="trash" src="./images/basura.png" alt="Mover a la papelera" id="${id}-trash">
    `;
    containerProducts.appendChild(card);
}

function renderCards() {
    containerProducts.innerHTML = '';
    productsCart.forEach((food) => {
        createCards(food);
    });

    btnsTrash = document.querySelectorAll('.trash');
    btnsTrash.forEach((btn) => {
        btn.addEventListener('click', deleteProductToCart);
    });

    buttonsDelete = document.querySelectorAll('.buttonDelete');
    buttonsDelete.forEach((btn) => {
        btn.addEventListener('click', deleteProduct);
    });

    buttonsAdd = document.querySelectorAll('.buttonAdd');
    buttonsAdd.forEach((btn) => {
        btn.addEventListener('click', addProduct);
    });
}

function clearCart() {
    productsCart.forEach((foodCart) => {
        const product = foods.find((food) => food.id === foodCart.id);
        product.quantity += foodCart.quantityCart;
        product.quantityCart = 0;
    });
    productsCart.length = 0;
    updateLocalStorage();
    renderCards();
}

function deleteProductToCart(e) {
    const trashId = e.currentTarget.id;
    const id = trashId.split('-')[0];
    const indexProductTrash = productsCart.findIndex((food) => food.id === id);
    const productTrash = productsCart.find((food) => food.id === id);

    const product = foods.find((food) => food.id === id);
    product.quantity += productTrash.quantityCart;
    productsCart.splice(indexProductTrash, 1);
    updateLocalStorage();
    renderCards();
}

function addProduct(e) {
    const productId = e.currentTarget.id;
    const id = productId.split('-')[0];
    const indexProductAdd = productsCart.findIndex((food) => food.id === id);
    const product = foods.find((food) => food.id === id);

    if (product.quantity > 0) {
        product.quantity--;
        productsCart[indexProductAdd].quantityCart++;
    } else {
        alert('Producto desabilitado, stock no disponible');
    }

    updateLocalStorage();
    renderCards();
}

function deleteProduct(e) {
    const productId = e.currentTarget.id;
    const id = productId.split('-')[0];
    const indexProductDelete = productsCart.findIndex((food) => food.id === id);
    const product = foods.find((food) => food.id === id);

    if (productsCart[indexProductDelete].quantityCart > 1) {
        product.quantity++;
        productsCart[indexProductDelete].quantityCart--;
    } else {
        productsCart.splice(indexProductDelete, 1);
    }

    updateLocalStorage();
    renderCards();
}

function updateLocalStorage() {
    localStorage.setItem('productsInCart', JSON.stringify(productsCart));
    localStorage.setItem('foods', JSON.stringify(foods));
}

btnClearCart.addEventListener('click', clearCart);

function alert(message) {
    Swal.fire({
        title: '¡Error!',
        text: message,
        icon: 'error',
        confirmButtonText: 'Entendido',
        customClass: {
            container: 'custom-swal-container',
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            confirmButton: 'custom-swal-confirm-button'
        }
    });
}