const DATA = [
  {
    color: "#4F6BFF",
    text: "상담수",
  },
  {
    color: "#9E9E9E",
    text: "분노1",
  },
  {
    color: "#FFFB8C",
    text: "분노2",
  },
  {
    color: "#89FFBF",
    text: "분노3",
  },
  {
    color: "#D36FEF",
    text: "중립",
  },
];
const TIME_DATA = [
  { title: "총상담", time: 4 },
  { title: "중립", time: 44 },
  { title: "분노1", time: 21 },
  { title: "분노2", time: 84 },
  { title: "분노3", time: 62 },
];

const MONTH_LABEL = [
  { date: 801, label: 1 },
  { date: 802, label: 2 },
  { date: 803, label: 3 },
  { date: 804, label: 4 },
  { date: 805, label: 5 },
  { date: 806, label: 6 },
  { date: 808, label: 8 },
  { date: 809, label: 9 },
  { date: 810, label: 10 },
  { date: 811, label: 11 },
  { date: 812, label: 12 },
  { date: 813, label: 13 },
  { date: 815, label: 15 },
  { date: 816, label: 16 },
  { date: 817, label: 17 },
  { date: 818, label: 18 },
  { date: 819, label: 19 },
  { date: 820, label: 20 },
  { date: 822, label: 22 },
  { date: 823, label: 23 },
  { date: 824, label: 24 },
  { date: 825, label: 25 },
  { date: 826, label: 26 },
  { date: 827, label: 27 },
];
const WEEK_LABEL = ["월", "화", "수", "목", "금", "토"];
const TIME_LABEL = [
  { title: "총상담", color: "#04E762", key: "all" },
  { title: "중립", color: "#34D1BF", key: "normal" },
  { title: "분노1", color: "#0496FF", key: "one" },
  { title: "분노2", color: "#DE0D92", key: "two" },
  { title: "분노3", color: "#6665DD", key: "three" },
];

const ONE = {
  daily: {
    all: [
      { date: 801, count: 69 },
      { date: 802, count: 38 },
      { date: 803, count: 37 },
      { date: 804, count: 35 },
      { date: 805, count: 99 },
      { date: 806, count: 26 },
      { date: 808, count: 68 },
      { date: 809, count: 62 },
      { date: 810, count: 62 },
      { date: 811, count: 50 },
      { date: 812, count: 111 },
      { date: 813, count: 51 },
      { date: 815, count: 117 },
      { date: 816, count: 84 },
      { date: 817, count: 80 },
      { date: 818, count: 72 },
      { date: 819, count: 82 },
      { date: 820, count: 52 },
      { date: 822, count: 63 },
      { date: 823, count: 46 },
      { date: 824, count: 44 },
      { date: 825, count: 37 },
      { date: 826, count: 75 },
      { date: 827, count: 35 },
    ],
    normal: [
      { date: 801, count: 43 },
      { date: 802, count: 20 },
      { date: 803, count: 15 },
      { date: 804, count: 14 },
      { date: 805, count: 36 },
      { date: 806, count: 16 },
      { date: 808, count: 43 },
      { date: 809, count: 40 },
      { date: 810, count: 41 },
      { date: 811, count: 26 },
      { date: 812, count: 43 },
      { date: 813, count: 22 },
      { date: 815, count: 46 },
      { date: 816, count: 30 },
      { date: 817, count: 28 },
      { date: 818, count: 31 },
      { date: 819, count: 37 },
      { date: 820, count: 27 },
      { date: 822, count: 26 },
      { date: 823, count: 22 },
      { date: 824, count: 23 },
      { date: 825, count: 21 },
      { date: 826, count: 36 },
      { date: 827, count: 19 },
    ],
    one: [
      { date: 801, count: 15 },
      { date: 802, count: 12 },
      { date: 803, count: 15 },
      { date: 804, count: 15 },
      { date: 805, count: 38 },
      { date: 806, count: 9 },
      { date: 808, count: 15 },
      { date: 809, count: 13 },
      { date: 810, count: 13 },
      { date: 811, count: 14 },
      { date: 812, count: 15 },
      { date: 813, count: 17 },
      { date: 815, count: 38 },
      { date: 816, count: 30 },
      { date: 817, count: 32 },
      { date: 818, count: 24 },
      { date: 819, count: 26 },
      { date: 820, count: 16 },
      { date: 822, count: 21 },
      { date: 823, count: 13 },
      { date: 824, count: 12 },
      { date: 825, count: 8 },
      { date: 826, count: 22 },
      { date: 827, count: 8 },
    ],
    two: [
      { date: 801, count: 8 },
      { date: 802, count: 6 },
      { date: 803, count: 6 },
      { date: 804, count: 6 },
      { date: 805, count: 19 },
      { date: 806, count: 1 },
      { date: 808, count: 8 },
      { date: 809, count: 7 },
      { date: 810, count: 7 },
      { date: 811, count: 7 },
      { date: 812, count: 8 },
      { date: 813, count: 12 },
      { date: 815, count: 26 },
      { date: 816, count: 22 },
      { date: 817, count: 18 },
      { date: 818, count: 16 },
      { date: 819, count: 16 },
      { date: 820, count: 9 },
      { date: 822, count: 14 },
      { date: 823, count: 8 },
      { date: 824, count: 9 },
      { date: 825, count: 7 },
      { date: 826, count: 13 },
      { date: 827, count: 7 },
    ],
    three: [
      { date: 801, count: 3 },
      { date: 802, count: 0 },
      { date: 803, count: 1 },
      { date: 804, count: 0 },
      { date: 805, count: 6 },
      { date: 806, count: 0 },
      { date: 808, count: 2 },
      { date: 809, count: 2 },
      { date: 810, count: 1 },
      { date: 811, count: 3 },
      { date: 812, count: 2 },
      { date: 813, count: 0 },
      { date: 815, count: 7 },
      { date: 816, count: 2 },
      { date: 817, count: 2 },
      { date: 818, count: 1 },
      { date: 819, count: 3 },
      { date: 820, count: 0 },
      { date: 822, count: 2 },
      { date: 823, count: 3 },
      { date: 824, count: 0 },
      { date: 825, count: 1 },
      { date: 826, count: 4 },
      { date: 827, count: 1 },
    ],
  },

  summary: [
    {
      level: 2,
      all: 1495,
      angryCustomer: 46,
      percent: 3.3,
      hitmap: "",
      total: {
        all: 4559,
        normal: 3910,
        one: 374,
        two: 225,
        three: 40,
      },
    },
    {
      level: 1,
      all: 304,
      angryCustomer: 10,
      percent: 2.5,
      hitmap: "",
      total: {
        all: 972,
        normal: 790,
        one: 88,
        two: 39,
        three: 8,
      },
    },
    {
      level: 1,
      all: 404,
      angryCustomer: 10,
      percent: 3.1,
      hitmap: "",
      total: {
        all: 1232,
        normal: 1106,
        one: 73,
        two: 42,
        three: 8,
      },
    },
    {
      level: 2,
      all: 487,
      angryCustomer: 15,
      percent: 3.7,
      hitmap: "",
      total: {
        all: 1485,
        normal: 1238,
        one: 69,
        two: 92,
        three: 13,
      },
    },
    {
      level: 1,
      all: 300,
      angryCustomer: 11,
      percent: 3.1,
      hitmap: "",
      total: {
        all: 915,
        normal: 783,
        one: 71,
        two: 50,
        three: 9,
      },
    },
  ],

  action: {
    one: "O",
    two: "O",
    three: "X",
    four: "미해당",
  },
};
const END_WEEK = [801, 808, 815, 822, 829, 905, 912, 919, 926];
const today = 901;
// const today = +`${new Date().getMonth() + 1}${
//   new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate()
// }`;
const nowMonth = Math.floor(today / 100);
const nowWeek =
  END_WEEK.findIndex((el) => el > today) % 4 === 0
    ? 4
    : END_WEEK.findIndex((el) => el > today) % 4;
