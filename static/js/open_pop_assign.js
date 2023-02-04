const timeList = document.querySelectorAll(".reservation_list > ul > li");

timeList.forEach((item) =>
  item.addEventListener("click", () => {
    const closeBtn = document.querySelector(".close_btn");
    item.classList.add("clicked");
    openWin();
    closeBtn.addEventListener("click", () => {
      closeWin();
    });
  })
);
