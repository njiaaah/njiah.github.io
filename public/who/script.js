const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const monthsRu = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];
function generateDateArray() {
  let year = 2024;
  const startDate = new Date(year, 6, 1);
  const endDate = new Date(year + 1, 6, 1);
  const workerPattern = [2, 2, 0, 0, 1, 1];
  const dateArray = [];
  let workerIndex = 0;

  for (
    let date = new Date(startDate);
    date < endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const monthRu = monthsRu[date.getMonth()];
    const day = date.getDate();
    const worker = workerPattern[workerIndex % workerPattern.length];
    const dayOfWeek = (date.getDay() + 6) % 7;

    dateArray.push({
      year,
      month,
      monthRu,
      day,
      worker,
      dayofweek: dayOfWeek,
      date,
    });

    workerIndex++;
  }

  return dateArray;
}

function parseDate(dateStr) {
  const [day, month, year] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day); // months are zero-indexed in JavaScript Date
}

function overrideWorkerValues(dateArray, overrides) {
  overrides.forEach((override) => {
    const startDate = parseDate(override["start-date"]);
    const endDate = parseDate(override["end-date"]);
    const pattern = override.pattern;
    let patternIndex = 0;

    for (
      let date = new Date(startDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      for (let i = 0; i < dateArray.length; i++) {
        const item = dateArray[i];
        if (
          item.year === year &&
          item.month === months[month] &&
          item.day === day
        ) {
          item.worker = pattern[patternIndex % pattern.length];
          patternIndex++;
          break;
        }
      }
    }
  });

  return dateArray;
}
const dateArray = generateDateArray();
// 2 - timur
// 0 - rost
// 1 - edmon
const workers = {
  2: "Тимур 😺",
  0: "Ростислав 🐒",
  1: "Эдмон 🥷",
};

const updatedDateArray = overrideWorkerValues(dateArray, overrides);

const calendar = document.getElementById("calendar");

// draw calenar
updatedDateArray.forEach((day) => {
  let newDay = document.createElement("div");
  newDay.classList.add(`worker-${day.worker}`);
  newDay.setAttribute("worker", workers[day.worker]);
  newDay.classList.add(`month-${day.month}`);
  newSpan = document.createElement("span");
  newSpan.innerText = day.day;
  newDay.append(newSpan);
  newDay.setAttribute("data-day", day.day);
  newDay.setAttribute("data-year", day.year);
  newDay.setAttribute("data-month", day.month);
  newDay.setAttribute("data-monthRu", day.monthRu);

  if (day.day === 1) {
    // empty days
    for (let i = 0; i < 7; i++) {
      let emptyDiv = document.createElement("div");
      emptyDiv.classList.add("empty");
      newDay.classList.add("firstofmonth");

      calendar.appendChild(emptyDiv);
    }
  }

  calendar.appendChild(newDay);
});

let todaysWorker;
let todayDiv;
let isAnimating = false;
let workersCheckmarks = document.querySelectorAll("[data-worker]");

function scrollToToday() {
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today
    .toLocaleString("en-US", { month: "long" })
    .toLowerCase()
    .toString();
  const todayYear = today.getFullYear();
  const dayDivs = Array.from(
    document.querySelectorAll("div[data-day][data-month][data-year]")
  );
  dayDivs.forEach((day) => {
    if (
      day.getAttribute("data-day") == todayDate &&
      day.getAttribute("data-month") === todayMonth &&
      day.getAttribute("data-year") == todayYear
    ) {
      day.classList.add("today");
      // TITLE

      let currMonth = months.indexOf(day.getAttribute("data-month")).toString();
      if (currMonth.length == 1) {
        currMonth = "0" + currMonth;
      }
      let currDay = todayDate.toString();
      if (currDay.length == 1) {
        currDay = "0" + currDay;
      }
      document.title =
        "📅 " +
        currDay +
        "." +
        currMonth +
        "." +
        todayYear.toString().slice(2) +
        " ❓ " +
        day.getAttribute("worker");
      // checkmark on todays worker
      workersCheckmarks.forEach((mark) => {
        if (mark.getAttribute("data-worker") === day.classList[0].slice(7, 8)) {
          mark.classList.remove("hidden");
        }
      });

      // ANIM

      if (!isAnimating) {
        isAnimating = true;
        day.classList.toggle("jello-horizontal");
        setTimeout(() => {
          day.classList.toggle("jello-horizontal");
          isAnimating = false;
        }, 1250);
      }
      day.scrollIntoView({ block: "center" });
    }
  });
}
scrollToToday();

const todayBtn = document.querySelector("#todayBtn");
todayBtn.addEventListener("click", () => {
  scrollToToday();
});
const dayDivs = Array.from(
  document.querySelectorAll("div[data-day][data-month][data-year]")
);

window.addEventListener("keydown", function (e) {
  if (e.code === "Space" && e.target === document.body) {
    e.preventDefault();
    scrollToToday();
  }
});

const author = document.querySelector("#author");
calendar.addEventListener("scroll", () => {
  if (
    calendar.scrollTop + calendar.offsetHeight >=
    calendar.scrollHeight - 100
  ) {
    author.classList.add("md:bottom-32", "bottom-[120px]");
  } else {
    author.classList.remove("md:bottom-32", "bottom-[120px]");
  }
});

// i do what i want, tailwind

function getBox(width, height) {
  return {
    string: "+",
    style:
      "font-size: 1px; padding: " +
      Math.floor(height / 2) +
      "px " +
      Math.floor(width / 2) +
      "px; line-height: " +
      height +
      "px;",
  };
}

// FUCK OFF TAILWIND

let giga = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⢉⠉⠉⢉⣉⣩⣉⢉⡉⠉⡉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣾⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⡟⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣸⣿⣇⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣻⣿⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⡿⠍⠙⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⣱⣾⠟⠀⢠⠉⠉⠉⠻⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⣿⣿⣿⣿⣿⡿⠛⣡⣶⣿⣧⣤⠸⡟⠂⠀⠀⠀⢹⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⠇⠀⢈⣥⣿⣿⣿⣿⣿⣷⣆⢰⣆⠀⢸⡏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣏⣿⡏⠀⣾⣾⣿⣿⣿⣿⣿⣿⣿⣿⢻⣿⣷⣾⡃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣷⡄⠘⠹⢿⣿⣍⠉⢛⣿⣿⣿⠸⣿⣿⠿⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⢿⣿⣿⣿⣿⣦⣀⣿⣿⣿⣶⣾⣿⣿⣿⡇⠁⠈⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⢺⣿⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⡺⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢸⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣏⣻⡶⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠀⣿⡏⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣬⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣀⣀⣤⣤⣤⣤⣀⣀⣠⣤⣤⣶⣶⣿⣿⡛⠻⠿⣿⡿⠛⠁⢰⣿⣿⠃⢘⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣩⣿⣿⡿⠿⣻⣿⣿⣿⣿⣿⣿⣅⠄⢉⣙⣿⣿⡟⠀⠀⠀⠘⣿⡇⠀⠀⣿⣦⣿⣿⣿⣿⣿⣿⣿⣟⣻⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠟⠋⢱⣦⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⣸⠀⡇⢠⣿⣧⠀⢠⣿⡿⢿⠿⠋⠙⠛⠛⠛⠛⠋⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣶⠶⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⠏⣸⣿⣿⣿⣧⠀⠀⠀⣷⠸⣿⠃⣴⣿⡟⠙⠁⠀⠀⠀⠀⠀⣾⣄⣀⡀⠉⠢⣀⠀⠀⠀⠀⠀⠀⠀⠀
⡇⠀⢉⣹⣾⣿⣿⣿⣿⣿⣿⣿⣶⣬⣿⣿⣿⣿⣦⡄⣀⡿⠀⣿⣿⣇⠹⣷⣤⣾⠇⠀⠀⠀⣰⣿⣿⣿⣿⣆⠀⠈⠳⡀⠀⠀⠀⠀⠀⠀
⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢰⣿⣿⡿⢶⣿⣿⡟⢀⣤⠀⣰⣿⣿⣿⣿⡿⣭⣷⣄⡀⠘⢄⠀⠀⠀⠀⠀
⣠⣾⣿⣿⢋⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣼⣿⣿⣧⣾⣿⢿⡷⠟⠉⠀⠹⠟⠛⢉⠁⡀⠈⠉⠉⠑⢦⡈⠳⡀⠀⠀⠀
⡏⠀⠘⣳⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠙⢿⣿⣿⣿⣿⠉⠀⢀⡉⡦⠄⠀⠀⠀⠀⣿⠀⠠⠄⠀⠀⠀⠀⠑⠠⠉⠒⢄⡀
⣷⡆⢸⡯⠤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢘⣿⣿⢋⠍⢿⣶⣽⣿⡿⢿⡄⠀⠀⣸⡯⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙
⣿⣿⣄⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣾⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣷⣶⣾⣿⣤⣷⣶⣄⣰⣤⣀⣀⣀⣀⣀⣀⣀⣀`;
console.log(
  "%cUSING TAILWINDCSS CDN",
  "color:#353535; font-size: 3rem; font-family: Impact; padding-left: 2rem; opacity: .5;"
);
console.log(giga);
console.log(
  "%cIN PRODUCTION",
  "color:#353535; font-size: 3rem; font-family: Impact; padding-left: 7rem; opacity: .5;"
);
