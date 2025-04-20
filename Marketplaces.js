document.addEventListener("DOMContentLoaded", () => {
    console.log("Marketplace Page Loaded");

    // Filter/Search Functionality
    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            let filter = searchInput.value.toLowerCase();
            let categories = document.querySelectorAll(".category-btn");

            categories.forEach((category) => {
                let text = category.textContent.toLowerCase();
                if (text.includes(filter)) {
                    category.style.display = "inline-block";
                } else {
                    category.style.display = "none";
                }
            });
        });
    }

    // Show Product Details on Click (if on product pages)
    const products = document.querySelectorAll(".product");
    products.forEach((product) => {
        product.addEventListener("click", function () {
            let description = this.querySelector("p");
            if (description.style.display === "none" || !description.style.display) {
                description.style.display = "block";
            } else {
                description.style.display = "none";
            }
        });
    });

    // Button Click Redirect (if on marketplace)
    const categoryButtons = document.querySelectorAll(".category-btn");
    categoryButtons.forEach((button) => {
        button.addEventListener("click", function () {
            let page = this.getAttribute("href");
            window.location.href = page;
        });
    });
});