document.addEventListener("DOMContentLoaded", (event) => {
// constants for query selector
const customColorBtn = document.getElementById('changeCustomColorBtn');
const randomColorBtn = document.getElementById('changeRandomColorBtn');
const selectList = document.getElementById('selectList');
const imageContainer = document.getElementById('imageContainer');
const studentIdPtag = document.getElementById('studentId');

// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = parseInt(prompt('Enter a number between 0 and 100:'));
    if (userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (userInput >= 0 && userInput <= 20) {
        document.body.style.backgroundColor = 'green';
    } else if (userInput > 20 && userInput <= 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (userInput > 40 && userInput <= 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (userInput > 60 && userInput <= 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (userInput > 80 && userInput <= 100) {
        document.body.style.backgroundColor = 'yellow';
    }
    studentIdPtag.textContent = "200554104"; 
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    changeColorBasedOnNumber(randomNumber);
}

// function to generate options for select list
function addList() {
    const imageOptions = ['../img/img1.jpg', '../img/img2.jpg', '../img/img3.jpg','../img/img4.jpg','../img/img5.jpg'];
    for (let i = 0; i < imageOptions.length; i++) {
        const option = document.createElement('option');
        option.textContent = imageOptions[i];
        selectList.appendChild(option);
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
}

// function to change image
function changeImage() {
    const selectedImage = selectList.value;
    imageContainer.innerHTML = `<img src="img/${selectedImage}" alt="${selectedImage}">`;

}

customColorBtn.addEventListener('click', changeCustomColor);
randomColorBtn.addEventListener('click', changeRandomColor);
selectList.addEventListener('click', addList);
selectList.addEventListener('change', changeImage);
// event listeners for on click event of buttons and select

// event listeners for on change event of select
});