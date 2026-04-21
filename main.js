// ─── Passenger Data ───────────────────────────────────────────────────────────
// JJEMS: 회사·지역사회 이익을 위해 특별히 환대해야 하는 주요 인사를 Code로 구분
// VIP(정치요인) / CIP(100대 대기업 회장) / AIP(모기업 회장·부회장) / AAIP(계열사 대표) / JIP(임원·가족)
const passengers = {
  1: {
    grade: 'VIP', gradeClass: 'vip', avatar: '🇰🇷',
    initial: '이', avatarGrad: 'linear-gradient(135deg,#1B2A4A,#2C3E6B)', avatarIcon: '🏛️',
    name: '이재명 대통령', sub: '대한민국 제21대 대통령 · VIP',
    details: ['전/현직 대통령', '경호원 동반 가능', '좌석 1A'],
    boardingCount: 2, boardingType: '의전 탑승', seat: '1A',
    boardingNote: '경호원 동반 가능 · 정치적 중립 유지',
    situation: '대한민국 현직 대통령이 일정으로 탑승하셨습니다. 경호원이 동반할 수 있으며, 격식 있고 간결한 Greeting이 필요합니다. JJEMS 규정에 따라 비행 정보 및 목적지 날씨를 함께 안내드립니다.',
    hints: [
      '호칭: "대통령님"이 공식·비공식 모두 적합합니다.',
      '비행 정보 + 날씨 포함: "오늘 제주까지 약 55분 소요되며, 제주 현재 기온은 18도 맑음입니다."',
      '간결하게 — 오래 머물면 다른 승객에게 불쾌감을 줄 수 있습니다.',
      '개인적인 질문·사진 촬영 요청은 절대 하지 않습니다.',
      '운항 중 Walk Around 시 자연스럽게 필요 사항을 살핍니다.',
      '하기 시: "즐거운 일정 되시길 바랍니다, 대통령님"으로 정중히 인사드립니다.'
    ],
    gradeNote: 'VIP — 전/현직 대통령, 영부인, 국회의원 등 정치 요인',
    persona: '당신은 대한민국 제21대 대통령 이재명입니다. 바쁜 일정 중 탑승했으며, 격식 있고 간결한 응대를 자연스럽게 받아들입니다. 비행정보와 날씨까지 안내해주면 만족하며, 짧고 따뜻하게 반응하십시오.'
  },
  2: {
    grade: 'CIP', gradeClass: 'cip', avatar: '💼',
    initial: '이', avatarGrad: 'linear-gradient(135deg,#92400E,#B45309)', avatarIcon: '🏢',
    name: '이재용 대표', sub: '삼성전자 대표 · CIP',
    details: ['매출 1위 대기업 대표', '단독 출장', '좌석 2A'],
    boardingCount: 1, boardingType: '단독 출장', seat: '2A',
    boardingNote: '조용하고 효율적인 서비스 선호',
    situation: '매출액 기준 국내 1위 대기업 삼성전자의 대표가 단독 출장으로 탑승하셨습니다. 특별한 관심을 기대하거나 요구하지 않으며, JJEMS 규정에 따라 비행 정보·날씨 안내와 함께 자연스럽고 간결한 응대가 중요합니다.',
    hints: [
      '호칭: "이재용 대표님" 또는 "대표님"으로 호칭합니다.',
      '비행 정보 + 날씨 포함: "서울까지 약 1시간 소요되며, 서울 현재 날씨는 맑고 기온 22도입니다."',
      '조용하고 신속하게 — 불필요하게 오래 머물지 않습니다.',
      '개인적인 질문·사진 촬영 요청은 절대 하지 않습니다.',
      'Walk Around 시 자연스럽게 살피되, 과도한 관심은 피합니다.',
      '하기 시: "안녕히 가십시오, 대표님"으로 정중히 인사드립니다.'
    ],
    gradeNote: 'CIP — 매출액 기준 1~100위 대기업 회장',
    persona: '당신은 삼성전자 대표 이재용입니다. 바쁜 출장 일정 중 탑승했으며, 불필요한 형식 없이 간결하고 프로페셔널한 서비스에 만족합니다. 짧고 간결하게 반응하십시오.'
  },
  3: {
    grade: 'AIP', gradeClass: 'aip', avatar: '🏢',
    initial: '채', avatarGrad: 'linear-gradient(135deg,#7C2D12,#C2410C)', avatarIcon: '👔',
    name: '채형석 회장', sub: '애경그룹 회장 · AIP',
    details: ['제주항공 모기업 회장', '비즈니스 출장', '좌석 1C'],
    boardingCount: 1, boardingType: '단독 출장', seat: '1C',
    boardingNote: '모기업 오너 — 서비스 전반 주목 가능',
    situation: '제주항공 모기업인 애경그룹 채형석 회장이 탑승하셨습니다. 제주항공 서비스의 모든 면을 직접 경험하시는 만큼, 자연스럽고 품격 있는 응대가 중요합니다. JJEMS 규정에 따라 비행 정보와 날씨 안내를 포함합니다.',
    hints: [
      '호칭: "채형석 회장님" 또는 "회장님"으로 정확하게 호칭합니다.',
      '비행 정보 + 날씨 포함: 목적지 비행시간과 날씨를 간단히 안내드립니다.',
      '모기업 오너이시므로 서비스 전반이 평가될 수 있음을 인식합니다.',
      '과도한 응대는 오히려 역효과 — 자연스럽고 프로페셔널하게 유지합니다.',
      '개인적인 질문·사진 촬영 요청은 절대 하지 않습니다.',
      '하기 시: "즐거운 시간 되시길 바랍니다, 회장님"으로 정중히 마무리합니다.'
    ],
    gradeNote: 'AIP — 모기업(애경그룹) 회장 및 부회장',
    persona: '당신은 애경그룹 회장 채형석입니다. 제주항공 모기업 오너로서 서비스 품질에 관심을 갖고 있습니다. 자연스럽고 격식 있는 응대에 만족하며, 짧고 품격 있게 반응하십시오.'
  },
  4: {
    grade: 'AAIP', gradeClass: 'aaip', avatar: '✈️',
    initial: '김', avatarGrad: 'linear-gradient(135deg,#312E81,#4338CA)', avatarIcon: '✈️',
    name: '김이배 대표', sub: '제주항공 대표이사 · AAIP',
    details: ['제주항공 대표이사', '업무 출장', '좌석 2C'],
    boardingCount: 1, boardingType: '업무 탑승', seat: '2C',
    boardingNote: '자사 대표 — 자연스럽고 프로페셔널하게',
    situation: '제주항공 대표이사 김이배 님이 업무 목적으로 탑승하셨습니다. 자사 최고경영자로서 항공사 서비스를 직접 경험하십니다. 자연스럽고 프로페셔널한 응대가 중요하며, 지나치게 긴장하면 오히려 어색합니다.',
    hints: [
      '호칭: "김이배 대표님" 또는 "대표님"으로 호칭합니다.',
      '비행 정보 + 날씨 포함: 일반 JJEMS 응대와 동일하게 비행시간과 날씨를 안내합니다.',
      '지나치게 긴장하거나 굳어있으면 오히려 역효과 — 침착하고 자연스럽게 응대합니다.',
      '자사 대표이사이므로 서비스 전반이 모니터링될 수 있음을 인식합니다.',
      '개인적인 질문·회사 업무 관련 이야기는 꺼내지 않습니다.',
      '하기 시: "안녕히 가십시오, 대표님"으로 정중하고 자연스럽게 인사드립니다.'
    ],
    gradeNote: 'AAIP — 모기업 계열사(제주항공) 대표이사',
    persona: '당신은 제주항공 대표이사 김이배입니다. 자사 서비스를 직접 경험하는 입장으로, 자연스럽고 프로페셔널한 응대에 만족합니다. 동료를 대하듯 짧고 자연스럽게 반응하십시오.'
  },
};

