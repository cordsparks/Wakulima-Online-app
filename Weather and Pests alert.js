document.addEventListener("DOMContentLoaded", () => {
    const weatherBtn = document.getElementById("getWeatherBtn");
    const locationInput = document.getElementById("locationInput");
    const weatherResult = document.getElementById("weatherResult");
    const subscribeWeather = document.getElementById("subscribeWeather");
    const pestList = document.getElementById("pestList");
    const reportPestBtn = document.getElementById("reportPest");

    // ✅ Enable Weather Notifications
    subscribeWeather.addEventListener("click", () => {
        if ("Notification" in window) {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification("✅ You have subscribed to Weather & Pest Alerts!");
                }
            });
        } else {
            alert("❌ Your browser does not support notifications.");
        }
    });

    // ✅ Fetch Weather Data
    weatherBtn.addEventListener("click", () => {
        const location = locationInput.value.trim();
        if (location === "") {
            alert("⚠️ Please enter a location.");
            return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    weatherResult.innerHTML = `
                        <p>🌡️ Temperature: ${data.main.temp}°C</p>
                        <p>☁️ Condition: ${data.weather[0].description}</p>
                        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
                    `;

                    // 🔔 Send Notification
                    if (Notification.permission === "granted") {
                        new Notification(`🌦️ Weather Alert for ${location}`, {
                            body: `Temperature: ${data.main.temp}°C | Condition: ${data.weather[0].description}`,
                        });
                    }
                } else {
                    weatherResult.innerHTML = `<p style="color:red;">❌ Location not found. Try again.</p>`;
                }
            })
            .catch(error => {
                weatherResult.innerHTML = `<p style="color:red;">❌ Failed to fetch weather data.</p>`;
            });
    });

    // ✅ Report a Pest Outbreak
    reportPestBtn.addEventListener("click", () => {
        const pestLocation = document.getElementById("pestLocation").value.trim();
        const pestType = document.getElementById("pestType").value.trim();

        if (pestLocation === "" || pestType === "") {
            alert("⚠️ Please enter both pest type and location.");
            return;
        }

        const newPestAlert = document.createElement("li");
        newPestAlert.innerHTML = `🚨 *${pestType} reported in ${pestLocation} – Immediate action needed!*`;
        pestList.appendChild(newPestAlert);

        // 🔔 Send Pest Alert Notification
        if (Notification.permission === "granted") {
            new Notification(`🐛 Pest Alert in ${pestLocation}`, {
                body: `A ${pestType} outbreak has been reported. Take necessary action.`,
            });
        }

        // Clear Input Fields
        document.getElementById("pestLocation").value = "";
        document.getElementById("pestType").value = "";
    });
});