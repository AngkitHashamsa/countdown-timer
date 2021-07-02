const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline h4");
// tem to extend date
let temDate = new Date();
let temyear = temDate.getFullYear();
let temMonth = temDate.getMonth();
let temdate = temDate.getDate();

const futureDate = new Date(temyear, temMonth, temdate + 10, 11, 30, 0);
// console.log(futureDate);
let year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
let date = futureDate.getDate();
let weekday = weekdays[futureDate.getDay()];
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
giveaway.innerHTML = `giveaway ends on ${weekday}, ${date} ${month} ${2021} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

const getRemaindingTime = () => {
  const currentTime = new Date().getTime();
  const t = futureTime - currentTime;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let sec = Math.floor((t % oneMinute) / 1000);
  const values = [days, hours, minutes, sec];
  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">expired<h4>`;
  }
};
let countdown = setInterval(getRemaindingTime, 1000);
getRemaindingTime();
