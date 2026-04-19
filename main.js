// ─── Passenger Data ───────────────────────────────────────────────────────────
const passengers = {
  1: {
    grade: 'VIP', gradeClass: 'vip', avatar: '🇰🇷',
    name: '이재명 대통령', sub: '대한민국 제21대 대통령',
    details: ['전용 의전 탑승', '경호원 동반', '좌석 1A'],
    situation: '대통령 전용 의전 일정으로 비즈니스 라이트 구역에 탑승하셨습니다. 경호원 2명이 인근 좌석에 배치되어 있으며, 기내 보안 절차가 강화된 상황입니다.',
    hints: [
      '직함을 정확히 호칭합니다. "대통령님, 탑승을 진심으로 환영합니다."',
      '의전 특성상 간결하고 품격 있게 — 긴 안내보다 따뜻한 한 마디가 효과적입니다.',
      '경호원 존재를 인식하되, 시선과 말은 대통령님께만 집중합니다.',
      '필요한 것이 있으시면 즉시 알려달라는 말로 자연스럽게 마무리합니다.'
    ],
    persona: '당신은 대한민국 제21대 대통령 이재명입니다. 바쁜 의전 일정 중에 탑승했으며, 격식을 갖춘 응대를 자연스럽게 받아들이십니다. 간결하고 따뜻하게 반응하십니다.'
  },
  2: {
    grade: 'VVIP', gradeClass: 'vvip', avatar: '💼',
    name: '김준혁 부회장', sub: '삼성 계열사 부회장 · JJEMS VVIP',
    details: ['탑승 횟수 연 200회+', '선호 음료: 생수', '좌석 2A'],
    situation: '연간 200회 이상 탑승하는 최우수 VVIP 고객입니다. 오늘은 단독 출장으로 탑승하셨으며, 항상 조용하고 신속한 서비스를 선호하십니다.',
    hints: [
      '이름을 직접 호칭하여 개인화된 인사를 드립니다.',
      '이전 탑승 경험에 대한 감사 표현으로 유대감을 형성합니다.',
      '선호 음료(생수)를 선제적으로 안내하면 특별한 인상을 남길 수 있습니다.',
      '바쁘실 것을 고려해 짧고 임팩트 있게 마무리합니다.'
    ],
    persona: '당신은 삼성 계열사 부회장 김준혁입니다. 연간 200회 이상 탑승하는 베테랑 탑승객으로, 불필요한 형식보다 진심 어린 서비스에 감동받습니다. 간결하고 솔직하게 반응합니다.'
  },
  3: {
    grade: 'VIP', gradeClass: 'vip', avatar: '🌐',
    name: 'Philip Goldberg 대사', sub: '주한 미국 대사 · VIP',
    details: ['외교 의전 탑승', '영어 응대 필요', '좌석 1C'],
    situation: '주한 미국 대사가 외교 일정으로 탑승하셨습니다. 영어로 소통하시며, 국가 간 예의를 갖춘 격식 있는 Greeting이 필요합니다.',
    hints: [
      '영어와 한국어를 함께 사용해 외교적 배려를 표현합니다.',
      '"Ambassador"라는 직함을 정확히 사용합니다.',
      '간결하고 따뜻한 영어 인사로 편안함을 드립니다.',
      '한국어로 짧게 덧붙이면 상호 존중의 메시지가 됩니다.'
    ],
    persona: 'You are Ambassador Philip Goldberg, US Ambassador to South Korea. You appreciate bilingual greetings and diplomatic courtesy. You respond warmly but with dignity. Reply in English or Korean based on how you are addressed.'
  },
  4: {
    grade: 'GOLD', gradeClass: 'gold', avatar: '⭐',
    name: '박서준 고객', sub: '월 4회 이상 탑승 상용고객 · JJEMS Gold',
    details: ['누적 탑승 148회', '제주 노선 집중 이용', '좌석 3B'],
    situation: '이번이 148번째 탑승입니다. 비즈니스 라이트로 처음 업그레이드되어 탑승하셨습니다. 단골 고객에게 감사와 특별함을 느끼게 해드리는 Greeting이 필요합니다.',
    hints: [
      '누적 탑승에 대한 진심 어린 감사를 전합니다.',
      '비즈니스 라이트 업그레이드를 축하하며 특별함을 강조합니다.',
      '이름을 기억하고 불러드리는 것만으로도 큰 감동을 드릴 수 있습니다.',
      '편안하고 친근한 어조로, 형식적이지 않게 인사합니다.'
    ],
    persona: '당신은 박서준, JJEMS Gold 상용고객입니다. 148번째 탑승이지만 오늘은 처음 비즈니스 라이트를 이용합니다. 이름을 불러주거나 업그레이드를 축하해주면 기뻐합니다. 친근하고 밝게 반응합니다.'
  },
  5: {
    grade: 'VIP', gradeClass: 'vip', avatar: '⚽',
    name: '황희찬 선수 외 국가대표단', sub: '국가대표 축구선수단 · VIP 단체',
    details: ['선수단 총 25명', '대규모 수하물', '구역 전체 배정'],
    situation: 'A매치 원정 일정을 마치고 귀국하는 국가대표 축구선수단이 탑승했습니다. 피로한 상태이며, 단체 전체에 존중을 표하는 Greeting이 필요합니다.',
    hints: [
      '단체 전체를 향한 밝고 활기찬 첫 인사로 분위기를 만듭니다.',
      '원정 일정의 노고를 진심으로 치하합니다.',
      '피로 회복에 도움이 되는 서비스(음료, 담요 등)를 선제적으로 언급합니다.',
      '개인 응대보다 단체 분위기를 먼저 챙기는 방식이 효과적입니다.'
    ],
    persona: '당신은 황희찬 선수입니다. 국가대표 원정을 마치고 피곤하지만 팬과 항공사의 응원에 감사한 마음을 갖고 있습니다. 단체를 대표해 밝고 짧게 반응합니다.'
  },
  6: {
    grade: 'SILVER', gradeClass: 'silver', avatar: '🌟',
    name: '최지은 고객', sub: '첫 비즈니스 라이트 업그레이드 · JJEMS Silver',
    details: ['첫 비즈니스 라이트 탑승', '생일 탑승 (당일)', '좌석 4A'],
    situation: '오늘이 생일이며 처음으로 비즈니스 라이트 좌석으로 업그레이드되어 탑승한 고객입니다. 설레는 표정으로 탑승하셨으며, 이 경험이 특별한 추억이 될 수 있도록 배려하는 Greeting이 필요합니다.',
    hints: [
      '첫 비즈니스 라이트 탑승을 진심으로 축하합니다.',
      '생일임을 알고 있다면 자연스럽게 축하 인사를 더합니다.',
      '따뜻하고 개인적인 어조로 특별한 날임을 함께 느끼게 해줍니다.',
      '오늘 비행이 기억에 남을 수 있도록 작은 서비스를 약속합니다.'
    ],
    persona: '당신은 최지은, 오늘 생일인 JJEMS Silver 고객입니다. 생애 첫 비즈니스 라이트 탑승에 설레고 기쁩니다. 따뜻한 인사에 진심으로 감동받으며, 밝고 감사하게 반응합니다.'
  },
  7: {
    grade: 'VVIP', gradeClass: 'vvip', avatar: '🎬',
    name: '이효리 씨', sub: '유명 방송인 · JJEMS VVIP',
    details: ['방송 중 언급 가능성', '사생활 보호 최우선', '좌석 2C'],
    situation: '국민적인 인지도를 가진 방송인이 탑승하셨습니다. 다른 승객들의 시선이 집중될 수 있으므로 사생활 보호가 최우선입니다. 과도한 반응 없이 자연스럽고 품격 있는 Greeting이 요구됩니다.',
    hints: [
      '다른 승객이 들을 수 있으므로 이름을 크게 언급하지 않습니다.',
      '자연스럽고 낮은 목소리로 조용히 인사합니다.',
      '특별 취급보다는 VIP로서의 배려를 조용히 전합니다.',
      '프라이버시 보호 의지를 간접적으로 전달합니다.'
    ],
    persona: '당신은 이효리, JJEMS VVIP 고객입니다. 유명인으로서 프라이버시가 중요하며, 조용하고 자연스러운 응대를 선호합니다. 과도한 관심 없이 차분하게 인사해주면 만족스럽게 반응합니다.'
  },
  8: {
    grade: 'GOLD', gradeClass: 'gold', avatar: '🌸',
    name: '김순자 고객님', sub: '78세 · JJEMS Gold 장기 단골 고객',
    details: ['탑승 10년 이상', '거동 보조 필요', '좌석 3A (통로측)'],
    situation: '10년 이상 제주항공을 이용해온 고령의 단골 JJEMS Gold 고객입니다. 거동이 다소 불편하시고 귀가 잘 들리지 않으십니다. 따뜻하고 존중 어린 태도로, 천천히 또렷하게 인사드리는 것이 중요합니다.',
    hints: [
      '눈높이를 맞추고 또렷하게, 천천히 인사합니다.',
      '오랜 단골 고객님께 진심 어린 감사 인사를 드립니다.',
      '거동 불편 여부를 자연스럽게 확인하고 도움을 선제적으로 제안합니다.',
      '존칭을 정확히 사용하고, 다정하면서도 격식 있게 응대합니다.'
    ],
    persona: '당신은 김순자, 78세 JJEMS Gold 단골 고객입니다. 10년 넘게 제주항공을 이용해왔습니다. 따뜻하고 천천히 인사해주는 승무원에게 감동받으며, 정성스러운 배려에 기꺼이 감사 인사로 화답합니다.'
  }
};

