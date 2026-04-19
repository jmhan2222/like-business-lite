const scenarios = {
  1: {
    title: '보딩 시 수하물 및 좌석 중복 분쟁',
    text: '"저기요, 제 자리에 다른 사람이 앉아 있고 제 짐도 선반에 못 올렸어요. 어떻게 된 거예요? 빨리 해결해 주세요!"',
    hint: '승객을 차분히 안심시키고 탑승권을 확인한 뒤, 해당 좌석 승객에게도 정중히 탑승권 확인을 요청합니다. 수하물은 여유 공간을 찾아 함께 도와드립니다.'
  },
  2: {
    title: '비행 공포증 호소 승객 케어',
    text: '"저 비행기 타는 게 너무 무서워요. 심장이 두근거리고 손에 땀이 나요. 이 비행기 안전한 거 맞죠...?"',
    hint: '공감하는 말투로 승객의 불안을 인정하고, 안전 통계와 승무원의 전문성을 짧게 안내합니다. 필요 시 손을 잡거나 호흡법을 안내하는 것도 좋습니다.'
  },
  3: {
    title: '면세품 품절 안내 상황',
    text: '"아까 카탈로그에서 봤던 향수 주문하려고 했는데, 그게 없다고요? 인터넷에서 기내에 있다고 해서 일부러 사러 왔는데 너무하네요."',
    hint: '재고 부재에 대해 진심으로 사과하고, 유사 대체 상품을 안내합니다. 면세점 사전 예약 등 대안도 함께 안내하여 불편을 최소화합니다.'
  },
  4: {
    title: '분실물 관련 하기 후 기내 재접근 상황',
    text: '"저 방금 내렸다가 선반에 가방을 두고 내렸어요! 다시 들어가서 찾아도 되나요? 중요한 서류가 들어있어요!"',
    hint: '보안 절차상 임의 재탑승이 불가함을 설명하고, 분실물 신고 절차를 안내합니다. 승무원이 직접 확인 후 전달하거나 공항 분실물 센터로 연계합니다.'
  },
  5: {
    title: '외부 음식 취식 및 데움 요청',
    text: '"저 편의점에서 도시락 사왔는데 차갑네요. 전자레인지로 좀 데워주실 수 있어요? 그냥 먹어도 되나요?"',
    hint: '기내에서 외부 음식 취식 자체는 가능하지만, 기내 전자레인지는 기내식 전용이라 사용 불가함을 정중히 안내합니다. 뜨거운 물이나 기내식 대안을 제안합니다.'
  },
  6: {
    title: '에어카페 유료 품목 및 서비스 오류 안내',
    text: '"음료 주문했는데 카드 결제가 계속 안 되네요. 현금도 없는데 그럼 그냥 마실 수 없는 건가요? 왜 기내에서 카드가 안 돼요?"',
    hint: '결제 오류 상황을 공감하고 진심으로 사과합니다. 단말기 재시도, 다른 카드 시도 등을 안내하고, 상황이 지속되면 착륙 후 처리 방안을 안내합니다.'
  },
  7: {
    title: '우는 아이 승객에 대한 불만 승객 발생',
    text: '"저기요, 앞자리 아이가 계속 울어서 잠을 못 자겠어요. 자리를 좀 바꿔주실 수 없나요? 도저히 못 참겠어요."',
    hint: '불편함에 공감하며 사과합니다. 빈 좌석 확인 후 가능하면 이동을 도와드립니다. 어렵다면 귀마개 제공, 소음 차단 도움 등 대안을 안내합니다.'
  },
  8: {
    title: '화장실 대기 및 청결 불만',
    text: '"화장실이 너무 더러워요. 어디서 다들 쓰고 닦지도 않는 건지. 그리고 줄이 너무 길어요, 빨리 어떻게 해 주세요."',
    hint: '불편을 드려 죄송하다고 사과하고 즉시 청결 상태를 확인·조치합니다. 혼잡 시 이용 가능한 화장실 위치(예: 비즈니스석 구역 등)를 안내합니다.'
  },
  9: {
    title: '기내 온도 불만 및 유료 담요 안내',
    text: '"기내가 너무 춥네요. 담요 하나만 주실 수 있어요? 아니면 온도 좀 높여주세요, 너무 추워서 못 있겠어요."',
    hint: '기내 온도 조절의 한계를 설명하고, 유료 담요임을 안내합니다. 여분 담요가 있으면 제공하고, 개인 옷·짐으로 체온 유지 방법도 안내합니다.'
  },
  10: {
    title: '보딩 시 날짜/편명 및 탑승권 확인',
    text: '"저 지금 탈 수 있는 거 맞죠? 앱에서 탑승권을 캡처해왔는데 날짜가 맞는지 잘 모르겠어요."',
    hint: '탑승권의 날짜, 편명, 좌석을 친절하게 함께 확인합니다. 오류가 있으면 게이트 직원에게 즉시 연계하여 처리될 수 있도록 안내합니다.'
  },
  11: {
    title: '에어카페 상품 주문 및 결제 응대',
    text: '"음료 뭐가 있어요? 어떤 게 제일 맛있어요? 그리고 이거 얼마예요? 카드로 계산할 수 있어요?"',
    hint: '메뉴와 가격을 명확히 안내하고, 결제 수단(카드, 현금 등)을 설명합니다. 추천 메뉴를 자신감 있게 소개하여 서비스 만족도를 높입니다.'
  },
  12: {
    title: '기내 면세품 주문 및 결제 응대',
    text: '"면세품 카탈로그 봤는데 이 화장품 세트 주문하고 싶어요. 한국 돈으로도 살 수 있어요? 면세 한도 있나요?"',
    hint: '면세품 구매 절차, 가능한 결제 통화(원화·외화), 면세 한도를 명확히 안내합니다. 인기 상품 추천 멘트를 더하면 서비스 품질이 올라갑니다.'
  },
  13: {
    title: '난기류 발생 시 좌석벨트 착용 안내',
    text: '"저 지금 화장실 가야 하는데요, 벨트 사인이 켜져 있어도 잠깐만 갔다 오면 되지 않아요? 급해요."',
    hint: '안전을 최우선으로 설명하고, 벨트 사인 중 이동은 안전 규정상 불가함을 단호하지만 공감하는 어조로 안내합니다. 난기류가 잦아들면 바로 알려드리겠다고 약속합니다.'
  },
  14: {
    title: '운항 스케줄 확인 및 단순 안심 케어',
    text: '"지금 얼마나 더 가야 해요? 목적지까지 몇 시간 남았어요? 제 환승 연결편이 걱정돼서요."',
    hint: '현재 비행 시간과 도착 예정 시각을 안내하고, 환승 여유 시간을 함께 계산해드립니다. 걱정을 공감하고 착륙 전 다시 확인해드리겠다는 말로 마무리합니다.'
  }
};

