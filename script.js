let registered = false;
let diceClicks = 0;
let sum = 0;

function showRegistrationForm() {
    if (!registered) {
        document.getElementById("form").style.display = "block";
    }
}

function displayUserInfo() {
    if (registered) {
        let name = localStorage.getItem("name");
        let username = localStorage.getItem("username");
        document.getElementById("messageText").textContent = `Name: ${name}, Username: ${username}`;
        document.getElementById("message").style.display = "block";
    }
}

function rollDice() {
    if (registered && diceClicks < 3) {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        sum += randomValue;
        diceClicks++;

        if (diceClicks === 3) {
            if (sum > 10) {
                document.getElementById("image4").style.cursor = "pointer";
            } else {
                document.getElementById("messageText").textContent = "Try again after scoring more than 10";
                document.getElementById("message").style.display = "block";
            }
        }
    }
}

function generateCoupon() {
    if (sum > 10) {
        const coupon = generateRandomCoupon();
        document.getElementById("messageText").textContent = `Coupon Code: ${coupon}`;
        document.getElementById("message").style.display = "block";
        document.getElementById("congratulations").style.display = "block";
    } else {
        document.getElementById("messageText").textContent = "Bad luck";
        document.getElementById("message").style.display = "block";
    }
}

function generateRandomCoupon() {
    return Math.random().toString(36).substr(2, 12).toUpperCase();
}

function registerUser(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;

    if (name && email && username) {
        localStorage.setItem("name", name);
        localStorage.setItem("username", username);
        registered = true;
        document.getElementById("form").style.display = "none";
    }
}