// ─── State ────────────────────────────────────────────────────────────────────
let currentPassenger = null;
let recognition = null;
let isRecording = false;
let finalTranscript = '';
let interimTranscript = '';

// ─── DOM References ───────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const apiSetupToggle  = $('apiSetupToggle');
const apiSetupBody    = $('apiSetupBody');
const apiChevron      = $('apiChevron');
const apiStatusDot    = $('apiStatusDot');
const apiStatusText   = $('apiStatusText');
const apiKeyInput     = $('apiKeyInput');
const saveApiKeyBtn   = $('saveApiKeyBtn');
const clearApiKeyBtn  = $('clearApiKeyBtn');
const apiMsg          = $('apiMsg');

const passengerSelect  = $('passengerSelect');
const passengerSection = $('passengerSection');
const actionSection    = $('actionSection');

const statusBadge        = $('statusBadge');
const recordBtn          = $('recordBtn');
const recordBtnText      = $('recordBtnText');
const recordingIndicator = $('recordingIndicator');
const liveTranscriptBox  = $('liveTranscriptBox');
const liveTranscriptText = $('liveTranscriptText');
const fallbackInput      = $('fallbackInput');
const fallbackText       = $('fallbackText');

const transcriptResult   = $('transcriptResult');
const transcriptFinal    = $('transcriptFinal');
const editTranscriptBtn  = $('editTranscriptBtn');
const transcriptEditArea = $('transcriptEditArea');
const confirmEditBtn     = $('confirmEditBtn');

