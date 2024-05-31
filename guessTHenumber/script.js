let form = document.getElementById("form-tag");
let inputTagSelector = document.getElementById("user-input-tag");
// Ensure the form element exists and contains a value
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValue = parseInt(inputTagSelector.value);
  console.log("formValue", inputValue);
});
