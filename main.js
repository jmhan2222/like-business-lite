const passengers = {
  1: {
    grade: 'VIP',
    gradeClass: 'vip',
    avatar: '🇰🇷',
    name: '이재명 대통령',
    sub: '대한민국 제21대 대통령',
    details: ['전용 의전 탑승', '경호원 동반', '좌석 1A'],
    situation: '대통령 전용 의전 일정으로 비즈니스 라이트 구역에 탑승하셨습니다. 경호원 2명이 인근 좌석에 배치되어 있으며, 기내 보안 절차가 강화된 상황입니다. 객실사무장으로서 첫 탑승 Greeting을 드려야 합니다.',
    hints: [
      '직함을 정확히 호칭합니다. "대통령님, 탑승을 진심으로 환영합니다."',
      '의전 특성상 간결하고 품격 있게 — 긴 안내보다 따뜻한 한 마디가 효과적입니다.',
      '경호원 존재를 인식하되, 시선과 말은 대통령님께만 집중합니다.',
      '필요한 것이 있으시면 즉시 알려달라는 말로 자연스럽게 마무리합니다.'
    ],
    example: '"대통령님, 탑승을 진심으로 환영합니다. 저는 오늘 담당 객실사무장 OOO입니다. 편안한 비행이 되실 수 있도록 최선을 다하겠습니다. 필요하신 것이 있으시면 언제든지 말씀해 주십시오."',
    scores: [92, 88, 95]
  },
  2: {
    grade: 'VVIP',
    gradeClass: 'vvip',
    avatar: '💼',
    name: '김준혁 부회장',
    sub: '삼성 계열사 부회장 · JJEMS VVIP',
    details: ['탑승 횟수 연 200회+', '선호 음료: 생수 (탄산 없음)', '좌석 2A'],
    situation: '연간 200회 이상 탑승하는 최우수 VVIP 고객으로, 제주항공과 오랜 파트너십을 유지하고 있습니다. 오늘은 단독 출장으로 탑승하셨으며, 항상 조용하고 신속한 서비스를 선호하십니다.',
    hints: [
      '이름을 직접 호칭하여 개인화된 인사를 드립니다. "부회장님, 다시 만나 뵙게 되어 반갑습니다."',
      '이전 탑승 경험에 대한 감사 표현으로 유대감을 형성합니다.',
      '선호 음료(생수)를 선제적으로 안내하면 특별한 인상을 남길 수 있습니다.',
      '바쁘실 것을 고려해 짧고 임팩트 있게 마무리합니다.'
    ],
    example: '"부회장님, 탑승하신 것을 진심으로 환영합니다. 오늘도 이용해 주셔서 감사합니다. 늘 편안한 비행이 되시도록 준비하겠습니다. 생수 먼저 준비해 드릴까요?"',
    scores: [90, 94, 87]
  },
  3: {
    grade: 'VIP',
    gradeClass: 'vip',
    avatar: '🌐',
    name: 'Philip Goldberg 대사',
    sub: '주한 미국 대사 · VIP',
    details: ['외교 의전 탑승', '영어 응대 필요', '좌석 1C'],
    situation: '주한 미국 대사가 외교 일정으로 탑승하셨습니다. 영어로 소통하시며, 한국에 대한 깊은 이해를 갖고 계십니다. 국가 간 예의를 갖춘 격식 있는 Greeting이 필요합니다.',
    hints: [
      '영어와 한국어를 함께 사용해 외교적 배려를 표현합니다.',
      '"Ambassador"라는 직함을 정확히 사용합니다.',
      '간결하고 따뜻한 영어 인사로 편안함을 드립니다.',
      '한국어로 짧게 덧붙이면 상호 존중의 메시지가 됩니다.'
    ],
    example: '"Ambassador Goldberg, welcome aboard. It\'s our honor to have you with us today. I\'m OOO, your cabin manager. Please let me know if there\'s anything I can do for you. 편안한 비행 되십시오."',
    scores: [91, 86, 93]
  },
  4: {
    grade: 'GOLD',
    gradeClass: 'gold',
    avatar: '⭐',
    name: '박서준 고객',
    sub: '월 4회 이상 탑승 상용고객 · JJEMS Gold',
    details: ['누적 탑승 148회', '제주 노선 집중 이용', '좌석 3B'],
    situation: '매월 4회 이상 꾸준히 탑승하는 JJEMS Gold 상용고객으로, 이번이 148번째 탑승입니다. 비즈니스 라이트로 처음 업그레이드되어 탑승하셨습니다. 단골 고객에게 감사와 특별함을 느끼게 해드리는 Greeting이 필요합니다.',
    hints: [
      '누적 탑승에 대한 진심 어린 감사를 전합니다.',
      '비즈니스 라이트 업그레이드를 축하하며 특별함을 강조합니다.',
      '이름을 기억하고 불러드리는 것만으로도 큰 감동을 드릴 수 있습니다.',
      '편안하고 친근한 어조로, 형식적이지 않게 인사합니다.'
    ],
    example: '"박서준 고객님, 오늘도 제주항공을 이용해 주셔서 진심으로 감사합니다. 비즈니스 라이트 좌석을 이용하시는 오늘 비행, 더욱 편안하고 특별하게 준비해 드리겠습니다."',
    scores: [89, 93, 88]
  },
  5: {
    grade: 'VIP',
    gradeClass: 'vip',
    avatar: '⚽',
    name: '황희찬 선수 외 국가대표단',
    sub: '국가대표 축구선수단 · VIP 단체',
    details: ['선수단 총 25명', '대규모 수하물', '구역 전체 배정'],
    situation: 'A매치 원정 일정을 마치고 귀국하는 국가대표 축구선수단이 비즈니스 라이트 구역에 탑승했습니다. 피로한 상태이며, 대규모 단체인 만큼 효율적이면서도 선수단 전체에 존중을 표하는 Greeting이 필요합니다.',
    hints: [
      '단체 전체를 향한 밝고 활기찬 첫 인사로 분위기를 만듭니다.',
      '원정 일정의 노고를 진심으로 치하합니다.',
      '개인 응대보다 단체 분위기를 먼저 챙기는 방식이 효과적입니다.',
      '피로 회복에 도움이 되는 서비스(음료, 담요 등)를 선제적으로 언급합니다.'
    ],
    example: '"선수단 여러분, 탑승을 환영합니다. 먼 원정 일정 정말 수고 많으셨습니다. 이제 편안히 쉬어가실 수 있도록 제주항공이 함께하겠습니다. 음료와 담요는 즉시 준비해 드리겠습니다."',
    scores: [87, 91, 90]
  },
  6: {
    grade: 'SILVER',
    gradeClass: 'silver',
    avatar: '🌟',
    name: '최지은 고객',
    sub: '첫 비즈니스 라이트 업그레이드 · JJEMS Silver',
    details: ['첫 비즈니스 라이트 탑승', '생일 탑승 (당일)', '좌석 4A'],
    situation: '오늘이 생일이며 처음으로 비즈니스 라이트 좌석으로 업그레이드되어 탑승한 고객입니다. 설레는 표정으로 탑승하셨으며, 이 경험이 특별한 추억이 될 수 있도록 배려하는 Greeting이 필요합니다.',
    hints: [
      '첫 비즈니스 라이트 탑승을 진심으로 축하합니다.',
      '생일임을 알고 있다면 자연스럽게 축하 인사를 더합니다.',
      '따뜻하고 개인적인 어조로 특별한 날임을 함께 느끼게 해줍니다.',
      '오늘 비행이 기억에 남을 수 있도록 작은 서비스를 약속합니다.'
    ],
    example: '"최지은 고객님, 비즈니스 라이트 첫 탑승을 진심으로 환영합니다. 그리고 생일을 진심으로 축하드립니다! 오늘 비행이 소중한 하루의 선물이 될 수 있도록 정성껏 모시겠습니다."',
    scores: [94, 89, 92]
  },
  7: {
    grade: 'VVIP',
    gradeClass: 'vvip',
    avatar: '🎬',
    name: '이효리 씨',
    sub: '유명 방송인 · JJEMS VVIP',
    details: ['방송 중 언급 가능성', '사생활 보호 최우선', '좌석 2C'],
    situation: '국민적인 인지도를 가진 방송인이 탑승하셨습니다. 다른 승객들의 시선이 집중될 수 있으므로 사생활 보호가 최우선입니다. 과도한 반응 없이 자연스럽고 품격 있는 Greeting이 요구됩니다.',
    hints: [
      '다른 승객이 들을 수 있으므로 이름이나 직업을 크게 언급하지 않습니다.',
      '자연스럽고 낮은 목소리로 조용히 인사합니다.',
      '특별 취급보다는 VIP로서의 배려를 조용히 전합니다.',
      '프라이버시 보호 의지를 간접적으로 전달합니다.'
    ],
    example: '"안녕하세요, 탑승하신 것을 환영합니다. 오늘 비행 동안 편안하게 이용하실 수 있도록 제가 가까이에서 도와드리겠습니다. 필요하신 것이 있으시면 조용히 말씀해 주세요."',
    scores: [93, 90, 88]
  },
  8: {
    grade: 'GOLD',
    gradeClass: 'gold',
    avatar: '🌸',
    name: '김순자 고객님',
    sub: '78세 · JJEMS Gold 장기 단골 고객',
    details: ['탑승 10년 이상', '거동 보조 필요', '좌석 3A (통로측)'],
    situation: '10년 이상 제주항공을 이용해온 고령의 단골 JJEMS Gold 고객입니다. 거동이 다소 불편하시고 귀가 잘 들리지 않으십니다. 따뜻하고 존중 어린 태도로, 천천히 또렷하게 인사드리는 것이 중요합니다.',
    hints: [
      '눈높이를 맞추고 또렷하게, 천천히 인사합니다.',
      '오랜 단골 고객님께 진심 어린 감사 인사를 드립니다.',
      '거동 불편 여부를 자연스럽게 확인하고 도움을 선제적으로 제안합니다.',
      '존칭을 정확히 사용하고, 다정하면서도 격식 있게 응대합니다.'
    ],
    example: '"어머니, 탑승하신 것을 진심으로 환영합니다. 오랫동안 저희 항공을 이용해 주셔서 정말 감사드립니다. 편하게 앉아 계시면 제가 가까이에서 도와드리겠습니다. 필요하신 것 있으시면 언제든지 불러 주세요."',
    scores: [91, 95, 89]
  }
};

