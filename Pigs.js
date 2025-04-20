// Function to show enquiry form with pre-filled item details
function openEnquiryForm(itemName) {
    document.getElementById("enquiryFormContainer").style.display = "block";
    document.getElementById("selectedItem").value = itemName;
}

// Function to close enquiry form
function closeEnquiryForm() {
    document.getElementById("enquiryFormContainer").style.display = "none";
}

// Function to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("enquiryForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission for now
        alert("Your enquiry has been submitted successfully!");
        closeEnquiryForm(); // Close form after submission
    });
});