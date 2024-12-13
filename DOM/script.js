// Selecting Elements
// By ID
const selectId = document.getElementById('button-1');

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

// setAttribute
selectId.setAttribute('onclick', 'newContent()');

// style
function changeStyle(){
    selectTag[0].style.backgroundColor = 'black';
    selectTag[0].style.color = 'white';
}

// Creating Elements
const newElement = document.createElement('p');
newElement.textContent = "This is a new paragraph";

const colorButton = document.createElement('button');
colorButton.textContent = "Change Color";
colorButton.setAttribute('onclick', 'changeStyle()'); // setAttribute

const removeButton = document.createElement('button');
removeButton.textContent = "Remove Element";

// Appending Elements
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
