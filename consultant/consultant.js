const $consultant_list = document.querySelector(".consultant_list");

const MAX = 100;
const DATA = [4, 44, 21, 84, 62, 16, 31, 8, 16, 74];

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
          <a href="">
            <div class="flex jb">
              <p>
                상담사${idx + 1}
              </p>
              <span>
                ${level(item)}단계
              </span>
            </div>
            <div class="gauge_wrap"><div style="width: ${percent(
              item
            )}%; background-color:${color(item)};" class="gauge"></div></div>
          </a>
        </li>
        `
      ).join("")}
  `;
};

render();