const loadingResponse        = $('loadingResponse');
const loadingAvatar          = $('loadingAvatar');
const passengerResponseCard  = $('passengerResponseCard');
const prAvatar               = $('prAvatar');
const prName                 = $('prName');
const passengerResponseText  = $('passengerResponseText');

const resultArea      = $('resultArea');
const scoreValue      = $('scoreValue');
const scoreBarFill    = $('scoreBarFill');
const feedbackText    = $('feedbackText');
const strengthsList   = $('strengthsList');
const improvementBox  = $('improvementBox');
const improvementText = $('improvementText');

const submitBtn = $('submitBtn');
const resetBtn  = $('resetBtn');
const errorBox  = $('errorBox');
const errorText = $('errorText');

// ─── API Key Management ───────────────────────────────────────────────────────
function loadApiKey() {
  const key = localStorage.getItem('anthropic_api_key');
  updateApiStatus(!!key);
  if (key) {
    apiKeyInput.value = key;
    clearApiKeyBtn.classList.remove('hidden');
  }
}

function updateApiStatus(connected) {
  if (connected) {
    apiStatusDot.className = 'api-dot connected';
    apiStatusText.textContent = '연결됨';
  } else {
    apiStatusDot.className = 'api-dot disconnected';
    apiStatusText.textContent = '미연결';
  }
}

