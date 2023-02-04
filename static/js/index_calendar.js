const dateInput = document.querySelector(".today");
const nextBtn = document.querySelector(".reservation .fa-angle-right");
const prevBtn = document.querySelector(".reservation .fa-angle-left");

const today = new Date();
const todayFormatted = today.toISOString().slice(0, 10);
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

function padZero(num) {
  return num < 10 ? `0${num}` : `${num}`;
}
function setToday() {
  dateInput.value = todayFormatted;
}
function setPriodByNextBtn() {
  const currDate = dateInput.value;
  const currYear = currDate.slice(0, 4);
  const currMonth = currDate.slice(5, 7);
  const currDay = currDate.slice(8, 10);

  const longMonth = ["01", "03", "05", "07", "08", "10"];
  const shortMonth = ["04", "06", "09", "11"];
  const lastMonth = "12";
  const leapYear = "02";

  if (currMonth === leapYear) {
    if (currYear % 4 === 0) {
      currDay === "29" ? addMonth() : addDay();
    } else {
      currDay === "28" ? addMonth() : addDay();
    }
  } else if (longMonth.includes(currMonth)) {
    currDay === "31" ? addMonth() : addDay();
  } else if (shortMonth.includes(currMonth)) {
    currDay === "30" ? addMonth() : addDay();
  } else if (currMonth === lastMonth) {
    currDay === "31" ? addYear() : addDay();
  }
}
function setPriodByPrevBtn() {
  const currDate = dateInput.value;
  const currYear = currDate.slice(0, 4);
  const currMonth = currDate.slice(5, 7);
  const currDay = currDate.slice(8, 10);

  const longMonth = ["05", "07", "10", "12"];
  const shortMonth = ["04", "06", "08", "09", "11"];
  const january = "01";
  const february = "02";
  const isLeafYear = currYear % 4 === 0;
  const march = "03";

  if (currMonth === january) {
    currDay === "01" ? subtractYear() : subtractDay();
  } else if (currMonth === february) {
    currDay === "01" ? subtractMonth(31) : subtractDay();
  } else if (currMonth === march) {
    if (currDay === "01") {
      isLeafYear ? subtractMonth(29) : subtractMonth(28);
    } else {
      subtractDay();
    }
  } else if (longMonth.includes(currMonth)) {
    currDay === "01" ? subtractMonth(30) : subtractDay();
  } else if (shortMonth.includes(currMonth)) {
    currDay === "01" ? subtractMonth(31) : subtractDay();
  }
}
function addDay() {
  const currDate = dateInput.value;
  const currYear = currDate.slice(0, 4);
  const currMonth = currDate.slice(5, 7);
  const currDay = currDate.slice(8, 10);
  const currDayAfter = padZero(Number(currDay) + 1);

  dateInput.value = `${currYear}-${currMonth}-${currDayAfter}`;
}
function addMonth() {
  const currDate = dateInput.value;
  const currYear = currDate.slice(0, 4);
  const currMonth = currDate.slice(5, 7);
  const currMonthAfter = padZero(Number(currMonth) + 1);

  dateInput.value = `${currYear}-${currMonthAfter}-01`;
}
function addYear() {
  const currDate = dateInput.value;
  const currYear = currDate.slice(0, 4);
  const currYearAfter = Number(currYear) + 1;

  dateInput.value = `${currYearAfter}-01-01`;
}
function subtractDay() {
  const currDate = dateInput.value;
  const currYear = currDate.slice(0, 4);
  const currMonth = currDate.slice(5, 7);
  const currDay = currDate.slice(8, 10);
  const currDayBefore = padZero(Number(currDay) - 1);

  dateInput.value = `${currYear}-${currMonth}-${currDayBefore}`;
}
function subtractMonth(lastDay) {
  const currDate = dateInput.value;
  const currYear = currDate.slice(0, 4);
  const currMonth = currDate.slice(5, 7);
  const currMonthBefore = padZero(Number(currMonth) - 1);

  dateInput.value = `${currYear}-${currMonthBefore}-${lastDay}`;
}
function subtractYear() {
  const currDate = dateInput.value;
  const currYear = currDate.slice(0, 4);
  const currYearBefore = Number(currYear) - 1;

  dateInput.value = `${currYearBefore}-12-31`;
}

nextBtn.addEventListener("click", () => {
  setPriodByNextBtn();
});
prevBtn.addEventListener("click", () => {
  setPriodByPrevBtn();
});

setToday();