let isRecording = false;
let recordingTimer = null;

const select = document.getElementById('situationSelect');
const scenarioSection = document.getElementById('scenarioSection');
const actionSection = document.getElementById('actionSection');
const scenarioTitle = document.getElementById('scenarioTitle');
const scenarioText = document.getElementById('scenarioText');
const scenarioHint = document.getElementById('scenarioHint');
const recordBtn = document.getElementById('recordBtn');
const recordBtnText = document.getElementById('recordBtnText');
const recordingIndicator = document.getElementById('recordingIndicator');
const submitBtn = document.getElementById('submitBtn');
const statusBadge = document.getElementById('statusBadge');
const resultArea = document.getElementById('resultArea');
const resultContent = document.getElementById('resultContent');

select.addEventListener('change', () => {
  const val = select.value;
  if (!val) {
    scenarioSection.classList.add('hidden');
    actionSection.classList.add('hidden');
    return;
  }

  const s = scenarios[val];
  scenarioTitle.textContent = s.title;
  scenarioText.textContent = s.text;
  scenarioHint.textContent = s.hint;
  scenarioSection.classList.remove('hidden');
  actionSection.classList.remove('hidden');

  resetState();
});

recordBtn.addEventListener('click', () => {
  if (!isRecording) {
    startRecording();
  } else {
    stopRecording();
  }
});

submitBtn.addEventListener('click', () => {
  showResult();
});

document.getElementById('resetBtn').addEventListener('click', () => {
  select.value = '';
  scenarioSection.classList.add('hidden');
  actionSection.classList.add('hidden');
  resetState();
});

function startRecording() {
  isRecording = true;
  recordBtn.classList.add('active');
  recordBtnText.textContent = '녹음 중지';
  recordingIndicator.classList.remove('hidden');
  setStatus('recording', '녹음 중');

  recordingTimer = setTimeout(() => {
    stopRecording();
  }, 30000);
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
  const feedbacks = [
    '승객의 감정에 공감하며 차분하게 응대하셨습니다. 해결책 제시도 명확했습니다.',
    '정중한 어조와 빠른 해결 의지를 잘 표현하셨습니다. 추가 대안 안내를 더하면 더욱 완성도가 높아집니다.',
    '상황을 명확하게 파악하고 절차에 따라 안내하셨습니다. 마지막에 감사 인사를 추가해보세요.',
    '공감 표현이 자연스럽고 안내가 친절했습니다. 전반적으로 우수한 응대였습니다.'
  ];
  const scores = [88, 91, 85, 94];
  const idx = (parseInt(val) - 1) % feedbacks.length;

  resultContent.innerHTML = `
    <div class="result-score">
      <span class="score-label">응대 점수</span>
      <span class="score-value">${scores[idx]}점</span>
    </div>
    <div class="result-feedback">${feedbacks[idx]}</div>
  `;

  resultArea.classList.remove('hidden');
  setStatus('done', '평가 완료');
  submitBtn.disabled = true;
}

function resetState() {
  isRecording = false;
  clearTimeout(recordingTimer);
  recordBtn.classList.remove('active');
  recordBtnText.textContent = '답변 녹음하기';
  recordingIndicator.classList.add('hidden');
  submitBtn.disabled = true;
  resultArea.classList.add('hidden');
  setStatus('waiting', '대기 중');
}
