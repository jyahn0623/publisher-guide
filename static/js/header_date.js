function setHeaderDate() {
  const headerDate = document.querySelector("#date");
  const dayArr = ["일", "월", "화", "수", "목", "금", "토"];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();
  if (headerDate !== null) {
    headerDate.innerHTML = `${year}년 ${padZeros(month)}월 ${padZeros(
      date
    )}일 ${dayArr[day]}요일`;
  }
}
function padZeros(num) {
  return num < 10 ? `0${num}` : `${num}`;
}