let isRecording = false;
let recordingTimer = null;

const select = document.getElementById('passengerSelect');
const passengerSection = document.getElementById('passengerSection');
const actionSection = document.getElementById('actionSection');
const recordBtn = document.getElementById('recordBtn');
const recordBtnText = document.getElementById('recordBtnText');
const recordingIndicator = document.getElementById('recordingIndicator');
const submitBtn = document.getElementById('submitBtn');
const statusBadge = document.getElementById('statusBadge');
const resultArea = document.getElementById('resultArea');
const resultContent = document.getElementById('resultContent');
const exampleGreeting = document.getElementById('exampleGreeting');

select.addEventListener('change', () => {
  const val = select.value;
  if (!val) {
    passengerSection.classList.add('hidden');
    actionSection.classList.add('hidden');
    return;
  }

  const p = passengers[val];

  document.getElementById('gradeTag').textContent = p.grade;
  document.getElementById('gradeTag').className = 'grade-tag ' + p.gradeClass;
  document.getElementById('profileAvatar').textContent = p.avatar;
  document.getElementById('passengerName').textContent = p.name;
  document.getElementById('passengerSub').textContent = p.sub;

  const detailsEl = document.getElementById('profileDetails');
  detailsEl.innerHTML = p.details.map(d => `<span class="detail-chip">${d}</span>`).join('');

  document.getElementById('situationText').textContent = p.situation;

  const hintList = document.getElementById('hintList');
  hintList.innerHTML = p.hints.map(h => `<li>${h}</li>`).join('');

  passengerSection.classList.remove('hidden');
  actionSection.classList.remove('hidden');
  resetState();
});