apiSetupToggle.addEventListener('click', () => {
  const hidden = apiSetupBody.classList.toggle('hidden');
  apiChevron.textContent = hidden ? '▼' : '▲';
});

saveApiKeyBtn.addEventListener('click', () => {
  const val = apiKeyInput.value.trim();
  if (!val.startsWith('sk-ant-')) {
    showApiMsg('유효하지 않은 API 키 형식입니다. sk-ant-로 시작해야 합니다.', 'error');
    return;
  }
  localStorage.setItem('anthropic_api_key', val);
  updateApiStatus(true);
  clearApiKeyBtn.classList.remove('hidden');
  showApiMsg('API 키가 저장되었습니다.', 'success');
  setTimeout(() => {
    apiSetupBody.classList.add('hidden');
    apiChevron.textContent = '▼';
  }, 1200);
});

clearApiKeyBtn.addEventListener('click', () => {
  localStorage.removeItem('anthropic_api_key');
  apiKeyInput.value = '';
  clearApiKeyBtn.classList.add('hidden');
  updateApiStatus(false);
  showApiMsg('API 키가 삭제되었습니다.', 'success');
});

function showApiMsg(msg, type) {
  apiMsg.textContent = msg;
  apiMsg.className = 'api-msg ' + type;
  apiMsg.classList.remove('hidden');
  setTimeout(() => apiMsg.classList.add('hidden'), 3000);
}

// ─── Passenger Select ─────────────────────────────────────────────────────────
passengerSelect.addEventListener('change', () => {
  const val = passengerSelect.value;
  if (!val) {
    passengerSection.classList.add('hidden');
    actionSection.classList.add('hidden');
    currentPassenger = null;
    return;
  }
  currentPassenger = passengers[val];
  renderPassenger(currentPassenger);
  passengerSection.classList.remove('hidden');
  actionSection.classList.remove('hidden');
  resetTrainingState();
});

function renderPassenger(p) {
  $('gradeTag').textContent = p.grade;
  $('gradeTag').className = 'grade-tag ' + p.gradeClass;
  $('profileAvatar').textContent = p.avatar;
  $('passengerName').textContent = p.name;
  $('passengerSub').textContent = p.sub;
  $('profileDetails').innerHTML = p.details.map(d => `<span class="detail-chip">${d}</span>`).join('');
  $('situationText').textContent = p.situation;
  $('hintList').innerHTML = p.hints.map(h => `<li>${h}</li>`).join('');
}

// ─── Speech Recognition ───────────────────────────────────────────────────────
const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
const hasSpeechAPI = !!SpeechRecognitionAPI;

if (!hasSpeechAPI) {
  fallbackInput.classList.remove('hidden');
  recordBtn.style.display = 'none';
}

function initRecognition() {
  recognition = new SpeechRecognitionAPI();
  recognition.lang = 'ko-KR';
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (e) => {
    interimTranscript = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) {
        finalTranscript += e.results[i][0].transcript;
      } else {
        interimTranscript += e.results[i][0].transcript;
      }
    }
    liveTranscriptText.textContent = finalTranscript + interimTranscript;
  };

  recognition.onerror = (e) => {
    if (e.error === 'not-allowed') {
      showError('마이크 접근 권한이 없습니다. 브라우저 설정에서 마이크를 허용해주세요.');
    } else if (e.error !== 'no-speech') {
      showError('음성 인식 오류: ' + e.error);
    }
    stopRecording();
  };

  recognition.onend = () => {
    if (isRecording) recognition.start();
  };
}

