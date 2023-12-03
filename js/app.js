const foods = JSON.parse(localStorage.getItem(`foods`)) || foodsI;
const containerCards = document.getElementById(`container`)
const selectCategory = document.getElementById(`select-category`)
const btnCreate = document.getElementById(`btnCreate`)
const home = document.getElementById(`home`)
const searchProductInput = document.getElementById('searchProduct')
const modal = document.querySelector(`.modal`)
const closeModal = document.querySelector(`#closeModal`)
const closeModalEdit = document.querySelector(`#closeModalEdit`)
const newProduct = document.getElementById(`newProduct`)
const newCategory = document.getElementById(`newCategory`)
const newPrice = document.getElementById(`newPrice`)
const newQuantity = document.getElementById(`newQuantity`)
const newDescription = document.getElementById(`newDescription`)
const newImage = document.getElementById(`newImage`)
const createProduct = document.getElementById(`createProduct`)
const modalEdit = document.querySelector(`.modalEdit`)
const editProductt = document.getElementById(`editProduct`)
const editImage = document.getElementById(`editImage`)

const sortByPriceAsc = document.getElementById("sortByPriceAsc")
const sortByPriceDesc = document.getElementById("sortByPriceDesc")


const editProductTitle = document.getElementById(`editProductTitle`)
const editCategory = document.getElementById(`editCategory`)
const editPrice = document.getElementById(`editPrice`)
const editQuantity = document.getElementById(`editQuantity`)
const editDescription = document.getElementById(`editDescription`)

let buttonsAdd = document.querySelectorAll(`.btnCard`)
let buttonsEdit = document.querySelectorAll(`.btnEdit`)
let imageSelected = ``
let editImageSelected = ``
let idProduct = foods.length
let productsCart;
const productsCartLS = JSON.parse(localStorage.getItem(`productsInCart`))

renderCards()

sortByPriceDesc.addEventListener("click", () => filterByPrice("desc"));
sortByPriceAsc.addEventListener("click", () => filterByPrice("asc"));
selectCategory.addEventListener('change', filterCategory)
btnCreate.addEventListener(`click`, showModal)
closeModal.addEventListener(`click`, hideModal)
closeModalEdit.addEventListener(`click`, hideModalEdit)
createProduct.addEventListener(`click`, createNewProduct)
searchProductInput.addEventListener('input', filterProductByName)
home.addEventListener(`click`, renderCards)
newImage.addEventListener(`change`, importImg)
editImage.addEventListener(`change`, importImgEdit)


function filterByPrice(order) {
    foods.sort((a, b) => {
        if (order === "asc") {
            return a.price - b.price;
        } else if (order === "desc") {
            return b.price - a.price;
        }
    });

    renderCards();
}

function importImg(event){
     const currentImg = event.target.files[0]
     const objectURL = URL.createObjectURL(currentImg)
     console.log(objectURL);
     imageSelected = objectURL;
     
}

function importImgEdit(event){
    const currentImg = event.target.files[0]
    const objectURL = URL.createObjectURL(currentImg)
    editImageSelected = objectURL;
    
}

function createNewProduct() {
    const productValues = {
        description: newDescription.value,
        category: newCategory.value,
        quantity: parseInt(newQuantity.value),
        product: newProduct.value,
        price: parseFloat(newPrice.value),
        image: imageSelected,
        quantityCart: 0
    };

    const isEmptyField = Object.values(productValues).some(value => value === '' || value === null || value === undefined);
    const isNumericQuantity = !isNaN(productValues.quantity)
    const isNumericPrice = !isNaN(productValues.price)

    if (isEmptyField || !isNumericQuantity || !isNumericPrice) {
        alert("Por favor, completa todos los campos correctamente. Los campos de cantidad y precio deben ser valores numéricos.");
        return
    }

    idProduct++;
    const newFood = { 
        id: idProduct +"",
        ...productValues
    }

    foods.push(newFood)
    localStorage.setItem("foods", JSON.stringify(foods))
    renderCards()
    resetFields()
    hideModal()
}



function editProduct(e) {
    const idButton = e.currentTarget.id
    const id = idButton.split(`-`)[0]
    const productEdit = foods.find(food => food.id === id)

    editProductTitle.value = productEdit.product
    editCategory.value = productEdit.category
    editPrice.value = productEdit.price
    editQuantity.value = productEdit.quantity
    editDescription.value = productEdit.description
    showModalEdit()

    editProductt.addEventListener("click", () => editProduct2(idButton))
}

