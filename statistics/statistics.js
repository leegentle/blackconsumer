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
  { date: 829, label: 29 },
  { date: 830, label: 30 },
  { date: 831, label: 31 },
  { date: 901, label: 1 },
  { date: 902, label: 2 },
  { date: 903, label: 3 },
  { date: 904, label: 4 },
  { date: 905, label: 5 },
  { date: 906, label: 6 },
  { date: 907, label: 7 },
  { date: 908, label: 8 },
  { date: 909, label: 9 },
  { date: 910, label: 10 },
  { date: 912, label: 12 },
  { date: 913, label: 13 },
  { date: 914, label: 14 },
  { date: 915, label: 15 },
  { date: 916, label: 16 },
  { date: 917, label: 17 },
  { date: 919, label: 19 },
  { date: 920, label: 20 },
  { date: 921, label: 21 },
  { date: 922, label: 22 },
  { date: 923, label: 23 },
];
const WEEK_LABEL = ["월", "화", "수", "목", "금", "토"];
const TIME_LABEL = [
  { title: "총상담", color: "#04E762", key: "all" },
  { title: "중립", color: "#34D1BF", key: "normal" },
  { title: "분노1", color: "#0496FF", key: "one" },
  { title: "분노2", color: "#DE0D92", key: "two" },
  { title: "분노3", color: "#6665DD", key: "three" },
];

