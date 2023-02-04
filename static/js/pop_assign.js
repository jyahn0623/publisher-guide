/* 

  display:block 되고 곧바로 불러오기 때문에 자꾸 null이 뜨는 것 -> 
  1. load 된 다음 함수 실행해주기 window.addEventListener("load", () => {});
  2. if (window.opener != null) {}

*/

/* if (window.opener != null) {
  const clickedTime = window.opener.document.querySelector(
    ".clicked > a > .name"
  ); 

  window.addEventListener("load", () => {
    const therapistList = document.querySelectorAll(
      ".therapist_list > ul > li"
    ); 
    console.log(therapistList);
  });

  therapistList.forEach((li) => {
    li.addEventListener("click", () => {
      console.log("yeap");
    });
  });
}
 */
/* if (popup.classList.contains("opened")) {
  console.log("yeap");
} else {
  console.log("nope");
} */
/* 최초 한 번만 체크하는 듯? */

window.addEventListener("load", () => {
  const therapistList = document.querySelectorAll(".therapist_list > ul > li"); ///자식창
  /* display: block 됐을 때가 부모창opener를 쓸 수 있을 때지 */

  /* console.log(therapistList); */
  therapistList.forEach((li) => {
    li.addEventListener("click", () => {
      const name = li.querySelector(".name > span").innerText;

      /* 체크 자체가 클릭을 할 때에만 일어나므로 당근 원할 때 이벤트가 일어나지 않음. */
      /*       if (popup.classList.contains("opened")) {
        const clickedTime = window.opener.document.querySelector(
          ".clicked > a > .name"
        );
        console.log("yeap");
        console.log(clickedTime);
      } */

      /* 이 if문이 아예 안 먹는 것 같음 */
      /* if (window.opener != null) {
        const clickedTime = window.opener.document.querySelector(
          ".clicked > a > .name"
        );
        clickedTime.innerText = name;
      } */

      closeWin();
    });
  });
});

/* 
function setTherapist(therapist) {
  clickedTime.innerText = therapist;
  popup.classList.remove("opened");
  console.log("inside of function");
} */
