const therapistList = document.querySelectorAll("li");
const clickedTime = window.opener.document.querySelector(
  ".clicked > a > .name"
);
const clickedTimeClass = window.opener.document.querySelector(".clicked");

therapistList.forEach((li) => {
  li.addEventListener("click", () => {
    const therapist = li.querySelector(".name span").innerText;
    sendValue(therapist);
    clickedTimeClass.classList.remove("clicked");
    window.close();
  });
});

function sendValue(therapist) {
  clickedTime.innerText = therapist;
}
