const arr = (num) => Array.from(Array(num)).map((el, idx) => idx + 1);
let data = arr(30);
const DATA = [
  {
    color: "#4F6BFF",
    text: "상담수",
  },
  {
    color: "#FFA755",
    text: "블랙컨슈머",
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
    text: "불만족",
  },
];
const TIME_DATA = [
  { title: "총상담", time: 4 },
  { title: "중립", time: 44 },
  { title: "분노1", time: 21 },
  { title: "분노2", time: 84 },
  { title: "분노3", time: 62 },
];

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

const $color_list = document.querySelector(".color_list");
const $time_list = document.querySelector(".time_list");

// 그래프 생성
const ctx = document.getElementById("myChart").getContext("2d");
const drawGraph = () => {
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: arr(30),
      datasets: [
        {
          label: "판매량",
          data: data,
          fill: false,
          borderColor: "#3577F6",
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
            stepSize: 10,
          },
          max: 100,
        },
      },
    },
  });
};

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

render();
labelRender();
drawGraph();
