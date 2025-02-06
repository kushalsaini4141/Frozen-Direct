// Cart Functionality
let cart = [];

function addToCart(itemId, itemName, itemPrice) {
    let existingItem = cart.find(item => item.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });
    }
    updateCartUI();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
}

function updateCartUI() {
    let cartContainer = document.getElementById("cart-items");
    let totalPrice = 0;
    cartContainer.innerHTML = "";
    
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    });
    document.getElementById("cart-total").innerText = `Total: ₹${totalPrice}`;
}

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        let itemId = this.getAttribute("data-id");
        let itemName = this.getAttribute("data-name");
        let itemPrice = parseFloat(this.getAttribute("data-price"));
        addToCart(itemId, itemName, itemPrice);
    });
});

// Inventory Filtering
function filterItems(status) {
    document.querySelectorAll(".inventory-item").forEach(item => {
        if (status === 'all' || item.classList.contains(status)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Delivery Scheduling
function scheduleDelivery() {
    let date = document.getElementById("delivery-date").value;
    let timeSlot = document.getElementById("delivery-time").value;
    if (date && timeSlot) {
        alert(`Delivery scheduled for ${date} at ${timeSlot}`);
    } else {
        alert("Please select a date and time slot.");
    }
}

// Order Management
let orders = [];
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    orders.push([...cart]);
    cart = [];
    updateCartUI();
    alert("Order placed successfully!");
}

// About Us Animations
document.addEventListener("DOMContentLoaded", () => {
    let aboutSection = document.querySelector(".about-us-section");
    aboutSection.classList.add("fade-in");
});
