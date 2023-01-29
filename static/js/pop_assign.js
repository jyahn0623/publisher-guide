/* 자식창 */
const therapistArr = document.querySelectorAll(".therapist_list > ul > li");
/* 부모창에서 보내준 아이디값, 식별 정보 담을 그릇 */
const id = document.querySelector(".temp");

therapistArr.forEach((li) => {
  li.addEventListener("click", () => {
    let name = li.querySelector(".name > span");

    /*     자식창의 값이 들어갈 부모창의 요소 = 자식창에서 전달할 값 */
    /* opener.document.name.value = document.getE; */

    window.close();
  });
});
console.dir(id);

/* 
부모창에서 또 정보를 보내줘야 하네. 
지금 클릭한 게 어떤 리스트인지.
 */
