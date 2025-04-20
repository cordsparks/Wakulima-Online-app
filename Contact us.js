document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const confirmationMsg = document.getElementById("confirmation");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("⚠️ Please fill in all fields.");
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            confirmationMsg.innerHTML = `✅ Thank you, ${name}! Your message has been sent successfully.`;
            confirmationMsg.style.display = "block";

            // Clear form fields
            contactForm.reset();
        }, 1000);
    });
});