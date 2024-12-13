// Selecting Elements
// By ID
const selectId = document.getElementById('button-1');
const colorButton = document.getElementById('button-2');

// By Class
const selectClass = document.getElementsByClassName('paragraph');

// By TagName
const selectTag = document.getElementsByTagName('div');


// Modifying Elements
// textContent
selectId.textContent = "Button";

// innerText
let newParagraph = "Hello World!"
function newContent(){
    return selectClass[0].innerText = newParagraph; // This will change the text of the first paragraph element with the class "paragraph"
    
};

// changeStyle
function changeStyle(){
    selectTag[0].style.backgroundColor = 'black';
    selectTag[0].style.color = 'white';
}

// setAttribute
selectId.setAttribute('onclick', 'newContent()');
colorButton.setAttribute('onclick', 'changeStyle()');


// Creating Elements
// createElement
const newElement = document.createElement('p');
newElement.textContent = "This is a new paragraph";

const removeButton = document.createElement('button');
removeButton.textContent = "Remove Element";

// Appending Elements
// appendChild
selectTag[0].appendChild(colorButton);
selectTag[0].appendChild(newElement);
selectTag[0].appendChild(removeButton);


// Removing Elements
function removeElement(){
    selectTag[0].removeChild(newElement); // removeElement
    selectTag[0].removeChild(removeButton); // removeElement
}

removeButton.setAttribute('onclick', 'removeElement()'); // setAttribute


// Event Handling
// addEventListner

removeButton.addEventListener('click', () => {
    alert('New element will be removed');
});
