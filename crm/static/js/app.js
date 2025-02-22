
// message/Notification timer

setTimeout(function () {
    let messages = document.querySelectorAll("#message-timer");
    messages.forEach((msg) => {
        msg.style.display = "none";
    });
}, 3000); // Adjust time (in milliseconds) as needed