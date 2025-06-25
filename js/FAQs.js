// const toggledown = document.getElementsByClassName("toggledown")[0];
// const toggleup = document.getElementsByClassName("toggleup")[0];
// const text = document.getElementsByClassName("text")[0];
// toggledown.addEventListener("click", function()
// {
//     toggleup.classList.toggle("none");
//     text.classList.toggle("none");
//     toggledown.classList.add("hidden");
// });


const toggledown = document.getElementById("toggledown");
const toggleup = document.getElementById("toggleup");
const text = document.getElementById("text");
toggledown.addEventListener("click", function()
{
    toggleup.classList.toggle("none");
    text.classList.toggle("none");
  toggledown.classList.add("hidden");
 });