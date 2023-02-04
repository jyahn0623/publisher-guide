const timeList = document.querySelectorAll(".reservation_list > ul > li");

timeList.forEach((item) =>
  item.addEventListener("click", () => {
    const closeBtn = document.querySelector(".close_btn");
    const therapistList = document.querySelectorAll(
      ".therapist_list > ul > li"
    );

    function setTherapist() {
      for (let i = 0; i < therapistList.length; i++) {
        therapistList[i].addEventListener("click", () => {
          const name = therapistList[i].querySelector(".name > span").innerText;
          item.querySelector(".name").innerText = name;
          closeWin();
        });
      }
    }

    item.classList.add("clicked");
    openWin();
    closeBtn.addEventListener("click", () => {
      closeWin();
    });
    setTherapist();
  })
);