function editProduct2(idButton) {
    const id = idButton.split("-");
    const productEdit = foods.find(food => food.id === id[0])

    if ([editDescription.value, editCategory.value, editProductTitle.value, editImageSelected].some(value => value === '' || value === null || value === undefined)) {
        alert("No se puede editar el producto porque hay campos vacíos.")
        return
    }

    if (isNaN(editQuantity.value) || isNaN(editPrice.value)) {
        alert("La cantidad y el precio deben ser valores numéricos.")
        return
    }
    productEdit.description = editDescription.value
    productEdit.category = editCategory.value
    productEdit.quantity = parseInt(editQuantity.value)
    productEdit.product = editProductTitle.value
    productEdit.price = parseFloat(editPrice.value)
    productEdit.image = editImageSelected

    const productEditCart = productsCart.findIndex(food => food.id === id[0])
    productsCart[productEditCart] = productEdit

    renderCards()
    resetFieldsEdit()
    hideModalEdit()

    localStorage.setItem("productsInCart", JSON.stringify(productsCart))
    localStorage.setItem("foods", JSON.stringify(foods))
}



function filterProductByName() {
    const searchTerm = searchProductInput.value.toLowerCase();
    document.querySelectorAll(`.cardProduct`).forEach(food =>{
        const nameProduct = food.querySelector(`.nameProduct`).textContent.toLowerCase()
        if (nameProduct.includes(searchTerm)) {
            food.style.display = `flex`
           } else {
            food.style.display = `none`
           }
    })
    updateButtonsAdd()
}

function showModalEdit(){
    modalEdit.style.display = `flex`
}

function hideModalEdit(){
    modalEdit.style.display = `none`
}

function showModal(){
    modal.style.display = `flex`
}

function hideModal(){
    modal.style.display = `none`
    resetFields()
}

function resetFields(){
    newProduct.value =`` 
    newCategory.value =``
    newPrice.value =``
    newQuantity.value =``
    newDescription.value =``
    imageSelected = ``
}

function resetFieldsEdit(){
    editProductTitle.value =`` 
    editCategory.value =``
    editPrice.value =``
    editQuantity.value =``
    editDescription.value =``
    imageSelected = ``
}


function renderCards() {
    containerCards.innerHTML = ``
    foods.forEach(food => {
            createCards(food)
    });
    updateButtonsAdd()
    updateButtonsEdit()
    localStorage.setItem("foods", JSON.stringify(foods))
}

function filterCategory() {
    containerCards.innerHTML = ``
    const selectedCategory = selectCategory.value;
    foods.forEach(food => {
        if (food.category === selectedCategory) {
            createCards(food)
        }
    });

    if (selectCategory.value == "Todas las categorias") {
        renderCards()
    }
    updateButtonsAdd()
}

function createCards(food) {
    const {product, image, id, price, description, quantity} = food
    const card = document.createElement(`div`)
    card.classList.add(`cardProduct`);
    card.innerHTML=`
        <img src="${image}" alt="${id}-${product}" class="imgProduct">
        <p class="nameProduct">${product}</p>
        <p class="descriptionProduct">${description}</p>
        <p class="priceProduct">${price} COP</p>
        <p class="quantityProduct">cant: ${quantity}</p>
        <button class="btnEdit" id="${id}-edit">Editar</button>
        <button class="btnCard" id="${id}">Agregar al carrito</button>`
    containerCards.appendChild(card)
}

function updateButtonsAdd(){
    buttonsAdd = document.querySelectorAll(`.btnCard`)
    buttonsAdd.forEach(button => {
        button.addEventListener(`click`, addToCart)
    });
}

function updateButtonsEdit(){
    buttonsEdit = document.querySelectorAll(`.btnEdit`)
    buttonsEdit.forEach(button => {
        button.addEventListener(`click`, editProduct)
    })
}


if (productsCartLS) {
    productsCart=productsCartLS
} else {
    productsCart=[]
}

function addToCart(e) {
    const idButton = e.currentTarget.id
    const productAdd = foods.find(food => food.id === idButton)
    if (productAdd.quantity>0) {
        productAdd.quantity--
        if (productsCart.some(product => product.id === idButton)) {
            const index = productsCart.findIndex(product => product.id === idButton)
            productsCart[index].quantityCart++
        } else {
            productAdd.quantityCart = 1
            productsCart.push(productAdd)
        }
    } else {
        alert("Producto desabilitado, stok no disponible")
    }
    localStorage.setItem("foods", JSON.stringify(foods));
    localStorage.setItem("productsInCart", JSON.stringify(productsCart));
    renderCards();
}


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