const TWO = {
  daily: {
    all: [
      { date: 801, count: 80 },
      { date: 802, count: 63 },
      { date: 803, count: 43 },
      { date: 804, count: 30 },
      { date: 805, count: 58 },
      { date: 806, count: 27 },
      { date: 808, count: 103 },
      { date: 809, count: 65 },
      { date: 810, count: 55 },
      { date: 811, count: 45 },
      { date: 812, count: 82 },
      { date: 813, count: 35 },
      { date: 815, count: 91 },
      { date: 816, count: 61 },
      { date: 817, count: 47 },
      { date: 818, count: 47 },
      { date: 819, count: 81 },
      { date: 820, count: 35 },
      { date: 822, count: 51 },
      { date: 823, count: 41 },
      { date: 824, count: 41 },
      { date: 825, count: 34 },
      { date: 826, count: 75 },
      { date: 827, count: 29 },
      { date: 829, count: 80 },
      { date: 830, count: 71 },
      { date: 831, count: 71 },
      { date: 901, count: 47 },
      { date: 902, count: 78 },
      { date: 903, count: 42 },
      { date: 904, count: 69 },
      { date: 905, count: 52 },
      { date: 906, count: 42 },
      { date: 907, count: 35 },
      { date: 908, count: 74 },
      { date: 909, count: 30 },
      { date: 910, count: 56 },
      { date: 912, count: 51 },
      { date: 913, count: 37 },
      { date: 914, count: 40 },
      { date: 915, count: 58 },
      { date: 916, count: 24 },
      { date: 917, count: 91 },
      { date: 919, count: 59 },
      { date: 920, count: 71 },
      { date: 921, count: 40 },
      { date: 922, count: 93 },
      { date: 923, count: 65 },
    ],
    normal: [
      { date: 801, count: 31 },
      { date: 802, count: 25 },
      { date: 803, count: 23 },
      { date: 804, count: 19 },
      { date: 805, count: 26 },
      { date: 806, count: 20 },
      { date: 808, count: 41 },
      { date: 809, count: 27 },
      { date: 810, count: 27 },
      { date: 811, count: 23 },
      { date: 812, count: 41 },
      { date: 813, count: 23 },
      { date: 815, count: 39 },
      { date: 816, count: 28 },
      { date: 817, count: 24 },
      { date: 818, count: 27 },
      { date: 819, count: 36 },
      { date: 820, count: 28 },
      { date: 822, count: 30 },
      { date: 823, count: 21 },
      { date: 824, count: 24 },
      { date: 825, count: 20 },
      { date: 826, count: 36 },
      { date: 827, count: 22 },
      { date: 829, count: 32 },
      { date: 830, count: 30 },
      { date: 831, count: 31 },
      { date: 901, count: 24 },
      { date: 902, count: 33 },
      { date: 903, count: 24 },
      { date: 904, count: 30 },
      { date: 905, count: 25 },
      { date: 906, count: 23 },
      { date: 907, count: 23 },
      { date: 908, count: 30 },
      { date: 909, count: 21 },
      { date: 910, count: 26 },
      { date: 912, count: 25 },
      { date: 913, count: 23 },
      { date: 914, count: 23 },
      { date: 915, count: 27 },
      { date: 916, count: 19 },
      { date: 917, count: 37 },
      { date: 919, count: 26 },
      { date: 920, count: 33 },
      { date: 921, count: 21 },
      { date: 922, count: 38 },
      { date: 923, count: 30 },
    ],
    one: [
      { date: 801, count: 25 },
      { date: 802, count: 20 },
      { date: 803, count: 12 },
      { date: 804, count: 8 },
      { date: 805, count: 17 },
      { date: 806, count: 7 },
      { date: 808, count: 31 },
      { date: 809, count: 19 },
      { date: 810, count: 15 },
      { date: 811, count: 13 },
      { date: 812, count: 31 },
      { date: 813, count: 8 },
      { date: 815, count: 26 },
      { date: 816, count: 17 },
      { date: 817, count: 13 },
      { date: 818, count: 11 },
      { date: 819, count: 22 },
      { date: 820, count: 6 },
      { date: 822, count: 13 },
      { date: 823, count: 12 },
      { date: 824, count: 11 },
      { date: 825, count: 10 },
      { date: 826, count: 20 },
      { date: 827, count: 6 },
      { date: 829, count: 25 },
      { date: 830, count: 21 },
      { date: 831, count: 21 },
      { date: 901, count: 13 },
      { date: 902, count: 23 },
      { date: 903, count: 11 },
      { date: 904, count: 20 },
      { date: 905, count: 15 },
      { date: 906, count: 11 },
      { date: 907, count: 8 },
      { date: 908, count: 20 },
      { date: 909, count: 8 },
      { date: 910, count: 16 },
      { date: 912, count: 14 },
      { date: 913, count: 9 },
      { date: 914, count: 11 },
      { date: 915, count: 17 },
      { date: 916, count: 5 },
      { date: 917, count: 28 },
      { date: 919, count: 17 },
      { date: 920, count: 20 },
      { date: 921, count: 11 },
      { date: 922, count: 29 },
      { date: 923, count: 18 },
    ],
    two: [
      { date: 801, count: 15 },
      { date: 802, count: 12 },
      { date: 803, count: 6 },
      { date: 804, count: 3 },
      { date: 805, count: 9 },
      { date: 806, count: 0 },
      { date: 808, count: 19 },
      { date: 809, count: 12 },
      { date: 810, count: 7 },
      { date: 811, count: 6 },
      { date: 812, count: 19 },
      { date: 813, count: 4 },
      { date: 815, count: 17 },
      { date: 816, count: 10 },
      { date: 817, count: 6 },
      { date: 818, count: 7 },
      { date: 819, count: 15 },
      { date: 820, count: 1 },
      { date: 822, count: 7 },
      { date: 823, count: 7 },
      { date: 824, count: 6 },
      { date: 825, count: 4 },
      { date: 826, count: 13 },
      { date: 827, count: 1 },
      { date: 829, count: 15 },
      { date: 830, count: 13 },
      { date: 831, count: 12 },
      { date: 901, count: 7 },
      { date: 902, count: 14 },
      { date: 903, count: 6 },
      { date: 904, count: 13 },
      { date: 905, count: 8 },
      { date: 906, count: 6 },
      { date: 907, count: 4 },
      { date: 908, count: 13 },
      { date: 909, count: 1 },
      { date: 910, count: 9 },
      { date: 912, count: 8 },
      { date: 913, count: 5 },
      { date: 914, count: 5 },
      { date: 915, count: 9 },
      { date: 916, count: 0 },
      { date: 917, count: 17 },
      { date: 919, count: 11 },
      { date: 920, count: 12 },
      { date: 921, count: 7 },
      { date: 922, count: 17 },
      { date: 923, count: 11 },
    ],
    three: [
      { date: 801, count: 9 },
      { date: 802, count: 6 },
      { date: 803, count: 2 },
      { date: 804, count: 0 },
      { date: 805, count: 6 },
      { date: 806, count: 0 },
      { date: 808, count: 12 },
      { date: 809, count: 7 },
      { date: 810, count: 6 },
      { date: 811, count: 3 },
      { date: 812, count: 12 },
      { date: 813, count: 0 },
      { date: 815, count: 9 },
      { date: 816, count: 6 },
      { date: 817, count: 4 },
      { date: 818, count: 2 },
      { date: 819, count: 8 },
      { date: 820, count: 0 },
      { date: 822, count: 1 },
      { date: 823, count: 1 },
      { date: 824, count: 0 },
      { date: 825, count: 0 },
      { date: 826, count: 6 },
      { date: 827, count: 0 },
      { date: 829, count: 8 },
      { date: 830, count: 7 },
      { date: 831, count: 7 },
      { date: 901, count: 3 },
      { date: 902, count: 8 },
      { date: 903, count: 1 },
      { date: 904, count: 6 },
      { date: 905, count: 4 },
      { date: 906, count: 2 },
      { date: 907, count: 0 },
      { date: 908, count: 6 },
      { date: 909, count: 0 },
      { date: 910, count: 5 },
      { date: 912, count: 4 },
      { date: 913, count: 0 },
      { date: 914, count: 1 },
      { date: 915, count: 5 },
      { date: 916, count: 0 },
      { date: 917, count: 9 },
      { date: 919, count: 5 },
      { date: 920, count: 6 },
      { date: 921, count: 1 },
      { date: 922, count: 9 },
      { date: 923, count: 6 },
    ],
  },

  summary: [
    {
      level: 3,
      all: 1319,
      angryCustomer: 100,
      percent: 7.6,
      hitmap: "",
      total: {
        all: 4022,
        normal: 3439,
        one: 317,
        two: 178,
        three: 88,
      },
    },
    {
      level: 2,
      all: 301,
      angryCustomer: 23,
      percent: 7.6,
      hitmap: "",
      total: {
        all: 918,
        normal: 783,
        one: 75,
        two: 39,
        three: 20,
      },
    },
    {
      level: 2,
      all: 385,
      angryCustomer: 40,
      percent: 10.4,
      hitmap: "",
      total: {
        all: 1174,
        normal: 981,
        one: 99,
        two: 58,
        three: 35,
      },
    },
    {
      level: 2,
      all: 362,
      angryCustomer: 29,
      percent: 8.0,
      hitmap: "",
      total: {
        all: 1104,
        normal: 949,
        one: 80,
        two: 48,
        three: 25,
      },
    },
    {
      level: 1,
      all: 271,
      angryCustomer: 8,
      percent: 3.0,
      hitmap: "",
      total: {
        all: 826,
        normal: 725,
        one: 61,
        two: 32,
        three: 7,
      },
    },
    // 9월
    {
      level: 3,
      all: 1376,
      angryCustomer: 103,
      percent: 7.5,
      hitmap: "",
      total: {
        all: 4196,
        normal: 3580,
        one: 332,
        two: 193,
        three: 90,
      },
    },
    {
      level: 2,
      all: 389,
      angryCustomer: 34,
      percent: 8.7,
      hitmap: "",
      total: {
        all: 1186,
        normal: 1001,
        one: 96,
        two: 58,
        three: 30,
      },
    },
    {
      level: 2,
      all: 302,
      angryCustomer: 18,
      percent: 6.0,
      hitmap: "",
      total: {
        all: 921,
        normal: 796,
        one: 69,
        two: 39,
        three: 15,
      },
    },
    {
      level: 2,
      all: 266,
      angryCustomer: 15,
      percent: 5.6,
      hitmap: "",
      total: {
        all: 811,
        normal: 705,
        one: 61,
        two: 31,
        three: 13,
      },
    },
    {
      level: 2,
      all: 419,
      angryCustomer: 36,
      percent: 8.6,
      hitmap: "",
      total: {
        all: 1277,
        normal: 1076,
        one: 104,
        two: 65,
        three: 31,
      },
    },
  ],

  action: ["O", "O", "X", "미해당"],
};
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
      { date: 829, count: 93 },
      { date: 830, count: 77 },
      { date: 831, count: 72 },
      { date: 901, count: 64 },
      { date: 902, count: 90 },
      { date: 903, count: 48 },
      { date: 904, count: 72 },
      { date: 905, count: 53 },
      { date: 906, count: 57 },
      { date: 907, count: 52 },
      { date: 908, count: 72 },
      { date: 909, count: 30 },
      { date: 910, count: 46 },
      { date: 912, count: 37 },
      { date: 913, count: 32 },
      { date: 914, count: 32 },
      { date: 915, count: 63 },
      { date: 916, count: 33 },
      { date: 917, count: 88 },
      { date: 919, count: 67 },
      { date: 920, count: 61 },
      { date: 921, count: 65 },
      { date: 922, count: 81 },
      { date: 923, count: 44 },
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
      { date: 829, count: 46 },
      { date: 830, count: 38 },
      { date: 831, count: 39 },
      { date: 901, count: 41 },
      { date: 902, count: 46 },
      { date: 903, count: 34 },
      { date: 904, count: 37 },
      { date: 905, count: 34 },
      { date: 906, count: 33 },
      { date: 907, count: 31 },
      { date: 908, count: 37 },
      { date: 909, count: 24 },
      { date: 910, count: 30 },
      { date: 912, count: 29 },
      { date: 913, count: 24 },
      { date: 914, count: 25 },
      { date: 915, count: 39 },
      { date: 916, count: 28 },
      { date: 917, count: 46 },
      { date: 919, count: 37 },
      { date: 920, count: 38 },
      { date: 921, count: 31 },
      { date: 922, count: 48 },
      { date: 923, count: 35 },
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
      { date: 829, count: 26 },
      { date: 830, count: 22 },
      { date: 831, count: 20 },
      { date: 901, count: 15 },
      { date: 902, count: 26 },
      { date: 903, count: 12 },
      { date: 904, count: 21 },
      { date: 905, count: 14 },
      { date: 906, count: 15 },
      { date: 907, count: 14 },
      { date: 908, count: 21 },
      { date: 909, count: 5 },
      { date: 910, count: 11 },
      { date: 912, count: 7 },
      { date: 913, count: 7 },
      { date: 914, count: 6 },
      { date: 915, count: 15 },
      { date: 916, count: 4 },
      { date: 917, count: 21 },
      { date: 919, count: 20 },
      { date: 920, count: 16 },
      { date: 921, count: 20 },
      { date: 922, count: 20 },
      { date: 923, count: 7 },
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
      { date: 829, count: 15 },
      { date: 830, count: 14 },
      { date: 831, count: 12 },
      { date: 901, count: 7 },
      { date: 902, count: 15 },
      { date: 903, count: 2 },
      { date: 904, count: 13 },
      { date: 905, count: 5 },
      { date: 906, count: 8 },
      { date: 907, count: 7 },
      { date: 908, count: 13 },
      { date: 909, count: 1 },
      { date: 910, count: 4 },
      { date: 912, count: 1 },
      { date: 913, count: 1 },
      { date: 914, count: 1 },
      { date: 915, count: 6 },
      { date: 916, count: 0 },
      { date: 917, count: 15 },
      { date: 919, count: 8 },
      { date: 920, count: 6 },
      { date: 921, count: 12 },
      { date: 922, count: 11 },
      { date: 923, count: 2 },
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
      { date: 829, count: 6 },
      { date: 830, count: 3 },
      { date: 831, count: 1 },
      { date: 901, count: 1 },
      { date: 902, count: 3 },
      { date: 903, count: 0 },
      { date: 904, count: 1 },
      { date: 905, count: 0 },
      { date: 906, count: 1 },
      { date: 907, count: 0 },
      { date: 908, count: 1 },
      { date: 909, count: 0 },
      { date: 910, count: 1 },
      { date: 912, count: 0 },
      { date: 913, count: 0 },
      { date: 914, count: 0 },
      { date: 915, count: 3 },
      { date: 916, count: 1 },
      { date: 917, count: 6 },
      { date: 919, count: 2 },
      { date: 920, count: 1 },
      { date: 921, count: 2 },
      { date: 922, count: 2 },
      { date: 923, count: 0 },
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
    // 9월
    {
      level: 2,
      all: 1427,
      angryCustomer: 35,
      percent: 2.4,
      hitmap: "",
      total: {
        all: 4320,
        normal: 3862,
        one: 310,
        two: 155,
        three: 30,
      },
    },
    {
      level: 1,
      all: 444,
      angryCustomer: 16,
      percent: 3.2,
      hitmap: "",
      total: {
        all: 1354,
        normal: 1002,
        one: 102,
        two: 56,
        three: 12,
      },
    },
    {
      level: 0,
      all: 336,
      angryCustomer: 3,
      percent: 0.9,
      hitmap: "",
      total: {
        all: 1024,
        normal: 904,
        one: 76,
        two: 40,
        three: 2,
      },
    },
    {
      level: 1,
      all: 243,
      angryCustomer: 5,
      percent: 2.1,
      hitmap: "",
      total: {
        all: 741,
        normal: 704,
        one: 42,
        two: 11,
        three: 4,
      },
    },
    {
      level: 1,
      all: 406,
      angryCustomer: 13,
      percent: 3.2,
      hitmap: "",
      total: {
        all: 1238,
        normal: 1091,
        one: 88,
        two: 46,
        three: 11,
      },
    },
  ],

  action: ["O", "X", "미해당", "미해당"],
};
const END_WEEK = [801, 808, 815, 822, 829, 905, 912, 919, 926];
// const today = 925;
const today = +`${new Date().getMonth() + 1}${
  new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate()
}`;
const nowMonth = Math.floor(today / 100);
const nowWeek =
  END_WEEK.findIndex((el) => el > today) % 4 === 0
    ? 4
    : END_WEEK.findIndex((el) => el > today) % 4;
