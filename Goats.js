// Function to open the enquiry form with product details
function openForm(productName, sellerName, price) {
    document.getElementById("product").value = productName;
    document.getElementById("seller").value = sellerName;
    document.getElementById("price").value = price;

    document.getElementById("enquiryForm").style.display = "block";
}

// Function to close the enquiry form
function closeForm() {
    document.getElementById("enquiryForm").style.display = "none";
}

// Function to submit the enquiry
function submitEnquiry() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let product = document.getElementById("product").value;
    let seller = document.getElementById("seller").value;
    let price = document.getElementById("price").value;

    if (name === "" || email === "") {
        alert("Please fill in all the required fields.");
        return;
    }

    alert(`Enquiry Submitted!\n\nProduct: ${product}\nSeller: ${seller}\nPrice: ${price}\nName: ${name}\nEmail: ${email}`);

    closeForm();
}