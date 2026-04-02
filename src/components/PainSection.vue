<template>
  <section class="pain-section">
    <div class="pain-container">

      <!-- Header -->
      <div class="pain-header">
        <div class="section-chip">Знакомо?</div>
        <h2 class="pain-title">Вы до сих пор ведёте рассрочки <span class="pain-highlight">вручную?</span></h2>
      </div>

      <!-- Pain points grid -->
      <div class="pain-grid">
        <div class="pain-card">
          <div class="pain-icon">
            <v-icon icon="mdi-table" size="28" />
          </div>
          <div class="pain-card-title">Таблицы и тетрадки</div>
          <div class="pain-card-text">
            Excel, блокноты, записки в телефоне. Данные разбросаны, теряются, путаются. Одна ошибка — и вы не знаете кто сколько должен.
          </div>
        </div>

        <div class="pain-card">
          <div class="pain-icon">
            <v-icon icon="mdi-chat-processing-outline" size="28" />
          </div>
          <div class="pain-card-title">Напоминания вручную</div>
          <div class="pain-card-text">
            Каждый месяц заходите в каждый чат, пишете каждому клиенту: "Вам пора платить". 10 клиентов — 10 сообщений. 50 — уже работа на полдня.
          </div>
        </div>

        <div class="pain-card">
          <div class="pain-icon">
            <v-icon icon="mdi-head-question-outline" size="28" />
          </div>
          <div class="pain-card-title">Всё в голове</div>
          <div class="pain-card-text">
            Какая сделка с кем, на каких условиях, сколько осталось платежей, кто просрочил — держите всё это в памяти? Рано или поздно что-то забудется.
          </div>
        </div>

        <div class="pain-card">
          <div class="pain-icon">
            <v-icon icon="mdi-calculator-variant-outline" size="28" />
          </div>
          <div class="pain-card-title">Расчёты на калькуляторе</div>
          <div class="pain-card-text">
            Наценка, первоначальный взнос, остаток, ежемесячный платёж — каждый раз считаете заново. А если условия меняются — пересчёт всего графика.
          </div>
        </div>
      </div>

      <!-- Transition arrow -->
      <div class="pain-transition">
        <div class="pain-transition-line" />
        <div class="pain-transition-badge">
          <v-icon icon="mdi-arrow-down" size="20" />
        </div>
        <div class="pain-transition-line" />
      </div>

      <!-- Solution block -->
      <div class="solution-block">
        <div class="solution-glow" />
        <div class="solution-content">
          <div class="solution-icon">
            <v-icon icon="mdi-check-decagram" size="36" color="white" />
          </div>
          <h3 class="solution-title">С MizanPay всё это уходит в прошлое</h3>
          <p class="solution-text">
            Одна платформа заменяет все тетрадки, таблицы и чаты. Создавайте сделки за минуту, отслеживайте платежи в реальном времени, отправляйте напоминания одной кнопкой.
          </p>

          <div class="solution-features">
            <div class="solution-feature">
              <v-icon icon="mdi-lightning-bolt" size="18" color="#34d399" />
              <span>Создание сделки за 60 секунд</span>
            </div>
            <div class="solution-feature">
              <v-icon icon="mdi-calendar-check" size="18" color="#34d399" />
              <span>Автоматический график платежей</span>
            </div>
            <div class="solution-feature">
              <v-icon icon="mdi-whatsapp" size="18" color="#34d399" />
              <span>Напоминания в WhatsApp одной кнопкой</span>
            </div>
            <div class="solution-feature">
              <v-icon icon="mdi-chart-box-outline" size="18" color="#34d399" />
              <span>Вся аналитика на одном дашборде</span>
            </div>
            <div class="solution-feature">
              <v-icon icon="mdi-account-off-outline" size="18" color="#34d399" />
              <span>Клиент не обязан быть в приложении</span>
            </div>
            <div class="solution-feature">
              <v-icon icon="mdi-cellphone-check" size="18" color="#34d399" />
              <span>Доступно с телефона и компьютера</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.pain-section {
  padding: 100px 24px 80px;
  background: #fafbfc;
  position: relative;
  overflow: hidden;
}

.pain-container {
  max-width: 1100px;
  margin: 0 auto;
}

.pain-header {
  text-align: center;
  margin-bottom: 56px;
}

.pain-title {
  font-size: 2.4rem;
  font-weight: 800;
  color: #0c1a12;
  line-height: 1.2;
  margin-top: 16px;
}

.pain-highlight {
  color: #ef4444;
  position: relative;
}

.pain-highlight::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
  height: 8px;
  background: rgba(239, 68, 68, 0.12);
  border-radius: 4px;
  z-index: -1;
}

/* Pain cards */
.pain-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.pain-card {
  padding: 28px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #f0f0f0;
  transition: all 0.3s;
}

.pain-card:hover {
  border-color: #fecaca;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.06);
  transform: translateY(-2px);
}

.pain-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(239, 68, 68, 0.08);
  color: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.pain-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0c1a12;
  margin-bottom: 8px;
}

.pain-card-text {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #5f7a6b;
}

/* Transition */
.pain-transition {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 48px 0;
}

.pain-transition-line {
  height: 2px;
  flex: 1;
  max-width: 120px;
  background: linear-gradient(90deg, transparent 0%, #d1d5db 50%, transparent 100%);
}

.pain-transition-badge {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #047857, #34d399);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(4, 120, 87, 0.3);
  animation: bounce-gentle 2s ease-in-out infinite;
}

@keyframes bounce-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

/* Solution block */
.solution-block {
  position: relative;
  border-radius: 24px;
  background: linear-gradient(135deg, #047857 0%, #065f46 50%, #064e3b 100%);
  padding: 48px;
  color: #fff;
  overflow: hidden;
}

.solution-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.2), transparent 70%);
  top: -80px;
  right: -80px;
  pointer-events: none;
}

.solution-content {
  position: relative;
  z-index: 1;
}

.solution-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.solution-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 1.3;
}

.solution-text {
  font-size: 1.05rem;
  line-height: 1.7;
  opacity: 0.85;
  max-width: 640px;
  margin-bottom: 32px;
}

.solution-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px 32px;
}

.solution-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  opacity: 0.95;
}

/* Mobile */
@media (max-width: 768px) {
  .pain-section { padding: 64px 16px 56px; }
  .pain-title { font-size: 1.7rem; }
  .pain-grid { grid-template-columns: 1fr; }
  .solution-block { padding: 32px 24px; }
  .solution-title { font-size: 1.4rem; }
  .solution-features { grid-template-columns: 1fr; }
}
</style>