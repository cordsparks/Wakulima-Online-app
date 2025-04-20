// Function to show the enquiry form with the selected item
function openEnquiryForm(itemName) {
    document.getElementById("enquiryFormContainer").style.display = "block";
    document.getElementById("selectedItem").value = itemName;
}

// Function to close the enquiry form
function closeEnquiryForm() {
    document.getElementById("enquiryFormContainer").style.display = "none";
}

// Function to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("enquiryForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for now
        alert("Your enquiry has been submitted successfully!");
        closeEnquiryForm(); // Close the form after submission
    });
});