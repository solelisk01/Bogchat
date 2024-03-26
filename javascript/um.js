//all chatgpt
function saveScreenName() {
    var screenName = document.getElementById('screen-name').value;
    localStorage.setItem('screenName', screenName);
}

function sendMessage(message) {
    // Create a new message element
    var messageElement = document.createElement('div');
    messageElement.textContent = message;

    // Append the message to the chat history
    var chatHistory = document.getElementById('chat-history');
    chatHistory.appendChild(messageElement);
}
function sendMessage(message) {
    // Retrieve the screen name from localStorage
    var screenName = localStorage.getItem('screenName');

    // Create a new message element
    var messageElement = document.createElement('div');
    messageElement.textContent = screenName + ': ' + message;

    // Append the message to the chat history
    var chatHistory = document.getElementById('chat-history');
    chatHistory.appendChild(messageElement);
}

// Select the message element
var messageElement = document.getElementById('message');

// Set the delay in milliseconds (e.g., 2000ms = 2 seconds)
var delay = 8000;

// Set the text to appear
var textToShow = "Well hello there guppy";

// Use setTimeout to delay the appearance of the text
setTimeout(function() {
    messageElement.textContent = textToShow;
}, delay);

var screenName = localStorage.getItem('screenName');
document.getElementById('chat-history').innerHTML += '<p>' + screenName + ': ' + chosenResponse + '</p>';
