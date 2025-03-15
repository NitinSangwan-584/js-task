//----------------------------------------change color-----------------//
function changeTextColor() {
    document.getElementById("text").classList.add("blue-text");
}

//--------------------input----------------------------------------------//
function getInputValue() {
    let inputValue = document.getElementById("inputField").value;
    alert("You entered: " + inputValue);
}

//--------------------------create new element------------------------//
function createNewElement() {
    let newPara = document.createElement("p");
    newPara.textContent = "This is a newly created paragraph.";
    document.body.appendChild(newPara);
}

//------------------------remove element-------------------------------------//
function removeElement() {
    let element = document.getElementById("removeMe");
    if (element) {
        element.remove();
    }
}

//---------------------------------change body color--------------//
function changeBackgroundColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

changeBackgroundColor();

//-----------------------count para-------------------//
function countParagraphs() {
    let paraCount = document.getElementsByTagName("p").length;
    alert("Number of paragraphs: " + paraCount);
}

//--------------------------------add css class-----------------------//
function addClass() {
    document.getElementById("text").classList.add("highlight");
}

//------------------get value of selected itm ---------------//
function getSelectedOption() {
    let dropdown = document.getElementById("dropdown");
    let selectedValue = dropdown.value;
    alert("Selected option: " + selectedValue);
}

//--------------toggle the visible element----------------//
function toggleVisibility() {
    let para = document.getElementById("togglePara");
    para.classList.toggle("hidden");
}

//----------------------Prevent Default Form Submission------------------//
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submission prevented!");
});