let faq = document.querySelectorAll(".faq");
faq.forEach((item) => {
  item.addEventListener("click", () => {
    let textDown = item.querySelector(".text_down");
    textDown.classList.toggle("default");
  });
});
