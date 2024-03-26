//allchatgpt
function saveInputs() {
    var answer1 = document.getElementById('answer1').value;
    var answer2 = document.getElementById('answer2').value;
    
    // Save inputs to localStorage
    localStorage.setItem('answer1', answer1);
    localStorage.setItem('answer2', answer2);
}

// Retrieve inputs from localStorage
var storedAnswer1 = localStorage.getItem('answer1');
var storedAnswer2 = localStorage.getItem('answer2');

// Use the stored values as needed
console.log('Stored Answer 1:', storedAnswer1);
console.log('Stored Answer 2:', storedAnswer2);

// Retrieve answer1 from localStorage
var answer1 = localStorage.getItem('answer1');

// Update the content of the <p> tag with the id "screenName"(all chatgpt)
document.getElementById('screenName').textContent = answer1;