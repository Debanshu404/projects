let toastBox = document.querySelector("#toastbox");
let sucessMessage=' <i class="fa-solid fa-circle-check"></i> sucessfully Added THe Todo'
let ErrorMessage=' <i class="fa-solid fa-circle-exclamation"></i>  Error!please type on some todo!'
let InvalidMessage=' <i class="fa-solid fa-circle-exclamation"></i> Invalid INput check again'
function showToast(msg) {
    
    const showDiv = document.createElement('div');
    showDiv.classList.add('toast');
    showDiv.innerHTML = msg; // Corrected typo in 'success'
    toastBox.appendChild(showDiv);
    if(msg.includes('Error')){
        showDiv.classList.add('error');
    }
     if(msg.includes('Invalid')){
        
        showDiv.classList.add('invalid');
    }
    setTimeout(function(){
        showDiv.remove()
    },5000)
   
}
