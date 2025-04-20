document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("marketplaceForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        const firstname = document.getElementById("firstname").value.trim();
        const surname = document.getElementById("surname").value.trim();
        const idNumber = document.getElementById("idNumber").value.trim();
        const mobileNumber = document.getElementById("mobileNumber").value.trim();
        const county = document.getElementById("county").value;
        const category = document.getElementById("category").value;
        const quantity = document.getElementById("quantity").value.trim();
        const mpesaCode = document.getElementById("mpesaCode").value.trim();

        const paymentMethods = document.querySelectorAll("input[name='payment']:checked");
        const selectedPayment = paymentMethods.length > 0 ? paymentMethods[0].value : "";

        // ✅ Basic Validation
        if (!firstname || !surname || !idNumber || !mobileNumber || !county || !category || !quantity || !selectedPayment || !mpesaCode) {
            alert("⚠️ Please fill in all fields before submitting!");
            return;
        }

        if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
            alert("⚠️ Enter a valid 10-digit mobile number.");
            return;
        }

        if (idNumber.length < 5 || isNaN(idNumber)) {
            alert("⚠️ Enter a valid ID number.");
            return;
        }

        if (quantity <= 0 || isNaN(quantity)) {
            alert("⚠️ Please enter a valid quantity.");
            return;
        }

        if (mpesaCode.length !== 10) {
            alert("⚠️ Enter a valid MPESA code.");
            return;
        }

        // ✅ Success Message
        alert("✅ Inquiry Sent Successfully! We will contact you soon.");
        form.reset(); // Clear form fields after submission
    });
});