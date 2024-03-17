//creating elements
const inputBOx=document.getElementById('inputbox');
const listContainer=document.getElementById('list-container');
let toastBox = document.querySelector("#toastbox");
let sucessMessage=' <i class="fa-solid fa-circle-check"></i> sucessfully Added THe Todo';
let ErrorMessage=' <i class="fa-solid fa-circle-exclamation"></i>  Error!please type on some todo!';
let InvalidMessage=' <i class="fa-solid fa-circle-exclamation"></i> Invalid INput check again';
let editedMessage=' <i class="fa-solid fa-circle-exclamation"></i> Todo updated sucessFully';
let ErrorMessageFortodo=' <i class="fa-solid fa-circle-exclamation"></i> please input todo to update the current one';
let progressbar=document.querySelector('.childBar');
let totalTodos=0;
let completedTodo=0; // Declare completedTodo outside the event listener

//making the toast notification
function toast(message){
    const showDiv = document.createElement('div');
    showDiv.classList.add('toast');
    showDiv.innerHTML = message;
    toastBox.appendChild(showDiv);
 
    setTimeout(function(){
        showDiv.remove()
    },5000)
}

function addtask(msg){
    if(inputBOx.value.length>=50){
       toast(InvalidMessage)
    } else if(inputBOx.value!==''){
        const showDiv = document.createElement('div');
        toast(sucessMessage);
        //adding the todo
        let li=document.createElement('li');
        li.innerText=inputBOx.value;
        listContainer.appendChild(li);
        totalTodos++;
        console.log(totalTodos)
        let span=document.createElement('Span');
        span.innerHTML= "&#10060";
        li.appendChild(span);
        let editbtn=document.createElement('button');
        editbtn.classList.add('editbutton');
        editbtn.innerHTML= "Edit";
        li.appendChild(editbtn);
    } else if(inputBOx.value===''){
        toast(ErrorMessage);
    }
    inputBOx.value=""; //will clear after entering one todo
    saveData();
}

//for the click function
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        totalTodos--;
        saveData();
    } else if (e.target.classList.contains('editbutton')) {
        let newText = prompt('Please enter new todo', e.target.parentElement.firstChild.textContent.trim());
        if (newText !== null && newText !== '') {
            e.target.parentElement.firstChild.textContent = newText;
            
            toast(editedMessage);
            saveData();
        } else {
            toast(ErrorMessageFortodo);
            saveData();
        }
    }

    // console.log(listContainer.children.length);

    // Convert the children of listContainer to an array and filter the checked elements
    const checkedElements = Array.from(listContainer.children).filter(function (child) {
        // Check if the element is an input and if it is checked
        return child.tagName === 'INPUT' && child.checked;
        
        // return  child.checked;
    });
    
    console.log(checkedElements.length); // Log the count of checked elements
    let progress;
        if (totalTodos === 0) {
            progress = 0;
        } else {
            progress = (completedTodo / totalTodos) * 100;
            // console.log(totalTodos);solved
            console.log(`arya`);
        }

        progressbar.style.width = progress + '%';
        saveData();
    
    // Handle checkbox clicks
    // if (e.target.type === 'checkbox') {
    //     if (e.target.checked) {
    //         completedTodo++;
    //     } else {
    //         completedTodo--;
    //     }

    //     let progress;
    //     if (totalTodos === 0) {
    //         progress = 0;
    //     } else {
    //         progress = (completedTodo / totalTodos) * 100;
    //     }

    //     progressbar.style.width = progress + '%';
    //     saveData();
    // }
});


//implementing localstorage
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();
//note js
const notesContainer = document.querySelector('.containerNotes');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll(".inputBox");

// Showing data from local storage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}

// Updating local storage with notes
function noteUpdateLocalStorage() {
    console.log("adding items in lc")
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for creating new notes
createBtn.addEventListener('click', function() {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.classList.add('inputBox');
    inputBox.setAttribute("contenteditable", "true");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGAwQ25D6kwlVPFRWBmHO3xzu2vsprlB82Q&usqp=CAU';
    notesContainer.appendChild(inputBox).appendChild(img);
});

// Event listener for removing notes
notesContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        noteUpdateLocalStorage();
    } else if (e.target.tagName === "P") {
        notes.forEach(function(key) {
            key.onkeyup = function() {
                noteUpdateLocalStorage();
            };
        });
    }
});

// Call the function to show notes on page load
showNotes();

//future update=adding color picker to every created note
//making the stopwatch
let  [seconds,minutes,hours]=[0,0,0]
let display=document.querySelector('#displayTIme');
let timer=null;
function stopWatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++
        if(minutes==60){
            minutes=0;
            hours++
            
        }
    }
    let h=hours<10?"0"+hours:hours
    let m=minutes<10?"0"+minutes:minutes
    let s=seconds<10?"0"+seconds:seconds
    display.innerHTML = h + ":" + m + ":" + s;
}
//creating the function to simulate the clockwatch
function startWatch(){
    if(timer!==null){
        clearInterval(timer)
    }
    timer=setInterval(stopWatch,1000);

}
function stopTHeWatch(){
    clearInterval(timer)
}
function resetTHeWatch(){
    clearInterval(timer)
    let time=[seconds,minutes,hours]=[0,0,0]
    display.innerHTML="0:0:0"

}
//