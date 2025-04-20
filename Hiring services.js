document.addEventListener("DOMContentLoaded", () => {
    const hireButtons = document.querySelectorAll(".hire-btn");
    const bookingForm = document.getElementById("booking-form");
    const hireForm = document.getElementById("hireForm");
    const serviceInput = document.getElementById("service");
    const cancelBtn = document.getElementById("cancel");

    hireButtons.forEach(button => {
        button.addEventListener("click", () => {
            let service = button.getAttribute("data-service");
            serviceInput.value = service;
            bookingForm.style.display = "block"; // Show form
        });
    });

    hireForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let service = document.getElementById("service").value;
        let date = document.getElementById("date").value;

        if (name && phone && date) {
            alert(`✅ Booking Confirmed!\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}`);
            bookingForm.style.display = "none"; // Hide form after booking
            hireForm.reset(); // Clear form
        } else {
            alert("⚠️ Please fill in all details.");
        }
    });

    
        bookingForm.style.display = "none"; // Hide form
    });