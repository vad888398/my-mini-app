// Навигация
const homeBtn = document.getElementById('homeBtn');
const cartBtn = document.getElementById('cartBtn');
const settingsBtn = document.getElementById('settingsBtn');

const homePage = document.getElementById('home-page');
const cartPage = document.getElementById('cart-page');
const settingsPage = document.getElementById('settings-page');

[homeBtn, cartBtn, settingsBtn].forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const pageId = button.id.replace('Btn', '-page');
        document.getElementById(pageId).classList.add('active');
    });
});

// Список продуктов
const products = [
    { id: 1, name: 'Электронная книга', price: 300, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Программное обеспечение', price: 1500, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Электронный курс', price: 700, image: 'https://via.placeholder.com/200' }
];

const productList = document.getElementById('product-list');
products.forEach(product => {
    const productEl = document.createElement('div');
    productEl.className = 'product';
    productEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} ₽</p>
        <button data-id="${product.id}">Добавить в корзину</button>
    `;
    productList.appendChild(productEl);
});

// Корзина
let cart = [];
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', event => {
        const productId = event.target.getAttribute('data-id');
        const product = products.find(p => p.id == productId);
        cart.push(product);
        updateCart();
    });
});

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - ${item.price} ₽`;
        cartList.appendChild(cartItem);
    });

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    document.getElementById('total-price').textContent = `Итоговая сумма: ${totalPrice} ₽`;
}

// Темная тема
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Сохранение имени
const profileNameInput = document.getElementById('profile-name');
profileNameInput.addEventListener('input', () => {
    localStorage.setItem('profileName', profileNameInput.value);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('profileName');
    if (savedName) profileNameInput.value = savedName;
});
