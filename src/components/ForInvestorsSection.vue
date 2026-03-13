<template>
  <section id="for-investors" class="section-padding bg-gradient-light">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6" class="animate-fade-in-up">
          <div class="section-chip mb-5">Для рассрочкадателей</div>
          <h2 class="section-title mb-4">
            Зарабатывайте на <span class="text-gradient">халяльной рассрочке</span>
          </h2>
          <p class="text-body-1 text-muted-custom mb-8" style="max-width: 480px; line-height: 1.7">
            Инвестируйте свой капитал по принципам исламских финансов.
            Фиксированная прибыль, управляемые риски, автоматизация процессов.
          </p>

          <div class="d-flex flex-column ga-5 mb-10">
            <div v-for="(benefit, i) in benefits" :key="i" class="benefit-item">
              <div class="benefit-icon">
                <v-icon :icon="benefit.icon" color="primary" size="20" />
              </div>
              <div>
                <div class="text-subtitle-2 font-weight-bold mb-1">{{ benefit.title }}</div>
                <div class="text-body-2 text-muted-custom" style="line-height: 1.6">{{ benefit.text }}</div>
              </div>
            </div>
          </div>

          <v-btn
            to="/partner"
            color="primary"
            size="x-large"
            class="text-none px-8"
            rounded="pill"
          >
            Подать заявку
            <v-icon icon="mdi-arrow-right" class="ml-2" />
          </v-btn>
        </v-col>

        <v-col cols="12" md="6" class="animate-fade-in-up delay-3">
          <!-- Dashboard preview -->
          <div class="dashboard-preview">
            <div class="dashboard-header">
              <div class="d-flex align-center ga-2">
                <v-icon icon="mdi-view-dashboard-outline" size="18" color="primary" />
                <span class="text-body-2 font-weight-bold">Панель инвестора</span>
              </div>
              <div class="dashboard-dots">
                <span /><span /><span />
              </div>
            </div>

            <v-row dense class="mb-4">
              <v-col cols="6">
                <div class="metric-card metric-primary">
                  <div class="metric-label">Инвестировано</div>
                  <div class="metric-value">564 980 &#8381;</div>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="metric-card">
                  <div class="metric-label">Прибыль</div>
                  <div class="metric-value text-primary">97 998 &#8381;</div>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="metric-card">
                  <div class="metric-label">ROI</div>
                  <div class="metric-value">17.3%</div>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="metric-card">
                  <div class="metric-label">Доход/мес</div>
                  <div class="metric-value text-primary">36 415 &#8381;</div>
                </div>
              </v-col>
            </v-row>

            <div class="payments-section">
              <div class="text-caption font-weight-bold text-muted-custom mb-3" style="text-transform: uppercase; letter-spacing: 0.05em">
                Ближайшие платежи
              </div>
              <div v-for="(payment, i) in payments" :key="i" class="payment-row">
                <div class="d-flex align-center ga-3">
                  <div class="payment-avatar" :style="{ background: payment.bg }">
                    <v-icon :icon="payment.icon" size="14" :color="payment.color" />
                  </div>
                  <div>
                    <div class="text-body-2 font-weight-bold">{{ payment.name }}</div>
                    <div class="text-caption text-muted-custom">{{ payment.date }}</div>
                  </div>
                </div>
                <div class="text-body-2 font-weight-bold">{{ payment.amount }}</div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
const benefits = [
  { icon: 'mdi-briefcase-outline', title: 'Портфель сделок', text: 'Управляйте десятками сделок одновременно через веб-панель или приложение' },
  { icon: 'mdi-cog-outline', title: 'Автоматизация', text: 'Автогенерация графиков платежей, уведомления о просрочках, аналитика' },
  { icon: 'mdi-star-outline', title: 'Рейтинговая система', text: 'Оценивайте надёжность клиентов по истории платежей и рейтингу' },
  { icon: 'mdi-book-open-page-variant-outline', title: 'Халяль-соответствие', text: 'Фиксированная наценка, товар в собственности до продажи, без штрафов-прибыли' },
]

const payments = [
  { name: 'Ахмад И.', date: '15 марта', amount: '11 748 ₽', icon: 'mdi-cellphone', color: '#047857', bg: '#f0fdf4' },
  { name: 'Муса Д.', date: '18 марта', amount: '10 791 ₽', icon: 'mdi-laptop', color: '#d97706', bg: '#fffbeb' },
  { name: 'Хасан М.', date: '22 марта', amount: '18 667 ₽', icon: 'mdi-cellphone', color: '#0f766e', bg: '#f0fdfa' },
]
</script>

<style scoped>
.benefit-item {
  display: flex;
  gap: 16px;
}

.benefit-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 10px;
  background: #f0fdf4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dashboard-preview {
  background: #ffffff;
  border: 1px solid #d1e7db;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(4, 120, 87, 0.06);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e2efe8;
}

.dashboard-dots {
  display: flex;
  gap: 4px;
}

.dashboard-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #cbd5e1;
}

.metric-card {
  background: #fafdfb;
  border: 1px solid #e2efe8;
  border-radius: 12px;
  padding: 14px 16px;
}

.metric-card.metric-primary {
  background: #047857;
  border-color: #047857;
}

.metric-primary .metric-label {
  color: rgba(255, 255, 255, 0.7);
}

.metric-primary .metric-value {
  color: #ffffff;
}

.metric-label {
  font-size: 0.7rem;
  color: #5f7a6b;
  margin-bottom: 4px;
}

.metric-value {
  font-size: 1rem;
  font-weight: 800;
  color: #1a2e23;
  letter-spacing: -0.02em;
}

.payments-section {
  margin-top: 4px;
}

.payment-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0fdf4;
}

.payment-row:last-child {
  border-bottom: none;
}

.payment-avatar {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-primary {
  color: #047857 !important;
}
</style>
