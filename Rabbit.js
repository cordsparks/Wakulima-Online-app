document.addEventListener("DOMContentLoaded", function() {
    let enquiryButtons = document.querySelectorAll(".order-btn");

    enquiryButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            
            // Get item details
            let row = this.closest("tr");
            let product = row.cells[0].innerText;
            let seller = row.cells[1].innerText;
            let price = row.cells[2].innerText;

            // Fill the form fields
            document.getElementById("product").value = product;
            document.getElementById("seller").value = seller;
            document.getElementById("price").value = price;

            // Show the form
            document.getElementById("enquiryForm").style.display = "block";
            document.getElementById("overlay").style.display = "block";
        });
    });

    // Close the form
    window.closeForm = function() {
        document.getElementById("enquiryForm").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    };

    // Handle form submission
    window.submitEnquiry = function() {
        alert("Your enquiry has been submitted successfully!");
        closeForm();
    };
});