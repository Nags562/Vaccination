const articles = document.querySelectorAll(".arti");

articles.forEach(article => {
  const close = article.querySelector(".close");
  const open = article.querySelector(".open");
  const text = article.querySelector(".text");
  const qa = article.querySelector(".qa");

  //Introducing my CSS variables in JS
  const rootStyles = getComputedStyle(document.documentElement);
  const coral = rootStyles.getPropertyValue('--color-light-coral').trim();
  const white = rootStyles.getPropertyValue('--color-white').trim();
  const concrete = rootStyles.getPropertyValue('--color-concrete').trim();

  close.addEventListener("click", () => {
    text.classList.remove("hidden");
    open.classList.remove("hidden");
    close.classList.add("hidden");
    article.style.backgroundColor = coral;
    qa.style.color = white;
    text.style.color = white;
    // svg.forEach(svg => svg.style.color = "FFFFFF"); 
  });

  open.addEventListener("click", () => {
    text.classList.add("hidden");
    close.classList.remove("hidden");
    open.classList.add("hidden");
    article.style.backgroundColor = concrete;
    qa.style.color = "#888888";
    // svg.forEach(svg => svg.style.color = "F1F1F1");
  });


});