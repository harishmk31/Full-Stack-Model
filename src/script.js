const form = document.getElementById("orderForm");

const message = document.getElementById("message");


// PLACE ORDER
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const food = document.getElementById("food").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value.trim();
    const payment = document.getElementById("payment").value;


    // Name validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }


    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }


    // Food validation
    if (food === "") {
        alert("Please select a food item.");
        return;
    }


    // Quantity validation
    if (quantity === "" || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }


    // Address validation
    if (address === "") {
        alert("Please enter your delivery address.");
        return;
    }


    // Payment validation
    if (payment === "") {
        alert("Please select a payment method.");
        return;
    }


    // SUCCESS MESSAGE
    message.innerHTML = `
        <div class="success">
            🎉 Order Placed Successfully!<br>
            <span>Thank you, ${name}!</span><br>
            <small>Your ${food} order has been received.</small>
        </div>
    `;

});


// RESET BUTTON
form.addEventListener("reset", function() {

    // Wait until form is reset, then remove message
    setTimeout(function() {
        message.innerHTML = "";
    }, 0);

});