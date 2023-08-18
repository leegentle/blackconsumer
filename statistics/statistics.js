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
  1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22, 23, 24,
  25, 26, 27,
];
const WEEK_LABEL = ["월", "화", "수", "목", "금", "토"];
const TIME_LABEL = ["총상담", "중립", "분노1", "분노2", "분노3"];

const ONE = {
  daily: {
    all: [
      69, 38, 37, 35, 99, 26, 68, 62, 62, 50, 111, 51, 117, 84, 80, 72, 82, 52,
      63, 46, 44, 37, 75, 35,
    ],
    normal: [
      43, 20, 15, 14, 36, 16, 43, 40, 41, 26, 43, 22, 46, 30, 28, 31, 37, 27,
      26, 22, 23, 21, 36, 19,
    ],
    one: [
      15, 12, 15, 15, 38, 9, 15, 13, 13, 14, 15, 17, 38, 30, 32, 24, 26, 16, 21,
      13, 12, 8, 22, 8,
    ],
    two: [
      8, 6, 6, 6, 19, 1, 8, 7, 7, 7, 8, 12, 26, 22, 18, 16, 16, 9, 14, 8, 9, 7,
      13, 7,
    ],
    three: [
      3, 0, 1, 0, 6, 0, 2, 2, 1, 3, 2, 0, 7, 2, 2, 1, 3, 0, 2, 3, 0, 1, 4, 1,
    ],
    percent: [
      4.3, 0.0, 2.7, 0.0, 6.1, 0.0, 2.9, 3.2, 1.6, 6.0, 1.8, 0.0, 6.0, 2.4, 2.5,
      1.4, 3.7, 0.0, 3.2, 6.5, 0.0, 2.7, 5.3, 2.9,
    ],
  },

  summary: [
    {
      level: 2,
      all: 1495,
      angryCustomer: 46,
      percent: 3.3,
    },
    {
      level: 1,
      all: 304,
      angryCustomer: 10,
      percent: 2.5,
    },
    {
      level: 1,
      all: 404,
      angryCustomer: 10,
      percent: 3.1,
    },
    {
      level: 2,
      all: 487,
      angryCustomer: 15,
      percent: 3.7,
    },
    {
      level: 1,
      all: 300,
      angryCustomer: 11,
      percent: 3.1,
    },
  ],

  action: {
    one: "O",
    two: "O",
    three: "X",
    four: "미해당",
  },
};

const idx = window.location.search.split("=")[1];
let type = "month";
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

const color = (stat) => {
  if (stat <= 20) return "#04E762";
  if (stat <= 40) return "#34D1BF";
  if (stat <= 60) return "#0496FF";
  if (stat <= 80) return "#6665DD";
  return "#DE0D92";
};
const percent = (stat) => {
  const percent = (stat / 100) * 100;
  return percent > 100 ? 100 : percent;
};
// 그래프 생성
const ctx = document.getElementById("myChart").getContext("2d");

myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: MONTH_LABEL,
    datasets: [
      {
        label: "상담수",
        data: data.daily.all,
        fill: false,
        borderColor: "#3577F6",
        pointBorderWidth: 3,
        tension: 0.1,
      },
      {
        label: "분노1",
        data: data.daily.one,
        fill: false,
        borderColor: "#9E9E9E",
        pointBorderWidth: 3,
        tension: 0.1,
      },
      {
        label: "분노2",
        data: data.daily.two,
        fill: false,
        borderColor: "#FFFB8C",
        pointBorderWidth: 3,
        tension: 0.1,
      },
      {
        label: "분노3",
        data: data.daily.three,
        fill: false,
        borderColor: "#89FFBF",
        pointBorderWidth: 3,
        tension: 0.1,
      },
      {
        label: "중립",
        data: data.daily.normal,
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
  $time_list.innerHTML = `
      ${TIME_DATA.map((item, idx) => {
        const time = percent(item.time);
        return `
        <li>
          <div class="flex jb">
            <p>
              ${item.title}
            </p>
            <span>
              ${time}분
            </span>
          </div>
          <div class="gauge_wrap"><div style="width: ${time}%; background-color:${color(
          time
        )};" class="gauge"></div></div>
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
// 저번,다음주
const onChangeWeek = (num) => {
  if (type === "month") return;
  if (num === 1 && week === 4) return;
  if (num === -1 && week === 1) return;
  week = week + num;
  $date.innerHTML = `8월 ${week}주차`;
  changeChartData();
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
  const all = data.daily.all.slice(begin, end);
  const normal = data.daily.normal.slice(begin, end);
  const one = data.daily.one.slice(begin, end);
  const two = data.daily.two.slice(begin, end);
  const three = data.daily.three.slice(begin, end);

  myChart.data.labels = type === "month" ? MONTH_LABEL : WEEK_LABEL;
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
};

$momth.addEventListener("click", () => onClickButton("month"));
$week.addEventListener("click", () => onClickButton("week"));
$left_arrow.addEventListener("click", () => onChangeWeek(-1));
$right_arrow.addEventListener("click", () => onChangeWeek(1));

const init = () => {
  $idx.innerHTML = idx;
  render();
  labelRender();
};

init();
