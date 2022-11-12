var input=document.getElementById("userInput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var line=document.createElement("hr");

function inputLength(){
    return input.value.length;
}
 
// function createLine(div){
//     div.append(line);
// }
function createList(){
    var div=document.createElement("div");
    var li=document.createElement("li");
    var delButton=document.createElement("button");
    div.classList.add("divClass");
    ul.appendChild(div);
    div.append(li,delButton,line);
    li.classList.add("taskClass");
    li.appendChild(document.createTextNode(input.value));
    input.value="";
    delButton.classList.add("delClass");
    delButton.innerHTML="Delete";
    // createLine(div);
    // div.body.appendChild(line);
}

function addAfterclick(){
    if(inputLength()>0){
        createList();
    }
}

function addAfterKeypress(event){
    if(inputLength()>0 && event.code==="Enter"){
        createList();
    }
}

// var button2=document.getElementsByclassName("delClass");
// this line alone is making me unable to add or delete element.

function delElement(element){
        if(element.target.className=== "delClass"){
            element.target.parentElement.remove();
        }
    }
    button.addEventListener("click",addAfterclick);
    input.addEventListener("keypress",addAfterKeypress);
    ul.addEventListener("click",delElement);

    // ul.addEventListener("click",doneTask);
    // ul.addEventListener("dblclick",notDone);
    // function doneTask(element){
    //     if(element.target.className==="taskClass"){
    //         element.target.classList.toggle("done");
    //     }
    // }
    // function notDone(element){
    //     if(element.target.className==="taskClass"){
    //         element.target.classList.toggle("done");
    //     }
    // }
  
    