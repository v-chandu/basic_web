// Script to show a message when the button is clicked
document.getElementById('messageButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.textContent = "Hello! Thanks for visiting my web page.";
    message.style.color = '#4CAF50';
});