recordBtn.addEventListener('click', () => {
  isRecording ? stopRecording() : startRecording();
});

function startRecording() {
  finalTranscript = '';
  interimTranscript = '';
  liveTranscriptText.textContent = '';

  if (hasSpeechAPI) {
    initRecognition();
    recognition.start();
  }

  isRecording = true;
  recordBtn.classList.add('active');
  recordBtnText.textContent = '녹음 중지';
  recordingIndicator.classList.remove('hidden');
  liveTranscriptBox.classList.remove('hidden');
  hideError();
  setStatus('recording', '녹음 중');

  transcriptResult.classList.add('hidden');
  passengerResponseCard.classList.add('hidden');
  resultArea.classList.add('hidden');
  submitBtn.disabled = true;
}

function stopRecording() {
  if (recognition) {
    recognition.onend = null;
    recognition.stop();
    recognition = null;
  }

  isRecording = false;
  recordBtn.classList.remove('active');
  recordBtnText.textContent = '다시 녹음하기';
  recordingIndicator.classList.add('hidden');
  liveTranscriptBox.classList.add('hidden');

  const text = hasSpeechAPI ? finalTranscript.trim() : fallbackText.value.trim();

  if (!text) {
    setStatus('waiting', '대기 중');
    return;
  }

  transcriptFinal.textContent = text;
  transcriptResult.classList.remove('hidden');
  transcriptEditArea.classList.add('hidden');
  confirmEditBtn.classList.add('hidden');
  editTranscriptBtn.style.display = '';
  submitBtn.disabled = false;
  setStatus('recorded', '녹음 완료');
}

// ─── Transcript Edit ──────────────────────────────────────────────────────────
editTranscriptBtn.addEventListener('click', () => {
  transcriptEditArea.value = transcriptFinal.textContent;
  transcriptEditArea.classList.remove('hidden');
  confirmEditBtn.classList.remove('hidden');
  editTranscriptBtn.style.display = 'none';
});

confirmEditBtn.addEventListener('click', () => {
  const edited = transcriptEditArea.value.trim();
  if (edited) transcriptFinal.textContent = edited;
  transcriptEditArea.classList.add('hidden');
  confirmEditBtn.classList.add('hidden');
  editTranscriptBtn.style.display = '';
});

// ─── Submit ───────────────────────────────────────────────────────────────────
submitBtn.addEventListener('click', async () => {
  const greeting = transcriptFinal.textContent.trim();
  if (!greeting) return;

  const apiKey = localStorage.getItem('anthropic_api_key');

  submitBtn.disabled = true;
  recordBtn.disabled = true;
  hideError();
  passengerResponseCard.classList.add('hidden');
  resultArea.classList.add('hidden');

  loadingAvatar.textContent = currentPassenger.avatar;
  loadingResponse.classList.remove('hidden');
  setStatus('loading', '응답 대기 중');

  try {
    const result = apiKey
      ? await callClaudeAPI(currentPassenger, greeting)
      : await getDemoResponse(currentPassenger, greeting);
    loadingResponse.classList.add('hidden');

    prAvatar.textContent = currentPassenger.avatar;
    prName.textContent = currentPassenger.name;
    passengerResponseText.textContent = result.passengerResponse;
    passengerResponseCard.classList.remove('hidden');

    scoreValue.textContent = result.score + '점';
    const pct = Math.min(100, Math.max(0, result.score));
    scoreBarFill.style.width = '0%';
    setTimeout(() => { scoreBarFill.style.width = pct + '%'; }, 50);

    scoreBarFill.className = 'score-bar-fill' + (pct >= 90 ? ' high' : pct >= 75 ? ' mid' : ' low');

    feedbackText.textContent = result.feedback;

    strengthsList.innerHTML = (result.strengths || []).map(s =>
      `<div class="strength-item">✅ ${s}</div>`
    ).join('');

    if (result.improvement) {
      improvementText.textContent = result.improvement;
      improvementBox.classList.remove('hidden');
    } else {
      improvementBox.classList.add('hidden');
    }

    resultArea.classList.remove('hidden');
    setStatus('done', '평가 완료');
  } catch (err) {
    loadingResponse.classList.add('hidden');
    showError(err.message || '오류가 발생했습니다. 다시 시도해주세요.');
    setStatus('recorded', '녹음 완료');
    submitBtn.disabled = false;
  } finally {
    recordBtn.disabled = false;
  }
});