// ─── Round Configs ────────────────────────────────────────────────────────────
const MAX_ROUNDS = 3;
const roundConfigs = [
  {
    label: '탑승 인사',
    guide: '마이크 버튼을 눌러 탑승 Greeting을 시작하세요',
    badgeText: '탑승 상황',
    getSituation: p => p.situation,
    getHints: p => p.hints,
  },
  {
    label: '서비스 안내',
    guide: '비행 중 서비스를 안내해주세요',
    badgeText: '비행 중 상황',
    getSituation: p => `비행 중 ${p.grade} 등급 ${p.name}께 기내 서비스를 안내드릴 시간입니다. 음료·스낵 등 제공 가능한 서비스를 자연스럽게 안내하고, 필요한 것이 있으신지 여쭤보세요.`,
    getHints: p => {
      const title = { VIP:'대통령님', CIP:'대표님', AIP:'회장님', AAIP:'대표님', JIP:'본부장님' }[p.grade] || '승객님';
      return [
        `호칭: "${title}"으로 정확하게 호칭합니다.`,
        '음료·스낵 등 서비스 내용을 간결하게 안내합니다.',
        '필요한 것이 있으신지 자연스럽게 여쭤보세요.',
        '"필요하신 것 있으시면 언제든 말씀해주세요"로 마무리하세요.',
      ];
    },
  },
  {
    label: '마무리 인사',
    guide: '하기 전 마무리 인사를 해주세요',
    badgeText: '하기 상황',
    getSituation: p => `곧 착륙합니다. ${p.grade} 등급 ${p.name}께 하기 인사를 드릴 시간입니다. 다음 일정을 배려하는 따뜻하고 간결한 마무리 인사를 해주세요.`,
    getHints: p => {
      const title = { VIP:'대통령님', CIP:'대표님', AIP:'회장님', AAIP:'대표님', JIP:'본부장님' }[p.grade] || '승객님';
      return [
        `호칭: "${title}"으로 마무리 인사를 해주세요.`,
        '승객의 다음 목적지나 일정을 고려한 배려의 말을 건네세요.',
        '"즐거운 일정 되시길 바랍니다" / "안녕히 가십시오"로 정중히 마무리합니다.',
        '짧고 간결하게 — 하기 길목을 방해하지 않도록 합니다.',
      ];
    },
  },
];

// ─── State ────────────────────────────────────────────────────────────────────
let currentPassenger = null;
let recognition = null;
let isRecording = false;
let finalTranscript = '';
let interimTranscript = '';
let conversationRound = 1;
let conversationLog = [];

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

const resultArea       = $('resultArea');
const scoreChip        = $('scoreChip');
const scoreBarFill     = $('scoreBarFill');
const feedbackText        = $('feedbackText');
const strengthsList       = $('strengthsList');
const improvementBox      = $('improvementBox');
const improvementText     = $('improvementText');
const regulationCheckList = $('regulationCheckList');
const conversationFeedback = $('conversationFeedback');
const cfHintList           = $('cfHintList');
const cfExpressionList     = $('cfExpressionList');

