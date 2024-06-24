let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para agregar productos al carrito
function addToCart(product, price) {
    cart.push({ product, price });
    updateCartDisplay();
    localStorage.setItem('cart', JSON.stringify(cart));
    
    var toastEl = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
}

// Función para eliminar productos del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    let cartList = document.getElementById('cart-items');
    cartList.innerHTML = ''; 
    if (cart.length === 0) {
        cartList.innerHTML = '<li>El carrito está vacío</li>';
        document.getElementById('total-price').textContent = '';
    } else {
        let totalPrice = 0;
        cart.forEach((item, index) => {
            let li = document.createElement('li');
            li.innerHTML = `${item.product} - $${item.price} <button onclick="removeFromCart(${index})">Eliminar</button>`;
            cartList.appendChild(li);
            totalPrice += item.price;
        });
        document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
    }
}

// Función para mostrar/ocultar el carrito
function toggleCart() {
    let cartDiv = document.getElementById('cart');
    if (cartDiv.style.display === 'none' || cartDiv.style.display === '') {
        cartDiv.style.display = 'block';
    } else {
        cartDiv.style.display = 'none';
    }
}

// Función para ocultar el carrito
function hideCart() {
    document.getElementById('cart').style.display = 'none';
}

// Inicializa el carrito con datos guardados en localStorage cuando se carga la página
window.onload = function() {
    updateCartDisplay();
};

// Función para botón "volver"
let mybutton = document.getElementById("volver");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.getElementById('show-toast').addEventListener('click', function() {
    var toastEl = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
});