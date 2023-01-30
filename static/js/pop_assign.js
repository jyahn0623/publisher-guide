const therapistList = document.querySelectorAll("li");
const clickedTime = window.opener.document.querySelector(
  ".clicked > a > .name"
);

therapistList.forEach((li) => {
  li.addEventListener("click", () => {
    const therapist = li.querySelector(".name span").innerText;
    sendValue(therapist);
  });
});

function sendValue(therapist) {
  clickedTime.innerText = therapist;
  window.close();
}
