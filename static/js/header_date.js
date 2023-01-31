const headerDate = document.querySelector("#date");

const dayArr = ["일", "월", "화", "수", "목", "금", "토"];
const year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let date = new Date().getDate();
const day = new Date().getDay();

if (month < 10) {
  month = `0${month}`;
} else {
  month = month;
}
if (date < 10) {
  date = `0${date}`;
} else {
  date = date;
}

headerDate.innerHTML = `${year}년 ${month}월 ${date}일 ${dayArr[day]}요일`;