// ─── Reset ────────────────────────────────────────────────────────────────────
resetBtn.addEventListener('click', () => {
  passengerSelect.value = '';
  passengerSection.classList.add('hidden');
  actionSection.classList.add('hidden');
  currentPassenger = null;
  resetTrainingState();
});

function resetTrainingState() {
  if (recognition) {
    recognition.onend = null;
    recognition.stop();
    recognition = null;
  }
  isRecording = false;
  finalTranscript = '';
  interimTranscript = '';

  recordBtn.classList.remove('active');
  recordBtn.disabled = false;
  recordBtnText.textContent = 'Greeting 녹음하기';
  recordingIndicator.classList.add('hidden');
  liveTranscriptBox.classList.add('hidden');
  liveTranscriptText.textContent = '';

  if (!hasSpeechAPI) fallbackText.value = '';

  transcriptResult.classList.add('hidden');
  transcriptFinal.textContent = '';
  transcriptEditArea.classList.add('hidden');
  confirmEditBtn.classList.add('hidden');
  editTranscriptBtn.style.display = '';

  loadingResponse.classList.add('hidden');
  passengerResponseCard.classList.add('hidden');
  resultArea.classList.add('hidden');

  submitBtn.disabled = true;
  hideError();
  setStatus('waiting', '대기 중');
}

// ─── Status ───────────────────────────────────────────────────────────────────
function setStatus(type, text) {
  statusBadge.className = 'status-badge ' + type;
  statusBadge.textContent = text;
}

function showError(msg) {
  errorText.textContent = msg;
  errorBox.classList.remove('hidden');
}

function hideError() {
  errorBox.classList.add('hidden');
}

// ─── Claude API ───────────────────────────────────────────────────────────────
function buildSystemPrompt(passenger) {
  return `당신은 두 가지 역할을 동시에 수행합니다.

[역할 1: 승객]
${passenger.persona}
객실사무장의 인사말을 듣고 승객으로서 자연스럽고 짧게 반응하십시오 (1~3문장, 한국어).

[역할 2: 평가자]
제주항공 JJEMS 비즈니스 라이트 서비스 전문가로서 객실사무장의 Greeting을 평가합니다.
승객 등급: ${passenger.grade} (${passenger.name})
평가 기준:
- 직함/호칭의 정확성
- 개인화 (이름, 상황 반영)
- 품격과 어조
- 진심과 자연스러움
- JJEMS 서비스 기준 부합 여부

반드시 아래 JSON 형식으로만 응답하십시오 (다른 텍스트 없음):
{
  "passengerResponse": "승객의 자연스러운 반응 (1~3문장)",
  "score": 0~100 사이 정수,
  "feedback": "전체적인 평가 한 문장",
  "strengths": ["잘한 점 1", "잘한 점 2"],
  "improvement": "개선할 점 한 문장 또는 null"
}`;
}

async function callClaudeAPI(passenger, greeting) {
  const apiKey = localStorage.getItem('anthropic_api_key');

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 700,
      system: buildSystemPrompt(passenger),
      messages: [{ role: 'user', content: `객실사무장의 인사말: "${greeting}"` }]
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    if (response.status === 401) throw new Error('API 키가 올바르지 않습니다. 다시 확인해주세요.');
    if (response.status === 429) throw new Error('요청이 너무 많습니다. 잠시 후 다시 시도해주세요.');
    throw new Error(err.error?.message || `API 오류 (${response.status})`);
  }

  const data = await response.json();
  const raw = data.content?.[0]?.text || '';
  return parseJSON(raw);
}