const idx = window.location.search.split("=")[1];
let type = "month";
let month = 8;
let week = 1;
const ran = Math.floor(Math.random() * 2) + 1;
console.log(ran);
const data = ran === 1 ? ONE : TWO;
// const data = ONE;

const $today = document.querySelector(".today");
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
const $조치 = document.getElementsByClassName("조치");

const percent = (stat) => {
  const percent = (stat / 100) * 100;
  return percent > 100 ? 100 : percent;
};
// 그래프 생성
const ctx = document.getElementById("myChart").getContext("2d");

myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: MONTH_LABEL.filter((el) => Math.floor(el.date / 100) === month)
      .filter((el) => el.date <= today)
      .map((el) => el.label),

    datasets: [
      {
        label: "상담수",
        data: data.daily.all
          .filter((el) => el.date <= today)
          .map((el) => el.count),
        fill: false,
        borderColor: "#3577F6",
        pointBorderWidth: 3,
        tension: 0.1,
      },
      {
        label: "분노1",
        data: data.daily.one
          .filter((el) => el.date <= today)
          .map((el) => el.count),
        fill: false,
        borderColor: "#9E9E9E",
        pointBorderWidth: 3,
        tension: 0.1,
      },
      {
        label: "분노2",
        data: data.daily.two
          .filter((el) => el.date <= today)
          .map((el) => el.count),
        fill: false,
        borderColor: "#FFFB8C",
        pointBorderWidth: 3,
        tension: 0.1,
      },
      {
        label: "분노3",
        data: data.daily.three
          .filter((el) => el.date <= today)
          .map((el) => el.count),
        fill: false,
        borderColor: "#89FFBF",
        pointBorderWidth: 3,
        tension: 0.1,
      },
      {
        label: "중립",
        data: data.daily.normal
          .filter((el) => el.date <= today)
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

// 조치사항
const 조치함수 = () => {
  for (let i = 0; i < data.action.length; i++) {
    $조치[i].innerHTML = data.action[i];
  }
};

// 일:시:분
const minToDateString = (_min) => {
  const day = Math.floor(_min / 1440) ? Math.floor(_min / 1440) + "일 " : "";
  const time = Math.floor((_min % 1440) / 60)
    ? Math.floor((_min % 1440) / 60) + "시간 "
    : "";
  const min = Math.floor((_min % 1440) % 60);
  return `${day}${time}${min}분`;
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
// 가로막대차트
const render = () => {
  let idx = type === "month" ? 0 : week;
  if (month === 9) {
    idx = idx + 5;
  }
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
              ${minToDateString(summary[item.key])}
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
  if (
    (type === "month" && month === nowMonth) ||
    (type === "week" && month === nowMonth && (week % 4 || 4) === nowWeek)
  ) {
    change.end();
  } else {
    change.noEnd();
  }
};
// 저번,다음버튼
const onChangeWeek = (num) => {
  if (type === "month") {
    if ((num === 1 && month === nowMonth) || (num === -1 && month === 8))
      return;
    month = month + num;
    $date.innerHTML = `${month}월`;
  } else {
    if (num === 1 && month === nowMonth && week === nowWeek) return;
    if (num === -1 && month === 8 && week === 1) return;
    week = week + num;
    if (month === 8 && week === 5) {
      month = 9;
      week = 1;
    }
    if (month === 9 && week === 0) {
      month = 8;
      week = 4;
    }
    $date.innerHTML = `${month}월 ${week}주차`;
  }

  changeChartData();
  arrowToggle();
};
// 요약
const changeSummary = () => {
  let summaryIdx = type === "month" ? 0 : week;
  if (month === 9) {
    summaryIdx = summaryIdx + 5;
  }
  const one = data.summary[summaryIdx];
  $level.innerHTML = one.level;
  $all.innerHTML = one.all;
  $angryCustomer.innerHTML = one.angryCustomer;
  $percent.innerHTML = one.percent;
};
// 차트 데이터 변경
const changeChartData = () => {
  const begin = type === "month" ? undefined : (week - 1) * 6;
  const end = type === "month" ? undefined : week * 6;

  const all = data.daily.all
    .filter((el) => Math.floor(el.date / 100) === month)
    .slice(begin, end)
    .filter((el) => el.date <= today)
    .map((el) => el.count);
  const normal = data.daily.normal
    .filter((el) => Math.floor(el.date / 100) === month)
    .slice(begin, end)
    .filter((el) => el.date <= today)
    .map((el) => el.count);
  const one = data.daily.one
    .filter((el) => Math.floor(el.date / 100) === month)
    .slice(begin, end)
    .filter((el) => el.date <= today)
    .map((el) => el.count);
  const two = data.daily.two
    .filter((el) => Math.floor(el.date / 100) === month)
    .slice(begin, end)
    .filter((el) => el.date <= today)
    .map((el) => el.count);
  const three = data.daily.three
    .filter((el) => Math.floor(el.date / 100) === month)
    .slice(begin, end)
    .filter((el) => el.date <= today)
    .map((el) => el.count);

  myChart.data.labels =
    type === "month"
      ? MONTH_LABEL.filter((el) => Math.floor(el.date / 100) === month)
          .filter((el) => el.date <= today)
          .map((el) => el.label)
      : WEEK_LABEL;
  // : all.map((el, idx) => WEEK_LABEL[idx]);
  myChart.data.datasets[0].data = all;
  myChart.data.datasets[1].data = normal;
  myChart.data.datasets[2].data = one;
  myChart.data.datasets[3].data = two;
  myChart.data.datasets[4].data = three;
  myChart.update();
  changeSummary();
  render();
  조치함수();
};

// 월/주별 버튼 클릭
const onClickButton = (_type) => {
  $date.innerHTML = _type === "month" ? `${month}월` : `${month}월 ${week}주차`;
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
  조치함수();
  changeSummary();
  labelRender();
  arrowToggle();
  $today.innerHTML = `2023-0${new Date().getMonth() + 1}-${
    new Date().getDate() < 10
      ? `0${new Date().getDate()}`
      : new Date().getDate()
  }`;
};

init();
