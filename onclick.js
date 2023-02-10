console.log("dom er astanan");
const button1 = document.getElementById("btn1");
button1.style.backgroundColor = 'blue';
button1.style.padding = '10px 15px';
button1.style.border = '0';
button1.style.color = 'white';

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}
const yellowButton = document.getElementById("yellowBtn");
yellowButton.addEventListener('click', function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
})

const greenButton = document.getElementById("greenBtn");
greenButton.addEventListener('click', function btnGreen(){
    document.body.style.backgroundColor = 'green';
})

    

    const updateButton = document.getElementById("buttonUpdate");
    updateButton.addEventListener('click',function update(){
       const inputField = document.getElementById("input-field");
       const inputText = inputField.value;
       const para = document.getElementById("input-text-update");
       para.innerText = inputText;
       inputField.value = ' ';
    })