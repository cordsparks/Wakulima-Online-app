document.addEventListener("DOMContentLoaded", () => {
    // ✅ Show a welcome message when the page loads
    alert("🚀 Welcome to the Developers Page! Meet the creators of Wakulima Online.");

    // ✅ Random Quotes About Teamwork & Tech
    const quotes = [
        "💡 'Alone we can do so little; together we can do so much.' – Helen Keller",
        "🖥️ 'Technology is best when it brings people together.' – Matt Mullenweg",
        "🌍 'The best way to predict the future is to invent it.' – Alan Kay",
        "🔧 'Great things in business are never done by one person. They’re done by a team.' – Steve Jobs"
    ];

    // Display a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteElement = document.createElement("p");
    quoteElement.innerText = randomQuote;
    quoteElement.style.fontSize = "18px";
    quoteElement.style.color = "#ff9800";
    quoteElement.style.fontWeight = "bold";
    quoteElement.style.textAlign = "center";
    document.querySelector(".developers-container").appendChild(quoteElement);

    // ✅ Contact Developers Form
    const contactBtn = document.createElement("button");
    contactBtn.innerText = "📩 Contact Developers";
    contactBtn.style.padding = "10px";
    contactBtn.style.background = "#ff9800";
    contactBtn.style.color = "white";
    contactBtn.style.border = "none";
    contactBtn.style.borderRadius = "5px";
    contactBtn.style.cursor = "pointer";
    contactBtn.style.marginTop = "20px";
    contactBtn.style.display = "block";
    contactBtn.style.margin = "20px auto";

    document.querySelector(".developers-container").appendChild(contactBtn);

    contactBtn.addEventListener("click", () => {
        const message = prompt("📢 Enter your message for the developers:");
        if (message) {
            alert("✅ Thank you! Your message has been sent to Maloba Tegan & Elsie Muniu.");
        } else {
            alert("⚠️ Message not sent. Please try again.");
        }
    });
});