function parseJSON(text) {
  // Direct parse
  try { return JSON.parse(text.trim()); } catch {}

  // Code block extraction
  const block = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (block) {
    try { return JSON.parse(block[1].trim()); } catch {}
  }

  // Brace extraction
  const brace = text.match(/\{[\s\S]*\}/);
  if (brace) {
    try { return JSON.parse(brace[0]); } catch {}
  }

  throw new Error('AI 응답을 처리할 수 없었습니다. 다시 시도해주세요.');
}

// ─── Demo Mode (API 키 없을 때) ────────────────────────────────────────────────
const demoData = {
  1: {
    responses: [
      '수고해요. 잘 부탁드립니다.',
      '네, 감사합니다. 편하게 지낼게요.',
      '고마워요, 잘 부탁해요.'
    ],
    goodResponses: [
      '감사합니다. 사무장님 덕분에 마음이 편해지네요. 잘 부탁드립니다.',
      '네, 정말 감사합니다. 바쁜 일정인데 이렇게 따뜻하게 맞아주시니 감사하네요.',
      '고마워요. 오늘 비행도 잘 부탁드립니다.'
    ]
  },
  2: {
    responses: [
      '어, 그래요. 생수 한 병만 가져다줘요.',
      '알겠습니다. 도착하면 연락해요.',
      '수고요. 조용히 있을 테니 신경 쓰지 않아도 됩니다.'
    ],
    goodResponses: [
      '오, 기억해줬군요. 역시 제주항공이에요. 생수 바로 부탁드립니다.',
      '감사합니다. 항상 이렇게 챙겨줘서 제주항공만 타게 되는 것 같아요.',
      '잘 부탁드립니다. 편한 비행이 될 것 같네요.'
    ]
  },
  3: {
    responses: [
      'Thank you, I appreciate the warm welcome.',
      'Thank you very much. I look forward to a pleasant flight.',
      'Thank you. Please let me know if you need anything from me as well.'
    ],
    goodResponses: [
      'Thank you so much. I really appreciate the bilingual greeting — it means a lot. I look forward to a comfortable flight.',
      'How thoughtful, thank you. It\'s always a pleasure flying with Jeju Air.',
      'Thank you, Ambassador treatment noted! I\'ll be sure to reach out if I need anything.'
    ]
  },
  4: {
    responses: [
      '아, 네. 감사해요.',
      '고맙습니다. 잘 부탁드려요.',
      '처음이라 좀 설레네요, 잘 부탁드립니다.'
    ],
    goodResponses: [
      '와, 이름까지 기억해주시다니! 덕분에 첫 비즈니스가 더 특별하게 느껴져요.',
      '감사합니다! 148번 탔는데 이렇게 챙겨주시니 더 자주 타고 싶어지네요.',
      '정말 감사해요. 비즈니스 라이트 첫 탑승인데 기분이 너무 좋네요!'
    ]
  },
  5: {
    responses: [
      '감사합니다! 편하게 좀 쉬어야겠어요.',
      '고맙습니다. 다들 힘들었는데 이런 따뜻한 인사가 힘이 되네요.',
      '감사합니다. 이제 좀 쉬겠습니다!'
    ],
    goodResponses: [
      '와, 선수단을 이렇게 챙겨주시다니 정말 감사합니다! 원정 피로가 싹 풀리는 것 같아요.',
      '감사합니다! 이런 인사 덕분에 다음 경기도 힘이 날 것 같아요. 잘 부탁드립니다.',
      '고맙습니다. 선수들도 모두 기뻐할 것 같아요. 음료 부탁드립니다!'
    ]
  },
  6: {
    responses: [
      '감사합니다! 너무 설레요.',
      '고마워요, 생일에 이런 인사 받으니 더 기분 좋네요!',
      '와, 감사합니다. 처음이라 어떻게 해야 할지 모르겠어요!'
    ],
    goodResponses: [
      '어머, 생일까지 알아주셨어요? 정말 감동이에요! 이 비행 평생 기억할 것 같아요.',
      '와, 첫 비즈니스에 생일 축하까지! 최고의 선물이에요, 감사합니다!',
      '너무너무 감사해요! 오늘 비행이 정말 특별해질 것 같아요!'
    ]
  },
  7: {
    responses: [
      '네, 감사해요.',
      '고마워요. 조용히 있을게요.',
      '감사합니다. 잘 부탁드려요.'
    ],
    goodResponses: [
      '감사해요. 조용하게 신경 써주셔서 마음이 편해요. 잘 부탁드릴게요.',
      '고마워요. 이렇게 자연스럽게 대해주시니 오히려 편하네요.',
      '감사합니다. 덕분에 편하게 쉴 수 있을 것 같아요.'
    ]
  },
  8: {
    responses: [
      '아이고, 고마워요.',
      '네, 감사합니다. 잘 앉았어요.',
      '고마워요. 오래 탔는데 항상 이렇게 잘해줘서 좋아요.'
    ],
    goodResponses: [
      '아이고, 이렇게 정성껏 인사해주니 너무 고맙네요. 10년 동안 제주항공만 타는 이유가 있어요.',
      '고마워요 사무장님. 천천히 말해줘서 잘 들렸어요. 잘 부탁해요.',
      '어머, 이렇게 세심하게 챙겨주다니. 항상 고맙습니다!'
    ]
  }
};

