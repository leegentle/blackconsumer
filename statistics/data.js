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
