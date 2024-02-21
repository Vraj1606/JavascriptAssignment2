
const colorInput = document.getElementById('colorInput');
const customColourBtn = document.getElementById('changeCustomColor');
const randomColourButton = document.getElementById('changeRandomColor');
const dropdownImage = document.getElementById('imageSelect');
const displayedImage = document.getElementById('displayedImage');
const studentID = document.getElementById('studentID');

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}


function displayStudentID() {
    const studentIDValue = "200554104"; 
    studentID.textContent = `Student ID: ${studentIDValue}`;
}

// Event listener for custom color change button
customColourBtn.addEventListener('click', function() {
    const userInput = parseInt(colorInput.value);
    if (userInput < 0 || userInput > 100) {
        changeBackgroundColor('red');
    } else if (userInput >= 0 && userInput <= 20) {
        changeBackgroundColor('green');
    } else if (userInput > 20 && userInput <= 40) {
        changeBackgroundColor('blue');
    } else if (userInput > 40 && userInput <= 60) {
        changeBackgroundColor('orange');
    } else if (userInput > 60 && userInput <= 80) {
        changeBackgroundColor('purple');
    } else {
        changeBackgroundColor('yellow');
    }
    displayStudentID();
});

// Event listener for random color change button
randomColourButton.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber < 0 || randomNumber > 100) {
        changeBackgroundColor('red');
    } else if (randomNumber >= 0 && randomNumber <= 20) {
        changeBackgroundColor('green');
    } else if (randomNumber > 20 && randomNumber <= 40) {
        changeBackgroundColor('blue');
    } else if (randomNumber > 40 && randomNumber <= 60) {
        changeBackgroundColor('orange');
    } else if (randomNumber > 60 && randomNumber <= 80) {
        changeBackgroundColor('purple');
    } else {
        changeBackgroundColor('yellow');
    }
    displayStudentID();
});

const imageSources = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg","img/img4.jpg","img/img5.jpg"]; 
function populateImageSelect() {
    imageSources.forEach(source => {
        const option = document.createElement('option');
        option.value = source;
        option.textContent = source.split('/').pop(); 
        dropdownImage.appendChild(option);
    });
}

dropdownImage.addEventListener('change', function() {
    displayedImage.src = dropdownImage.value;
});

populateImageSelect();