console.log(nowWeek);

const idx = window.location.search.split("=")[1];
let type = "month";
let month = 8;
let week = 1;
const ran = Math.floor(Math.random() * 2) + 1;
// const data = ran === 1 ? ONE : TWO;
const data = ONE;

const $idx = document.querySelector(".idx");
const $color_list = document.querySelector(".color_list");
const $time_list = document.querySelector(".time_list");
const $momth = document.querySelector(".momth");
const $week = document.querySelector(".week");
const $left_arrow = document.querySelector(".left_arrow");
const $right_arrow = document.querySelector(".right_arrow");
const $level = document.querySelector(".level");
const $all = document.querySelector(".all");
const $angryCustomer = document.querySelector(".angryCustomer");
const $percent = document.querySelector(".percent");
const $date = document.querySelector(".date");

const percent = (stat) => {
  const percent = (stat / 100) * 100;
  return percent > 100 ? 100 : percent;
};
// 그래프 생성
const ctx = document.getElementById("myChart").getContext("2d");

myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: MONTH_LABEL.filter((el) => el.date < today).map((el) => el.label),
    datasets: [
      {
        label: "상담수",
        data: data.daily.all
          .filter((el) => el.date < today)
          .map((el) => el.count),
        fill: false,
        borderColor: "#3577F6",
        pointBorderWidth: 3,
        tension: 0.1,
      },
      {
        label: "분노1",
        data: data.daily.one
          .filter((el) => el.date < today)
          .map((el) => el.count),
        fill: false,
        borderColor: "#9E9E9E",
        pointBorderWidth: 3,
        tension: 0.1,
      },
      {
        label: "분노2",
        data: data.daily.two
          .filter((el) => el.date < today)
          .map((el) => el.count),
        fill: false,
        borderColor: "#FFFB8C",
        pointBorderWidth: 3,
        tension: 0.1,
      },
      {
        label: "분노3",
        data: data.daily.three
          .filter((el) => el.date < today)
          .map((el) => el.count),
        fill: false,
        borderColor: "#89FFBF",
        pointBorderWidth: 3,
        tension: 0.1,
      },
      {
        label: "중립",
        data: data.daily.normal
          .filter((el) => el.date < today)
          .map((el) => el.count),
        fill: false,
        borderColor: "#D36FEF",
        pointBorderWidth: 3,
        tension: 0.1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
        // max: 100,
      },
    },
  },
});