function scoreDemoGreeting(greeting) {
  const g = greeting;
  let score = 60;
  const strengths = [];
  let improvement = null;

  // 호칭 확인
  const titleWords = ['대통령님','부회장님','대사님','ambassador','고객님','선수단','어머니','씨'];
  if (titleWords.some(w => g.toLowerCase().includes(w.toLowerCase()))) {
    score += 10; strengths.push('적절한 직함/호칭을 사용했습니다.');
  } else {
    improvement = '승객의 직함이나 호칭을 정확히 사용하면 더 격식 있는 인사가 됩니다.';
  }

  // 환영 표현
  if (g.includes('환영') || g.includes('반갑') || g.includes('welcome')) {
    score += 8; strengths.push('따뜻한 환영 표현이 포함되었습니다.');
  }

  // 자기소개
  if (g.includes('사무장') || g.includes('저는') || g.includes('담당')) {
    score += 7; strengths.push('자기소개로 신뢰감을 높였습니다.');
  }

  // 서비스 의지
  if (g.includes('최선') || g.includes('도움') || g.includes('편안') || g.includes('준비')) {
    score += 8; strengths.push('서비스 의지를 명확하게 전달했습니다.');
  }

  // 개인화
  if (g.includes('생일') || g.includes('출장') || g.includes('원정') || g.includes('업그레이드') || g.includes('단골') || g.includes('이번에도')) {
    score += 7; strengths.push('승객 상황을 반영한 개인화된 인사였습니다.');
  }

  score = Math.min(100, score);

  if (strengths.length === 0) strengths.push('인사말을 전달했습니다.');
  if (!improvement && score < 90) improvement = '이름이나 상황을 언급해 더 개인화된 인사를 시도해보세요.';

  const feedback =
    score >= 90 ? '매우 훌륭한 Greeting입니다. JJEMS 서비스 기준을 충분히 충족했습니다.' :
    score >= 75 ? '좋은 Greeting이었습니다. 몇 가지를 보완하면 더욱 완성도 높아집니다.' :
    score >= 60 ? '기본적인 인사는 갖췄습니다. 호칭과 개인화를 더 신경 써보세요.' :
                  '기초부터 다시 연습해보세요. Greeting 포인트를 참고하세요.';

  return { score, feedback, strengths, improvement };
}

async function getDemoResponse(passenger, greeting) {
  await new Promise(r => setTimeout(r, 1200));

  const data = demoData[passengerSelect.value];
  const scoring = scoreDemoGreeting(greeting);

  const isGood = scoring.score >= 78;
  const pool = isGood ? data.goodResponses : data.responses;
  const passengerResponse = pool[Math.floor(Math.random() * pool.length)];

  return { passengerResponse, ...scoring };
}

// ─── Init ─────────────────────────────────────────────────────────────────────
loadApiKey();
