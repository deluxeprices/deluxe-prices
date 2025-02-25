// Función para agregar al carrito
let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartCount.textContent = cart.length;
    
    let cartHTML = '';
    let total = 0;

    cart.forEach(item => {
        cartHTML += `<p>${item.name} - Q${item.price.toFixed(2)}</p>`;
        total += item.price;
    });

    cartItems.innerHTML = cartHTML;
    cartTotal.textContent = total.toFixed(2);
}

// Función para finalizar la compra y redirigir a WhatsApp
function checkout() {
    let message = '¡Hola! Estoy interesado en los siguientes productos:\n\n';

    cart.forEach(item => {
        message += `${item.name}: Q${item.price.toFixed(2)}\n`;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `\nTotal: Q${total.toFixed(2)}`;

    const whatsappUrl = `https://wa.me/50259073864?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    cart = []; // Vaciar carrito después de la compra
    updateCartUI();
}

// Función para cerrar el popup de descuento
function closeDiscountPopup() {
    const popup = document.getElementById('discount-popup');
    popup.style.display = 'none';
}

// Mostrar popup de descuento en 3 segundos
setTimeout(() => {
    const popup = document.getElementById('discount-popup');
    popup.style.display = 'flex';
}, 3000);

document.addEventListener("DOMContentLoaded", function () {
    const carouselImages = document.querySelector(".carousel-images");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;
    const totalImages = document.querySelectorAll(".carousel-images img").length;

    function updateCarousel() {
        carouselImages.style.transform = `translateX(-${index * 1920}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (index < totalImages - 1) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    setInterval(() => {
        index = (index + 1) % totalImages;
        updateCarousel();
    }, 5000); // Cambio automático cada 5 segundos
});