recordBtn.addEventListener('click', () => {
  isRecording ? stopRecording() : startRecording();
});

submitBtn.addEventListener('click', showResult);

document.getElementById('resetBtn').addEventListener('click', () => {
  select.value = '';
  passengerSection.classList.add('hidden');
  actionSection.classList.add('hidden');
  resetState();
});

function startRecording() {
  isRecording = true;
  recordBtn.classList.add('active');
  recordBtnText.textContent = '녹음 중지';
  recordingIndicator.classList.remove('hidden');
  setStatus('recording', '녹음 중');
  recordingTimer = setTimeout(stopRecording, 30000);
}

function stopRecording() {
  clearTimeout(recordingTimer);
  isRecording = false;
  recordBtn.classList.remove('active');
  recordBtnText.textContent = '다시 녹음하기';
  recordingIndicator.classList.add('hidden');
  submitBtn.disabled = false;
  setStatus('done', '녹음 완료');
}

function setStatus(type, text) {
  statusBadge.className = 'status-badge ' + type;
  statusBadge.textContent = text;
}

function showResult() {
  const val = select.value;
  const p = passengers[val];
  const feedbacks = [
    '호칭과 어조가 상황에 맞게 자연스러웠습니다. 승객 특성을 잘 반영한 차별화된 Greeting이었습니다.',
    '진심이 느껴지는 인사였습니다. 선제적 서비스 안내를 더하면 완성도가 더 높아집니다.',
    '품격 있고 간결한 Greeting이었습니다. 이름 호칭을 활용하면 더욱 개인화된 인상을 드릴 수 있습니다.'
  ];
  const scoreIdx = Math.floor(Math.random() * p.scores.length);
  const feedbackIdx = Math.floor(Math.random() * feedbacks.length);

  resultContent.innerHTML = `
    <div class="result-score">
      <span class="score-label">Greeting 점수</span>
      <span class="score-value">${p.scores[scoreIdx]}점</span>
    </div>
    <div class="result-feedback">${feedbacks[feedbackIdx]}</div>
  `;

  exampleGreeting.innerHTML = `
    <p class="example-label">✨ 모범 GREETING 예시</p>
    <p class="example-text">${p.example}</p>
  `;

  resultArea.classList.remove('hidden');
  setStatus('done', '평가 완료');
  submitBtn.disabled = true;
}

function resetState() {
  isRecording = false;
  clearTimeout(recordingTimer);
  recordBtn.classList.remove('active');
  recordBtnText.textContent = 'Greeting 녹음하기';
  recordingIndicator.classList.add('hidden');
  submitBtn.disabled = true;
  resultArea.classList.add('hidden');
  exampleGreeting.innerHTML = '';
  setStatus('waiting', '대기 중');
}
