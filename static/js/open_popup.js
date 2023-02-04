const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".popupBtn");

if (popupBtn) {
  popupBtn.addEventListener("click", () => {
    const closeBtn = document.querySelector(".close_btn");
    const cancelBtn = document.querySelector(".cancel");

    openWin();

    closeBtn.addEventListener("click", () => {
      closeWin();
    });
    cancelBtn.addEventListener("click", () => {
      closeWin();
    });
  });
}

function openWin() {
  popup.classList.remove("closed");
  popup.classList.add("opened");
  dateInput.style.opacity = 0;
}
function closeWin() {
  popup.classList.remove("opened");
  popup.classList.add("closed");
  setTimeout(() => {
    dateInput.style.opacity = 1;
  }, 200);
}
