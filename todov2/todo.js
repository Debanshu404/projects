//creating elements
const inputBOx=document.getElementById('inputbox')
const listContainer=document.getElementById('list-container')
let toastBox = document.querySelector("#toastbox");
let sucessMessage=' <i class="fa-solid fa-circle-check"></i> sucessfully Added THe Todo'
let ErrorMessage=' <i class="fa-solid fa-circle-exclamation"></i>  Error!please type on some todo!'
let InvalidMessage=' <i class="fa-solid fa-circle-exclamation"></i> Invalid INput check again'
let editedMessage=' <i class="fa-solid fa-circle-exclamation"></i> Todo updated sucessFully'
let ErrorMessageFortodo=' <i class="fa-solid fa-circle-exclamation"></i> please input todo to update the current one'
function addtask(msg){
    if(inputBOx.value.length>=50){
        const showDiv = document.createElement('div');
        showDiv.classList.add('Invalid');
        showDiv.innerHTML = InvalidMessage; // Corrected typo in 'success'
        toastBox.appendChild(showDiv);
     
        setTimeout(function(){
            showDiv.remove()
        },5000) 
    }
   else if(inputBOx.value!==''){
        const showDiv = document.createElement('div');
        showDiv.classList.add('toast');
        showDiv.innerHTML = sucessMessage;
        toastBox.appendChild(showDiv);
     
        setTimeout(function(){
            showDiv.remove()
        },5000)
        //adding the todo
        let li=document.createElement('li')
        li.innerText=inputBOx.value
        listContainer.appendChild(li)
        let span=document.createElement('Span')
        span.innerHTML= "&#10060";
        li.appendChild(span)
        let editbtn=document.createElement('button')
        editbtn.classList.add('editbutton')
        editbtn.innerHTML= "Edit";
        li.appendChild(editbtn)
    }

    else if(inputBOx.value===''){
        const showDiv = document.createElement('div');
    showDiv.classList.add('toast');
    showDiv.innerHTML = ErrorMessage; // Corrected typo in 'success'
    toastBox.appendChild(showDiv);
 
    setTimeout(function(){
        showDiv.remove()
    },5000)
    }
    else{
       
    }
    inputBOx.value=""//will clear after entering one todo
    saveData()
}
//for the click function
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
    //edit button functionality 
    else if (e.target.classList.contains('editbutton')) {
        let newText = prompt('Please enter new todo', e.target.parentElement.firstChild.textContent.trim());
        if (newText !== null && newText !== '') {
            e.target.parentElement.firstChild.textContent = newText;
            const showDiv = document.createElement('div');
            showDiv.classList.add('toast');
            showDiv.innerHTML = editedMessage; // Corrected typo in 'success'
            toastBox.appendChild(showDiv);
         
            setTimeout(function(){
                showDiv.remove()
            },5000)
            saveData();
        }else{
            const showDiv = document.createElement('div');
            showDiv.classList.add('toast');
            showDiv.innerHTML = ErrorMessageFortodo; // Corrected typo in 'success'
            toastBox.appendChild(showDiv);
         
            setTimeout(function(){
                showDiv.remove()
            },5000)
            saveData();
            
        }
    }
    
})
//implementing localstorage
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem('data')
}
showTask()
//making the toast notification