const submitBtn = $('submitBtn');
const resetBtn  = $('resetBtn');
const errorBox  = $('errorBox');
const errorText = $('errorText');

const roundProgress      = $('roundProgress');
const conversationThread = $('conversationThread');
const continueBar        = $('continueBar');
const continueBtn        = $('continueBtn');
const continueBtnText    = $('continueBtnText');
const evaluateBtn        = $('evaluateBtn');

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

  // 프로필 아바타: 이니셜 + 그라디언트
  const avatarEl = $('profileAvatar');
  avatarEl.style.background = p.avatarGrad || '';
  avatarEl.innerHTML = `
    <span class="avatar-initial">${p.initial || p.avatar}</span>
    <span class="avatar-icon-badge">${p.avatarIcon || ''}</span>
  `;

  $('passengerName').textContent = p.name;
  $('passengerSub').textContent = p.sub;
  $('profileDetails').innerHTML = p.details.map(d => `<span class="detail-chip">${d}</span>`).join('');

  // 탑승 현황
  $('bsTypeBadge').textContent = p.boardingType;
  $('bsCount').textContent = p.boardingCount + '명';
  $('bsSeat').textContent = p.seat;
  $('bsNote').textContent = p.boardingNote;

  // 탑승 인원 아이콘
  const iconsEl = $('bsIcons');
  const max = Math.min(p.boardingCount, 10);
  let icons = '';
  for (let i = 0; i < max; i++) icons += '<span class="bs-person-icon">👤</span>';
  if (p.boardingCount > 10) icons += `<span class="bs-person-more">+${p.boardingCount - 10}명</span>`;
  iconsEl.innerHTML = p.boardingCount > 1 ? icons : '';

  // 탑승 상황 + 힌트 (updateRoundUI에서 처리)
  const hintGrade = $('hintGradeTag');
  hintGrade.textContent = p.grade;
  hintGrade.className = 'hint-grade-tag ' + p.gradeClass;
  $('hintGradeNote').textContent = p.gradeNote;

  roundProgress.classList.remove('hidden');
  updateRoundUI(1);
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

  const text = hasSpeechAPI ? (finalTranscript || interimTranscript).trim() : fallbackText.value.trim();

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

  loadingAvatar.style.cssText = `background:${currentPassenger.avatarGrad||'var(--navy)'};border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;`;
  loadingAvatar.innerHTML = `<span style="font-size:16px;font-weight:900;color:#fff;">${currentPassenger.initial||''}</span>`;
  loadingResponse.classList.remove('hidden');
  setStatus('loading', '응답 대기 중');

  try {
    const result = apiKey
      ? await callClaudeAPI(currentPassenger, greeting)
      : await getDemoResponse(currentPassenger, greeting);
    loadingResponse.classList.add('hidden');

    prAvatar.style.background = currentPassenger.avatarGrad || 'var(--navy)';
    prAvatar.innerHTML = `<span style="font-size:20px;font-weight:900;color:#fff;">${currentPassenger.initial || currentPassenger.avatar}</span>`;
    prName.textContent = currentPassenger.name;
    passengerResponseText.textContent = result.passengerResponse;
    passengerResponseCard.classList.remove('hidden');

    const ttsBtn = document.getElementById('ttsBtn');
    if (ttsBtn) {
      ttsBtn.classList.remove('hidden');
      ttsBtn.textContent = '🔊 다시 듣기';
      ttsBtn.disabled = false;
    }
    const trySpeak = () => speakPassengerResponse(result.passengerResponse);
    if (window.speechSynthesis) {
      if (window.speechSynthesis.getVoices().length) trySpeak();
      else window.speechSynthesis.onvoiceschanged = trySpeak;
    }

    // 대화 중 피드백 (Greeting 포인트 요약 + 표현 분석)
    cfHintList.innerHTML = roundConfigs[conversationRound - 1].getHints(currentPassenger).slice(0, 3).map(h =>
      `<li>${h}</li>`
    ).join('');

    if (result.expressionFeedback && result.expressionFeedback.length > 0) {
      cfExpressionList.innerHTML = result.expressionFeedback.map(ef =>
        `<div class="ef-item ${ef.good ? 'ef-good' : 'ef-improve'}">
          <span class="ef-phrase">${ef.phrase}</span>
          <span class="ef-comment">${ef.comment}</span>
        </div>`
      ).join('');
    } else {
      cfExpressionList.innerHTML = '<p class="cf-empty">표현 분석 데이터가 없습니다.</p>';
    }
    conversationFeedback.classList.remove('hidden');

    // 대화 로그에 저장 + 스레드에 추가
    conversationLog.push({ round: conversationRound, label: roundConfigs[conversationRound - 1].label, greeting, result });
    appendToConversationThread(greeting, result, conversationRound);

    // 마지막 라운드면 바로 평가 표시, 아니면 계속 버튼
    if (conversationRound >= MAX_ROUNDS) {
      continueBtn.classList.add('hidden');
      continueBar.classList.remove('hidden');
      showEvaluation(result, greeting);
    } else {
      continueBtn.classList.remove('hidden');
      continueBtnText.textContent = roundConfigs[conversationRound].label + ' 하기';
      continueBar.classList.remove('hidden');
      setStatus('responded', '승객 응답 완료');
    }
  } catch (err) {
    loadingResponse.classList.add('hidden');
    showError(err.message || '오류가 발생했습니다. 다시 시도해주세요.');
    setStatus('recorded', '녹음 완료');
    submitBtn.disabled = false;
  } finally {
    recordBtn.disabled = false;
  }
});

