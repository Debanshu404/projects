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