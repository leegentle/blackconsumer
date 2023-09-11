// 상담원 인덱스입니다
// 여기 바꿔주시면 음성데이터 변경돼요
// 1이랑 2만 넣어주세요~
const CONSULTANT_IDX = 1;

// dom
const $result = document.querySelector(".result");
const $btn = document.querySelector("button");
const $emotionImg = document.querySelector(".emotion_img");
const $ester = document.querySelector(".ester");

const DATA1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0, 2,
    2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0,
    0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 3, 2,
    2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 1, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0,
  ],
];
const DATA2 = [
  [
    0, 0, 2, 1, 0, 0, 2, 1, 0, 2, 2, 1, 1, 0, 0, 0, 2, 1, 0, 0, 2, 2, 2, 2, 0,
    0, 2, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 2, 0, 0, 0, 2, 2, 0, 0,
    0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [
    0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 2, 3, 0, 0, 3, 0, 0, 0, 0, 3,
    0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 2, 0, 0,
  ],
  [
    0, 0, 2, 0, 2, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 3, 0, 0, 0, 2, 0, 0, 0, 0, 2,
    0, 0, 3, 0, 0, 0, 0, 0, 2, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 3, 0, 0, 2, 2, 0, 0,
    0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 2, 2, 1, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 2, 0, 1, 0,
  ],
  [
    0, 0, 1, 2, 1, 0, 0, 0, 3, 2, 1, 0, 0, 2, 3, 2, 2, 2, 0, 0, 2, 0, 2, 0, 0,
    3, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 3, 0, 2, 0, 0, 2, 1, 0, 0, 0, 2, 0,
    0, 0, 2, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 3, 0, 0, 3, 0, 0, 2, 0, 0, 3, 2, 0, 0, 2, 0, 3, 0, 0, 2, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
];

let voiceIdx = +localStorage.getItem("voiceIdx") || 1;
const voiceData =
  CONSULTANT_IDX === 1 ? DATA1[voiceIdx - 1] : DATA2[voiceIdx - 1];
const MAX = 10;
$ester.innerHTML = voiceIdx;

const TERM = 3000; // 텀

let data = [0]; // 음성 분석 결과
let idx = 0;
let failedToGetUserMedia = false; // 마이크 접근실패 여부
let recBuffers = [[], []]; // 음성 데이터
let recLength = 0; // 음성데이터 길이
let numChannels = 2; // 서라운드?
let constraints = {
  // 오디오 옵션
  audio: true,
};
let listening = false; // 녹음중
let myChart;

// if (navigator.getUserMedia) {
//   navigator.getUserMedia(
//     constraints,
//     (stream) => {
//       init(stream);
//     },
//     (err) => {
//       alert("마이크가 인식되지 않습니다");
//       failedToGetUserMedia = true;
//     }
//   );
// } else if (navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices
//     .getUserMedia(constraints)
//     .then((stream) => {
//       init(stream);
//     })
//     .catch((err) => {
//       alert("마이크가 인식되지 않습니다");
//       failedToGetUserMedia = true;
//     });
// } else failedToGetUserMedia = true;

const init = (stream) => {
  let audioContext = new AudioContext();
  let source = audioContext.createMediaStreamSource(stream);
  let context = source.context;
  let node = (
    context.createScriptProcessor || context.createJavaScriptNode
    ).call(context, 4096, numChannels, numChannels);
    node.onaudioprocess = (e) => {
      if (!listening) return;
      
      for (var i = 0; i < numChannels; i++) {
        recBuffers[i].push([...e.inputBuffer.getChannelData(i)]);
      }
      
      recLength += recBuffers[0][0].length;
    };
    source.connect(node);
    node.connect(context.destination);
};

// 그래프 생성
const ctx = document.getElementById("myChart").getContext("2d");
const drawGraph = () => {
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: voiceData.map((el, idx) => (idx + 1) * 3),
      datasets: [
        {
          // label: "판매량",
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
            stepSize: 1,
            max: 3,
          },
          max: 3,
        },
      },
    },
  });
  const interval = setInterval(async () => {
    // const dummy = await ran();
    data.push(voiceData[idx]);
    $emotionImg.src = `../img/emotion_${voiceData[idx++]}.jpg`;
    
    myChart.update();
    if (data.length >= voiceData.length) {
      clearInterval(interval); // 인터벌 종료
      listening = false;
    }
  }, TERM);
};

// 3초마다 데이터 추가 (30초 동안)

const count = () =>{

  if (voiceIdx === 1) {
    localStorage.setItem("voiceIdx", 2);
  } else {
    const lee = voiceIdx + 1 > MAX ? 1 : voiceIdx + 1;
    localStorage.setItem("voiceIdx", lee);
  }
}

count();

// 이벤트 리스너
$btn.addEventListener("click", () => {
  if (failedToGetUserMedia) {
    alert("마이크를 인식시켜주세요");
    return;
  }
  $result.style.display = "block";
  listening = true;
  drawGraph();
});
$ester.addEventListener("click", () => {
  localStorage.setItem("voiceIdx", 1);
  voiceIdx = 1;
  $ester.innerHTML = voiceIdx;
});
