const timeList = document.querySelectorAll(".reservation_list > ul > li");

timeList.forEach((time) => {
  time.addEventListener("click", () => {
    time.classList.add("clicked");
    let openWin = window.open("pop_assign.html");
  });
});