// 일:시:분
const minToDateString = (_min) => {
  const day = _min / 1440;
  const time = (_min % 1440) / 60;
  const min = (_min % 1440) % 60;
};
// 그래프 하단 라벨
const labelRender = () => {
  $color_list.innerHTML = `
      ${DATA.map((item) => {
        return `
        <div class="flex">
          <div style="background-color: ${item.color};" class="color"></div>
          <span>${item.text}</span>
        </div>
        `;
      }).join("")}
  `;
};
// 누적 가로막대차트
const render = () => {
  const idx = type === "month" ? 0 : week;
  $time_list.innerHTML = `
      ${TIME_LABEL.map((item) => {
        const summary = data.summary[idx].total;
        const percent = (summary[item.key] / summary.all) * 100;
        return `
        <li>
          <div class="flex jb">
            <p>
              ${item.title}
            </p>
            <span>
              ${minToDateString(summary[item.key])}분
            </span>
          </div>
          <div class="gauge_wrap"><div style="width: ${percent}%; background-color:${
          item.color
        };" class="gauge"></div></div>
        </li>
        `;
      }).join("")}
  `;
};
// 버튼 색상 토글
const buttonToggle = () => {
  if (type === "month") {
    $momth.style.backgroundColor = "#3577F6";
    $week.style.backgroundColor = "#DFDFDF";
    return;
  }
  $momth.style.backgroundColor = "#DFDFDF";
  $week.style.backgroundColor = "#3577F6";
};
// 화살표 색상 토글
const arrowToggle = () => {
  const change = {
    start: () => {
      $left_arrow.src = "../img/leftArrowOff.jpg";
    },
    noStart: () => {
      $left_arrow.src = "../img/leftArrow.jpg";
    },
    end: () => {
      $right_arrow.src = "../img/rightArrowOff.jpg";
    },
    noEnd: () => {
      $right_arrow.src = "../img/rightArrow.jpg";
    },
  };
  if (
    (type === "month" && month === 8) ||
    (type === "week" && month === 8 && week === 1)
  ) {
    change.start();
  } else {
    change.noStart();
  }
  console.log(type === "month" && month === nowMonth);
  console.log(type === "week" && month === nowMonth && week === 4);

  if (
    (type === "month" && month === nowMonth) ||
    (type === "week" && month === nowMonth && week === 4)
  ) {
    change.end();
  } else {
    change.noEnd();
  }
};
// 저번,다음주
const onChangeWeek = (num) => {
  if (type === "month") return;
  if (num === 1 && month === nowMonth && week === 4) return;
  if (num === -1 && week === 1) return;
  week = week + num;
  $date.innerHTML = `8월 ${week}주차`;
  changeChartData();
  arrowToggle();
};
// 요약
const changeSummary = () => {
  const summaryIdx = type === "month" ? 0 : week;
  const fuck = data.summary[summaryIdx];
  console.log(fuck);
  $level.innerHTML = fuck.level;
  $all.innerHTML = fuck.all;
  $angryCustomer.innerHTML = fuck.angryCustomer;
  $percent.innerHTML = fuck.percent;
};
// 차트 데이터 변경
const changeChartData = () => {
  const begin = type === "month" ? undefined : (week - 1) * 6;
  const end = type === "month" ? undefined : week * 6;
  const all = data.daily.all
    .slice(begin, end)
    .filter((el) => el.date < today)
    .map((el) => el.count);
  const normal = data.daily.normal
    .slice(begin, end)
    .filter((el) => el.date < today)
    .map((el) => el.count);
  const one = data.daily.one
    .slice(begin, end)
    .filter((el) => el.date < today)
    .map((el) => el.count);
  const two = data.daily.two
    .slice(begin, end)
    .filter((el) => el.date < today)
    .map((el) => el.count);
  const three = data.daily.three
    .slice(begin, end)
    .filter((el) => el.date < today)
    .map((el) => el.count);

  myChart.data.labels =
    type === "month"
      ? MONTH_LABEL.filter((el) => el.date < today).map((el) => el.label)
      : WEEK_LABEL;
  myChart.data.datasets[0].data = all;
  myChart.data.datasets[1].data = normal;
  myChart.data.datasets[2].data = one;
  myChart.data.datasets[3].data = two;
  myChart.data.datasets[4].data = three;
  myChart.update();
  changeSummary();
};

// 월/주별 버튼 클릭
const onClickButton = (_type) => {
  $date.innerHTML = _type === "month" ? "8월" : `8월 ${week}주차`;
  type = _type;
  buttonToggle();
  changeChartData();
  arrowToggle();
};

$momth.addEventListener("click", () => onClickButton("month"));
$week.addEventListener("click", () => onClickButton("week"));
$left_arrow.addEventListener("click", () => onChangeWeek(-1));
$right_arrow.addEventListener("click", () => onChangeWeek(1));

const init = () => {
  $idx.innerHTML = idx;
  render();
  labelRender();
  arrowToggle();
};

init();
