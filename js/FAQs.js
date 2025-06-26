// const close = document.getElementById("close");
// const open = document.getElementById("open");
// const text = document.getElementById("text");
// const article = document.getElementById("article");

// close.addEventListener("click", function () {
//   open.classList.remove("hidden");
//   text.classList.remove("hidden");
//   close.classList.add("hidden");
//   article.style.backgroundColor = "#EF6B6E";
// });

// open.addEventListener("click", function () {
//   close.classList.remove("hidden");
//   text.classList.add("hidden");
//   open.classList.add("hidden");
//   article.style.backgroundColor = "#F1F1F1";
// });

const articles = document.querySelectorAll(".arti");

articles.forEach(article => {
  const close = article.querySelector(".close");
  const open = article.querySelector(".open");
  const text = article.querySelector(".text");
  const qa = article.querySelector(".qa");

  close.addEventListener("click", () => {
    text.classList.remove("hidden");
    open.classList.remove("hidden");
    close.classList.add("hidden");
    article.style.backgroundColor = "#EF6B6E";
    qa.style.color = "#FFFFFF";
    // svg.forEach(svg => svg.style.color = "FFFFFF");
  });

  open.addEventListener("click", () => {
    text.classList.add("hidden");
    close.classList.remove("hidden");
    open.classList.add("hidden");
    article.style.backgroundColor = "#F1F1F1";
    qa.style.color = "#000000";
    // svg.forEach(svg => svg.style.color = "F1F1F1");
  });


});