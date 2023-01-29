/* 부모창  */
const timeArr = document.querySelectorAll(".reservation_list > ul > li");

/* timeArr.forEach((li) => {
  li.addEventListener("click", () => {
    const openWin = window.open("pop_assign.html");
    openWin.document.getElementById("temp").value = "yeap";
    window.open("pop_assign.html");
  });
});
 */
timeArr.forEach((li) => {
  li.addEventListener("click", () => {
    let openWin = window.open("pop_assign.html");
    /* 자식 요소로 현재 클릭한 리스트가 뭔지 정보 전달 */

    console.log(openWin.document.getElementById("temp").value);
    /*     openWin.document.getElementById("temp").value =
      li.querySelector(".num").innerText; */
    /* 페이지가 로딩되기 전에 요소를 찾으니, 못 찾고 오류가 남. */
  });
});
