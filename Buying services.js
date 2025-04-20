document.addEventListener("DOMContentLoaded", () => {
    const cart = [];  // Stores selected products
    const cartList = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    // Add item to cart
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = parseInt(button.getAttribute("data-price"));

            cart.push({ name, price });
            updateCart();
        });
    });

    // Update cart display and total price
    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - KSh ${item.price}`;
            cartList.appendChild(listItem);
        });

        totalPrice.textContent = total;
    }

    // Checkout process
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("⚠️ Your cart is empty.");
            return;
        }

        let orderDetails = cart.map(item => `${item.name} - KSh ${item.price}`).join("\n");

        let userName = prompt("Enter your full name:");
        let userPhone = prompt("Enter your phone number:");
        let userLocation = prompt("Enter your delivery location:");

        if (userName && userPhone && userLocation) {
            alert(`✅ Order Confirmed!\n\n${orderDetails}\n\nName: ${userName}\nPhone: ${userPhone}\nLocation: ${userLocation}`);
            cart.length = 0; // Clear cart after order
            updateCart();
        } else {
            alert("⚠️ Please enter all details to complete your order.");
        }
    });
});