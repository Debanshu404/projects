//creating elements
const inputBOx=document.getElementById('inputbox')
const listContainer=document.getElementById('list-container')
function addtask(){
    if(inputBOx.value===''){
        alert("please enter a todo")
    }else{
        let li=document.createElement('li')
        li.innerText=inputBOx.value
        listContainer.appendChild(li)
        let span=document.createElement('Span')
        span.innerHTML= "&#10060";
        li.appendChild(span)
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
})
//implementing localstorage
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem('data')
}
showTask()