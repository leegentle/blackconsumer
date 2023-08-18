const $consultant_list = document.querySelector(".consultant_list");

const MAX = 100;
const DATA = [
  {
    level: 2,
    color: "#0496FF",
    percent: 77.5,
  },
  {
    level: 3,
    color: "#6665DD",
    percent: 56.25,
  },
  {
    level: 0,
    color: "#04E762",
    percent: 40,
  },
  {
    level: 3,
    color: "#6665DD",
    percent: 15,
  },
  {
    level: 1,
    color: "#34D1BF",
    percent: 35,
  },
  {
    level: 0,
    color: "#04E762",
    percent: 80,
  },
  {
    level: 0,
    color: "#04E762",
    percent: 75,
  },
  {
    level: 1,
    color: "#34D1BF",
    percent: 55,
  },
  {
    level: 0,
    color: "#04E762",
    percent: 35,
  },
  {
    level: 2,
    color: "#0496FF",
    percent: 25,
  },
];

const color = (stat) => {
  if (stat <= 4) return "#04E762";
  if (stat <= 9) return "#34D1BF";
  if (stat <= 39) return "#0496FF";
  if (stat <= 79) return "#6665DD";
  return "#DE0D92";
};
const level = (stat) => {
  if (stat <= 4) return 0;
  if (stat <= 9) return 1;
  if (stat <= 39) return 2;
  if (stat <= 79) return 3;
  return 4;
};

const percent = (stat) => {
  const percent = (stat / MAX) * 100;
  return percent > 100 ? 100 : percent;
};

const render = () => {
  $consultant_list.innerHTML = `
      ${DATA.map(
        (item, idx) => `
        <li>
          <a href="../statistics/statistics.html?idx=${idx + 1}">
            <div class="flex jb">
              <p>
                상담사${idx + 1}
              </p>
              <span>
                ${item.level}단계
              </span>
            </div>
            <div class="gauge_wrap"><div style="width: ${
              item.percent
            }%; background-color:${item.color};" class="gauge"></div></div>
          </a>
        </li>
        `
      ).join("")}
  `;
};

render();
