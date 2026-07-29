const colorGrey = "#151515";
const colorWhite = "#f2f2f2";
const colorRed = "#c47474";
const colorGreen = "#a6c497";
const colorBlue = "#b4d8d9";
const colorPurple = "#b990e8";
const colorBeige = "#ede5cc";

const button = document.getElementById("submit-button");


function updateWindow() {
    let nameInput = document.getElementById("nameInput").value;
    let messageInput = document.getElementById("messageInput").value;
    let colorSelect = document.getElementById("colorSelect").value;

    console.log(nameInput + ':' + messageInput + ':' + colorSelect);

    let greeting = "Hello there, " + nameInput;
    let message = messageInput;

    switch (colorSelect) {
        case 'grey':
            document.body.style.backgroundColor = colorGrey;
            break;
        case 'red':
            document.body.style.backgroundColor = colorRed;
            break;
        case 'green':
            document.body.style.backgroundColor = colorGreen;
            break;
        case 'blue':
            document.body.style.backgroundColor = colorBlue;
            break;
        case 'purple':
            document.body.style.backgroundColor = colorPurple;
            break;
        case 'beige':
            document.body.style.backgroundColor = colorBeige;
            break;
    }
    colorSelect == 'grey' ? document.body.style.color = colorWhite : document.body.style.color = colorGrey;

    document.getElementById("greeting").textContent = greeting;

    document.getElementById("message").textContent = messageInput;
    
}

function addTodo(){
    let todoText=document.getElementById("todoInput").value;

    if (todoText===""){
        return;
    }

    let newItem=document.createElement("li");
    newItem.textContent=todoText;

    document.getElementById("todoList").appendChild(newItem);
    document.getElementById("todoInput").value="";
}

button.addEventListener("click", updateWindow);