// ─── Continue / Evaluate ──────────────────────────────────────────────────────
continueBtn.addEventListener('click', () => {
  conversationRound++;
  updateRoundUI(conversationRound);

  finalTranscript = '';
  interimTranscript = '';
  transcriptResult.classList.add('hidden');
  transcriptFinal.textContent = '';
  transcriptEditArea.classList.add('hidden');
  confirmEditBtn.classList.add('hidden');
  editTranscriptBtn.style.display = '';

  passengerResponseCard.classList.add('hidden');
  conversationFeedback.classList.add('hidden');
  continueBar.classList.add('hidden');
  resultArea.classList.add('hidden');

  recordBtnText.textContent = '녹음 시작';
  recordBtn.classList.remove('active');
  recordBtn.disabled = false;
  submitBtn.disabled = true;

  const ttsBtn = document.getElementById('ttsBtn');
  if (ttsBtn) ttsBtn.classList.add('hidden');
  if (window.speechSynthesis) window.speechSynthesis.cancel();

  setStatus('waiting', '대기 중');
  hideError();
});

evaluateBtn.addEventListener('click', () => {
  if (conversationLog.length > 0) {
    const last = conversationLog[conversationLog.length - 1];
    showEvaluation(last.result, last.greeting);
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
  conversationRound = 1;
  conversationLog = [];

  recordBtn.classList.remove('active');
  recordBtn.disabled = false;
  recordBtnText.textContent = '녹음 시작';
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
  conversationFeedback.classList.add('hidden');
  continueBar.classList.add('hidden');
  continueBtn.classList.remove('hidden');
  resultArea.classList.add('hidden');
  roundProgress.classList.add('hidden');
  conversationThread.classList.add('hidden');
  conversationThread.innerHTML = '';
  if (regulationCheckList) regulationCheckList.innerHTML = '';

  const ttsBtn = document.getElementById('ttsBtn');
  if (ttsBtn) ttsBtn.classList.add('hidden');
  if (window.speechSynthesis) window.speechSynthesis.cancel();

  submitBtn.disabled = true;
  hideError();
  setStatus('waiting', '대기 중');
}

// ─── Round UI ─────────────────────────────────────────────────────────────────
function updateRoundUI(round) {
  if (!currentPassenger) return;
  const cfg = roundConfigs[round - 1];

  const badge = document.querySelector('#situationCard .situation-badge');
  if (badge) badge.textContent = cfg.badgeText;
  $('situationText').textContent = cfg.getSituation(currentPassenger);
  $('hintList').innerHTML = cfg.getHints(currentPassenger).map(h => `<li>${h}</li>`).join('');
  $('recordingGuide').textContent = cfg.guide;

  for (let i = 1; i <= MAX_ROUNDS; i++) {
    const step = $(`rpStep${i}`);
    if (!step) continue;
    step.classList.remove('active', 'done');
    if (i < round) step.classList.add('done');
    else if (i === round) step.classList.add('active');
  }
  document.querySelectorAll('.rp-line').forEach((line, idx) => {
    line.classList.toggle('done', idx + 1 < round);
  });
}

function appendToConversationThread(greeting, result, round) {
  const cfg = roundConfigs[round - 1];
  const p = currentPassenger;
  const scoreClass = result.score >= 88 ? 'score-hi' : result.score >= 70 ? 'score-mid' : 'score-lo';

  const entry = document.createElement('div');
  entry.className = 'ct-exchange';
  entry.innerHTML = `
    <div class="ct-round-label">${round}단계 · ${cfg.label}</div>
    <div class="ct-my-bubble">
      <span class="ct-my-icon">👨‍✈️</span>
      <span class="ct-my-text">${greeting}</span>
      <span class="ct-score-tag ${scoreClass}">${result.score}점</span>
    </div>
    <div class="ct-passenger-bubble">
      <span class="ct-p-avatar" style="background:${p.avatarGrad}">
        <span style="font-size:12px;font-weight:900;color:#fff;">${p.initial}</span>
      </span>
      <span class="ct-p-text">${result.passengerResponse}</span>
    </div>
  `;
  conversationThread.appendChild(entry);
  conversationThread.classList.remove('hidden');
}

function showEvaluation(result, greeting) {
  const pct = Math.min(100, Math.max(0, result.score));
  scoreChip.textContent = result.score + '점';
  scoreChip.className = 'score-chip' + (pct >= 90 ? ' high' : pct >= 75 ? ' mid' : ' low');
  scoreBarFill.style.width = '0%';
  setTimeout(() => { scoreBarFill.style.width = pct + '%'; }, 50);
  scoreBarFill.className = 'score-bar-fill' + (pct >= 90 ? ' high' : pct >= 75 ? ' mid' : ' low');

  feedbackText.textContent = result.instructorComment || result.feedback;

  strengthsList.innerHTML = (result.strengths || []).map(s =>
    `<div class="ls-item ls-good-item">${s}</div>`
  ).join('') || '<div class="ls-item ls-empty">계속 연습해보아요!</div>';

  if (result.improvement) {
    improvementText.textContent = result.improvement;
    improvementBox.classList.remove('hidden');
  } else {
    improvementBox.classList.add('hidden');
  }

  const gl = (greeting || '').toLowerCase();
  const flightOk = result.hasFlightInfo ?? /분|시간|소요|편/.test(gl);
  const weatherOk = result.hasWeatherInfo ?? /날씨|기온|도|맑|흐|비|눈/.test(gl);
  const titleOk = result.hasTitleCorrect ?? true;
  const regChecks = [];
  if (!flightOk) regChecks.push('비행 소요시간 안내 포함하기');
  if (!weatherOk) regChecks.push('목적지 날씨 정보 안내하기');
  if (!titleOk) regChecks.push('정확한 호칭 사용하기');
  regulationCheckList.innerHTML = regChecks.map(c =>
    `<div class="ls-item ls-check-item">${c}</div>`
  ).join('');

  resultArea.classList.remove('hidden');
  setStatus('done', '평가 완료');
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
  const cfg = roundConfigs[conversationRound - 1];
  const situation = cfg.getSituation(passenger);
  return `당신은 제주항공의 15년 경력 객실서비스교관 박지현 수석교관입니다. 전직 국제선 객실사무장 출신으로, JJEMS 서비스 시스템을 직접 설계한 전문가입니다.

당신은 두 가지 역할을 동시에 수행합니다.

[역할 1: 승객]
${passenger.persona}
현재 상황: ${situation}
객실사무장의 응대를 듣고 승객으로서 자연스럽고 짧게 반응하십시오 (1~3문장).

[역할 2: 박지현 교관의 평가]
따뜻하고 격려적인 멘토 스타일로 교육합니다. 항상 "사무장님"이라고 부르며, 잘한 점을 먼저 칭찬하고 개선점을 부드럽게 제안합니다. 전문적이지만 다정한 어조를 유지하세요.

현재 훈련 단계: ${cfg.label} (${conversationRound}/${MAX_ROUNDS})
승객 등급: ${passenger.grade} (${passenger.name})
평가 기준:
- 직함·호칭의 정확성
- 개인화 (이름, 상황 반영)
- 품격과 어조
- 진심과 자연스러움
- JJEMS 서비스 기준 부합 여부
- 표현의 구체성과 적절성

승객 반응: JJEMS 응대는 절대 호칭 오류를 지적하거나 서비스 평가를 하지 않습니다. 응대 내용에 따라 자연스럽게 반응하되 온도 차이만 표현합니다.

반드시 아래 JSON 형식으로만 응답하십시오 (다른 텍스트 없음):
{
  "passengerResponse": "승객의 자연스러운 반응 (1~2문장, 호칭 지적 없음)",
  "score": 0~100 사이 정수,
  "instructorComment": "박지현 교관으로서의 따뜻하고 전문적인 학습 피드백 (사무장님으로 호칭, 2~3문장)",
  "expressionFeedback": [
    { "phrase": "사무장이 실제 사용한 특정 표현", "comment": "이 표현에 대한 교관의 짧은 코멘트", "good": true 또는 false }
  ],
  "strengths": ["잘한 점 1", "잘한 점 2"],
  "improvement": "개선할 점 한 문장 또는 null",
  "hasFlightInfo": true 또는 false (비행 소요시간 언급 여부),
  "hasWeatherInfo": true 또는 false (날씨 정보 언급 여부),
  "hasTitleCorrect": true 또는 false (정확한 직함 사용 여부)
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
      max_tokens: 900,
      system: buildSystemPrompt(passenger),
      messages: [
        ...conversationLog.map(entry => ([
          { role: 'user', content: `[${entry.label}] 객실사무장의 응대: "${entry.greeting}"` },
          { role: 'assistant', content: JSON.stringify(entry.result) }
        ])).flat(),
        { role: 'user', content: `[${roundConfigs[conversationRound - 1].label}] 객실사무장의 응대: "${greeting}"` }
      ]
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
  try { return JSON.parse(text.trim()); } catch {}
  const block = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (block) { try { return JSON.parse(block[1].trim()); } catch {} }
  const brace = text.match(/\{[\s\S]*\}/);
  if (brace) { try { return JSON.parse(brace[0]); } catch {} }
  throw new Error('AI 응답을 처리할 수 없었습니다. 다시 시도해주세요.');
}

// ─── Demo Mode ────────────────────────────────────────────────────────────────
// 승객 반응: JJEMS 인사는 호칭 오류를 지적하지 않음 — 자연스럽게 반응
// 점수에 따라 반응 온도가 달라짐 (brief → ok → good → excellent)
const demoData = {
  1: { // VIP · 이재명 대통령
    correctTitles: ['대통령님'],
    briefReaction: [
      '(간단히 고개를 끄덕이며) 네, 감사합니다.',
      '(조용히) 알겠습니다.',
    ],
    okReaction: [
      '수고해요. 잘 부탁드립니다.',
      '고맙습니다. 편안하게 가겠습니다.',
    ],
    goodReaction: [
      '감사합니다. 비행 정보까지 챙겨주시니 마음이 놓이네요. 잘 부탁드립니다.',
      '고맙습니다. 날씨 정보도 알려주셔서 준비가 되는 것 같아요.',
    ],
    excellentReaction: [
      '정말 감사합니다. 바쁜 일정 중에도 비행 정보와 날씨까지 세심하게 안내해주시니 마음이 편해지네요. 잘 부탁드립니다.',
      '감사합니다, 사무장님. 필요한 정보를 자연스럽게 전달해주시니 한결 편안한 마음으로 탑승하게 됩니다.',
    ],
  },
  2: { // CIP · 이재용 삼성전자 대표
    correctTitles: ['이재용', '대표님', '대표'],
    briefReaction: [
      '(노트북을 보며) 네.',
      '(짧게) 알겠어요.',
    ],
    okReaction: [
      '조용히 있을 테니 필요하면 부르겠습니다.',
      '알겠습니다. 수고하세요.',
    ],
    goodReaction: [
      '잘 부탁드립니다. 비행 정보까지 챙겨주시니 편하네요.',
      '날씨 정보도 감사합니다. 편안한 비행이 되겠네요.',
    ],
    excellentReaction: [
      '감사합니다. 비행시간과 날씨까지 바로 안내해주시니 역시 제주항공입니다. 잘 부탁드립니다.',
      '필요한 정보를 딱 맞게 전달해주셨어요. 편안한 비행이 될 것 같습니다.',
    ],
  },
  3: { // AIP · 채형석 애경그룹 회장
    correctTitles: ['채형석', '회장님', '회장'],
    briefReaction: [
      '(고개를 끄덕이며) 네, 감사합니다.',
      '알겠어요.',
    ],
    okReaction: [
      '수고하십니다. 잘 부탁드립니다.',
      '감사합니다. 편안하게 있겠습니다.',
    ],
    goodReaction: [
      '감사합니다. 비행 정보도 알려주시니 든든하네요. 잘 부탁드립니다.',
      '고맙습니다. 날씨 정보까지 세심하게 챙겨주시는군요.',
    ],
    excellentReaction: [
      '잘 알겠습니다. 비행시간과 날씨까지 챙겨주시니 역시 제주항공이에요. 잘 부탁드립니다.',
      '감사합니다, 사무장님. 필요한 정보를 자연스럽게 전달해주셨어요. 편안한 비행 되길 바랍니다.',
    ],
  },
  4: { // AAIP · 김이배 제주항공 대표이사
    correctTitles: ['김이배', '대표님', '대표'],
    briefReaction: [
      '(고개를 끄덕이며) 네, 수고하세요.',
      '알겠습니다.',
    ],
    okReaction: [
      '감사합니다. 잘 부탁드립니다.',
      '수고하세요.',
    ],
    goodReaction: [
      '감사합니다. 비행 정보까지 챙겨주시니 좋네요. 잘 부탁드립니다.',
      '날씨 정보도 유용합니다. 편안한 비행이 될 것 같아요.',
    ],
    excellentReaction: [
      '잘 했어요, 사무장님. 비행 정보와 날씨까지 자연스럽게 담아주셨어요. 잘 부탁드립니다.',
      'JJEMS 규정대로 간결하면서도 필요한 정보를 정확히 전달해주셨어요. 감사합니다.',
    ],
  },
};

function analyzeGreeting(greeting, passenger) {
  const g = greeting.trim();
  const gl = g.toLowerCase();
  const pid = passengerSelect.value;
  const data = demoData[pid];

  const issues = [];
  let score = 50;
  const strengths = [];

  // 1. 호칭 검사
  const hasCorrectTitle = data.correctTitles.some(t => gl.includes(t.toLowerCase()));
  const hasAnyHonorific = /님|씨|장관|본부장|회장|대표|대통령/.test(gl);
  if (hasCorrectTitle) {
    score += 18; strengths.push('정확한 직함·호칭을 사용했습니다.');
  } else if (hasAnyHonorific) {
    score += 5; issues.push('wrongTitle');
  } else {
    issues.push('wrongTitle');
  }

  // 2. 길이 검사
  if (g.length < 15) { issues.push('tooShort'); score -= 10; }

  // 3. 비행 정보 (JJEMS 핵심 규정)
  const hasFlightInfo = /분|시간|소요|비행|편|항공편/.test(gl);
  if (hasFlightInfo) {
    score += 12; strengths.push('비행 정보(소요시간)를 포함했습니다 — JJEMS 규정 준수!');
  } else {
    issues.push('noWeather');
  }

  // 4. 날씨 정보 (JJEMS 핵심 규정)
  const hasWeatherInfo = /날씨|기온|도|맑|흐|비|눈|바람|weather/.test(gl);
  if (hasWeatherInfo) {
    score += 10; strengths.push('목적지 날씨 정보를 포함했습니다 — JJEMS 규정 준수!');
  }

  // 5. 환영 표현
  if (/환영|반갑|탑승/.test(gl)) { score += 5; strengths.push('따뜻한 환영 표현이 포함됐습니다.'); }

  // 6. 자기소개
  if (/사무장|저는|담당|제가/.test(gl)) { score += 5; strengths.push('자기소개로 신뢰감을 높였습니다.'); }

  // 7. 서비스 의지
  if (/최선|도움|편안|준비|모시|챙|도와/.test(gl)) { score += 5; strengths.push('서비스 의지를 명확하게 전달했습니다.'); }

  score = Math.min(98, Math.max(20, score));

  const improvement =
    issues.includes('wrongTitle') ? '정확한 직함·호칭 사용이 JJEMS Greeting의 첫 번째 기본입니다.' :
    issues.includes('tooShort')   ? '인사말이 너무 짧습니다. 비행 정보와 날씨를 포함해 풍성하게 말씀해보세요.' :
    issues.includes('noWeather')  ? 'JJEMS 규정에 따라 비행 정보(소요시간)와 목적지 날씨를 함께 안내해야 합니다.' :
    score < 85                    ? '날씨와 비행시간을 좀 더 구체적으로 언급하면 더욱 완성도가 높아집니다.' : null;

  const feedback =
    score >= 90 ? '매우 훌륭한 Greeting입니다. JJEMS 서비스 기준을 충분히 충족했습니다.' :
    score >= 75 ? '좋은 Greeting이었습니다. 비행 정보·날씨까지 포함하면 더욱 완성됩니다.' :
    score >= 58 ? '기본 인사는 갖췄습니다. 호칭과 비행 정보·날씨 안내를 추가해보세요.' :
                  '호칭을 확인하고, 비행 정보와 날씨를 포함하는 연습을 해보세요.';

  if (strengths.length === 0) strengths.push('인사말을 전달했습니다.');

  const tier = issues.includes('wrongTitle') ? 'wrongTitle'
    : issues.includes('tooShort') ? 'tooShort'
    : score >= 88 ? 'excellent'
    : score >= 73 ? 'good'
    : 'ok';

  const hasTitleCorrect = hasCorrectTitle;
  return { score, feedback, strengths, improvement, tier, hasFlightInfo, hasWeatherInfo, hasTitleCorrect };
}

function buildDemoInstructorComment(tier, score, passenger, greeting, analysis) {
  const hasFlightInfo = analysis && analysis.hasFlightInfo;
  const hasWeatherInfo = analysis && analysis.hasWeatherInfo;
  const weatherNote = (!hasFlightInfo || !hasWeatherInfo)
    ? ' 다음에는 비행 소요시간과 목적지 날씨도 꼭 함께 안내해주세요 — JJEMS 규정의 핵심이에요!'
    : ' 비행 정보와 날씨까지 규정대로 포함하신 점이 특히 훌륭했어요!';

  const comments = {
    excellent: [
      `사무장님, 정말 훌륭하셨어요! ${passenger.name}께 드린 Greeting은 JJEMS 서비스의 정수를 보여주셨어요. 정확한 호칭에 비행 정보·날씨까지 — 규정을 자연스럽게 녹여낸 완벽한 응대였습니다. 이 수준을 매 비행에서 유지하는 것이 진정한 JJEMS 서비스랍니다!`,
      `완벽한 Greeting이었어요, 사무장님! 호칭도 정확하고 비행 정보·날씨까지 자연스럽게 포함하셨어요. 저도 교관으로서 정말 뿌듯했습니다. 앞으로도 이 감각을 잘 유지해주세요.`,
    ],
    good: [
      `사무장님, 잘 하셨어요! 호칭과 기본 인사는 완벽했어요.${weatherNote}`,
      `좋은 Greeting이었어요, 사무장님! 따뜻함도 충분히 전달됐고, 호칭도 맞으셨어요.${weatherNote}`,
    ],
    ok: [
      `사무장님, 기본적인 Greeting은 갖추셨어요. 호칭을 정확히 하고, 비행 소요시간과 목적지 날씨를 포함하는 연습을 해보아요. JJEMS 규정에서 이 두 가지는 필수랍니다!`,
      `시작은 좋았어요, 사무장님! 조금 더 다듬어 볼까요? 비행 정보와 날씨 안내를 자연스럽게 포함하면 훨씬 JJEMS답게 느껴질 거예요. 포인트를 참고해서 다시 한번 해봐요!`,
    ],
    tooShort: [
      `사무장님, 인사말이 조금 짧았어요. JJEMS Greeting은 비행 소요시간과 목적지 날씨를 포함한 간단한 비행 정보 안내가 함께해야 해요. 좀 더 풀어서 다시 해볼까요?`,
      `더 많은 이야기를 들려주셨으면 했는데 아쉬웠어요, 사무장님. 비행 정보와 날씨까지 담아서 다시 도전해보아요!`,
    ],
    wrongTitle: [
      `사무장님, 호칭이 JJEMS Greeting에서 가장 중요한 첫 단추예요! 정확한 직함 사용이 승객에 대한 기본 존중이랍니다. Greeting 포인트를 확인하고 자신 있게 도전해봐요, 사무장님 할 수 있어요!`,
      `호칭에서 조금 아쉬웠어요, 사무장님. ${passenger.name}께서 잠깐 당황하셨을 것 같아요. 정확한 호칭을 익히면 다른 부분은 이미 충분히 잘 하고 계세요. 다시 한번 도전해봐요!`,
    ],
  };
  const arr = comments[tier] || comments.ok;
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateExpressionFeedback(greeting, tier) {
  const gl = greeting.toLowerCase();
  const result = [];

  if (/환영/.test(gl)) result.push({ phrase: '환영', comment: '자연스러운 환영 표현이에요. 승객이 따뜻함을 느낄 수 있어요.', good: true });
  if (/반갑/.test(gl)) result.push({ phrase: '반갑습니다', comment: '친근하고 따뜻한 인사말이에요.', good: true });
  if (/welcome/i.test(gl)) result.push({ phrase: 'Welcome', comment: '영어 환영 표현 — 외국어 응대 의지를 보여줍니다.', good: true });
  if (/사무장/.test(gl)) result.push({ phrase: '사무장', comment: '자기소개를 포함해 신뢰감을 주셨어요.', good: true });
  if (/저는/.test(gl)) result.push({ phrase: '저는', comment: '자기소개 표현 — 승객에게 담당자를 알려줬어요.', good: true });
  if (/최선/.test(gl)) result.push({ phrase: '최선', comment: '서비스 의지를 잘 전달하는 표현이에요.', good: true });
  if (/편안/.test(gl)) result.push({ phrase: '편안', comment: '승객의 편안함을 중심에 둔 좋은 표현이에요.', good: true });
  if (/모시/.test(gl)) result.push({ phrase: '모시다', comment: '격식 있으면서도 진심이 담긴 서비스 표현이에요.', good: true });
  if (/감사/.test(gl)) result.push({ phrase: '감사', comment: '승객에 대한 감사 표현 — 관계를 따뜻하게 만들어줘요.', good: true });
  if (/수고/.test(gl)) result.push({ phrase: '수고', comment: '승객의 노고를 인정하는 공감 표현이에요.', good: true });
  if (/생일/.test(gl)) result.push({ phrase: '생일', comment: '개인적인 정보를 활용한 훌륭한 개인화 표현이에요!', good: true });
  if (/업그레이드/.test(gl)) result.push({ phrase: '업그레이드', comment: '특별한 상황을 인식하고 있음을 보여주는 표현이에요.', good: true });
  if (/프라이버시/.test(gl)) result.push({ phrase: '프라이버시', comment: 'VVIP 배려 표현 — 섬세한 서비스 인식을 보여줍니다.', good: true });
  if (/천천히/.test(gl)) result.push({ phrase: '천천히', comment: '고령 고객에 대한 배려가 담긴 훌륭한 표현이에요.', good: true });
  if (/안내/.test(gl)) result.push({ phrase: '안내', comment: '서비스 제공 의지를 구체적으로 표현했어요.', good: true });

  // Negative patterns
  if (/어서오세요/.test(gl)) result.push({ phrase: '어서오세요', comment: '일반 매장 표현에 가까워요. "탑승을 환영합니다"가 더 품격 있습니다.', good: false });
  if (/안녕하세요$/.test(gl.trim())) result.push({ phrase: '안녕하세요', comment: '짧은 인사만으로는 JJEMS Greeting이 완성되지 않아요. 더 풀어서 표현해보세요.', good: false });

  return result.slice(0, 4);
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

async function getDemoResponse(passenger, greeting) {
  await new Promise(r => setTimeout(r, 1100));

  const pid = passengerSelect.value;
  const data = demoData[pid];
  const analysis = analyzeGreeting(greeting, passenger);

  // 승객은 호칭 오류를 지적하지 않음 — 점수 기반으로 자연스러운 온도 차이만 표현
  const responseTier =
    analysis.score >= 88 ? 'excellent' :
    analysis.score >= 70 ? 'good' :
    analysis.score >= 50 ? 'ok' : 'brief';

  const passengerResponse = pick(data[responseTier + 'Reaction'] || data.okReaction);
  const instructorComment = buildDemoInstructorComment(analysis.tier, analysis.score, passenger, greeting, analysis);
  const expressionFeedback = generateExpressionFeedback(greeting, analysis.tier);

  return {
    passengerResponse,
    score: analysis.score,
    instructorComment,
    expressionFeedback,
    strengths: analysis.strengths,
    improvement: analysis.improvement,
    hasFlightInfo: analysis.hasFlightInfo,
    hasWeatherInfo: analysis.hasWeatherInfo,
    hasTitleCorrect: analysis.hasTitleCorrect,
  };
}

// ─── TTS (승객 목소리) ─────────────────────────────────────────────────────────
const ttsConfig = {
  1: { lang: 'ko-KR', pitch: 0.85, rate: 0.90 }, // 대통령 — 중후하고 차분
  2: { lang: 'ko-KR', pitch: 0.80, rate: 0.98 }, // CIP 대표 — 낮고 간결
  3: { lang: 'ko-KR', pitch: 0.83, rate: 0.93 }, // AIP 회장 — 품격 있게
  4: { lang: 'ko-KR', pitch: 0.90, rate: 1.00 }, // AAIP 대표 — 자연스럽게
  5: { lang: 'ko-KR', pitch: 1.15, rate: 0.95 }, // JIP 본부장(여성) — 밝고 차분
};

function speakPassengerResponse(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const pid = passengerSelect.value;
  const cfg = ttsConfig[pid] || { lang: 'ko-KR', pitch: 1.0, rate: 1.0 };

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang  = cfg.lang;
  utter.pitch = cfg.pitch;
  utter.rate  = cfg.rate;

  const voices = window.speechSynthesis.getVoices();
  const match = voices.find(v => v.lang.startsWith(cfg.lang.split('-')[0]) && v.lang === cfg.lang)
    || voices.find(v => v.lang.startsWith(cfg.lang.split('-')[0]));
  if (match) utter.voice = match;

  window.speechSynthesis.speak(utter);

  const btn = document.getElementById('ttsBtn');
  if (!btn) return;
  btn.textContent = '🔊 재생 중...';
  btn.disabled = true;
  utter.onend = () => { btn.textContent = '🔊 다시 듣기'; btn.disabled = false; };
  utter.onerror = () => { btn.textContent = '🔊 다시 듣기'; btn.disabled = false; };
}

// ─── Init ─────────────────────────────────────────────────────────────────────
loadApiKey();
