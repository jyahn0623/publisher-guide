const startCalendar = document.querySelector(".start_calendar");
const endCalendar = document.querySelector(".end_calendar");
const nextBtn = document.querySelector(".fa-angle-right");
const prevBtn = document.querySelector(".fa-angle-left");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;

function padZero(num) {
  return num < 10 ? `0${num}` : `${num}`;
}
function setToday() {
  if (month === 12) {
    startCalendar.value = `${year}-${padZero(month)}`;
    endCalendar.value = `${year + 1}-${padZero(1)}`;
  } else {
    startCalendar.value = `${year}-${padZero(month)}`;
    endCalendar.value = `${year}-${padZero(month + 1)}`;
  }
}
function autoSetPeriod(calendar) {
  const pickedDate = calendar.value;
  const pickedYear = pickedDate.slice(0, 4);
  const pickedMonth = pickedDate.slice(5, 7);
  let setYear;
  let setMonth;

  if (calendar.classList.contains("end_calendar")) {
    setYear = Number(pickedYear) - 1;
    setMonth = padZero(Number(pickedMonth) - 1);
    pickedMonth === "01"
      ? (startCalendar.value = `${setYear}-12`)
      : (startCalendar.value = `${pickedYear}-${setMonth}`);
  } else {
    setYear = Number(pickedYear) + 1;
    setMonth = padZero(Number(pickedMonth) + 1);
    pickedMonth === "12"
      ? (endCalendar.value = `${setYear}-01`)
      : (endCalendar.value = `${pickedYear}-${setMonth}`);
  }
}
function setPriodByBtn(calendar) {
  const currDate = calendar.value;
  const currYear = currDate.slice(0, 4);
  const currMonth = currDate.slice(5, 7);
  let setYear;
  let setMonth;
  let setMonth2;

  if (calendar.classList.contains("end_calendar")) {
    setYear = Number(currYear) + 1;
    setMonth = padZero(Number(currMonth) + 1);
    setMonth2 = Number(setMonth) - 1;

    if (currMonth === "12") {
      endCalendar.value = `${setYear}-01`;
      startCalendar.value = `${currYear}-${currMonth}`;
    } else {
      endCalendar.value = `${currYear}-${setMonth}`;
      startCalendar.value = `${currYear}-${padZero(setMonth2)}`;
    }
  } else {
    setYear = Number(currYear) - 1;
    setMonth = padZero(Number(currMonth) - 1);
    setMonth2 = Number(setMonth) + 1;

    if (currMonth === "01") {
      startCalendar.value = `${setYear}-12`;
      endCalendar.value = `${currYear}-${currMonth}`;
    } else {
      startCalendar.value = `${currYear}-${setMonth}`;
      endCalendar.value = `${currYear}-${padZero(setMonth2)}`;
    }
  }
}

startCalendar.addEventListener("change", () => {
  autoSetPeriod(startCalendar);
});
endCalendar.addEventListener("change", () => {
  autoSetPeriod(endCalendar);
});
nextBtn.addEventListener("click", () => {
  setPriodByBtn(endCalendar);
});
prevBtn.addEventListener("click", () => {
  setPriodByBtn(startCalendar);
});

setToday();
