<template>
  <section id="for-investors" class="section-padding bg-gradient-light">
    <v-container>
      <div class="text-center mb-14 animate-fade-in-up">
        <div class="section-chip mb-4">Инструменты</div>
        <h2 class="section-title mb-3">
          Мощные инструменты для <span class="text-gradient">вашего бизнеса</span>
        </h2>
        <p class="section-subtitle">
          Реальные скриншоты платформы — то, что вы получите после регистрации
        </p>
      </div>

      <!-- Block 1: screenshot left, text right -->
      <v-row align="center" class="showcase-block mb-16">
        <v-col cols="12" md="7" class="animate-fade-in-up">
          <div class="screenshot-card screenshot-card--left">
            <img :src="dealsList" alt="Портфель сделок" class="screenshot-img" />
          </div>
        </v-col>
        <v-col cols="12" md="5" class="animate-fade-in-up delay-2">
          <div class="showcase-text">
            <div class="showcase-icon-wrap mb-4">
              <v-icon icon="mdi-briefcase-outline" color="primary" size="24" />
            </div>
            <h3 class="showcase-title mb-3">Портфель сделок</h3>
            <p class="showcase-desc">
              Все ваши сделки в одном месте. Фильтруйте по статусу,
              отслеживайте прогресс платежей, контролируйте остатки.
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- Block 2: text left, screenshot right -->
      <v-row align="center" class="showcase-block mb-16 flex-md-row-reverse">
        <v-col cols="12" md="7" class="animate-fade-in-up">
          <div class="screenshot-card screenshot-card--right">
            <img :src="newDeal" alt="Создание сделки" class="screenshot-img" />
          </div>
        </v-col>
        <v-col cols="12" md="5" class="animate-fade-in-up delay-2">
          <div class="showcase-text">
            <div class="showcase-icon-wrap mb-4">
              <v-icon icon="mdi-plus-circle-outline" color="primary" size="24" />
            </div>
            <h3 class="showcase-title mb-3">Создание сделки за минуту</h3>
            <p class="showcase-desc">
              Пошаговый визард: укажите товар, условия рассрочки и данные клиента.
              График платежей сформируется автоматически. Клиент не обязан быть на платформе.
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- Block 3: screenshot left, text right -->
      <v-row align="center" class="showcase-block mb-16">
        <v-col cols="12" md="7" class="animate-fade-in-up">
          <div class="screenshot-card screenshot-card--left">
            <img :src="paymentsCalendar" alt="Контроль платежей" class="screenshot-img" />
          </div>
        </v-col>
        <v-col cols="12" md="5" class="animate-fade-in-up delay-2">
          <div class="showcase-text">
            <div class="showcase-icon-wrap mb-4">
              <v-icon icon="mdi-calendar-month-outline" color="primary" size="24" />
            </div>
            <h3 class="showcase-title mb-3">Контроль платежей</h3>
            <p class="showcase-desc">
              Таблица и календарь платежей. Видите кто платит вовремя, а кто задерживает.
              Отмечайте оплату, прикладывайте скриншоты подтверждения.
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- Block 4: text left, screenshot right -->
      <v-row align="center" class="showcase-block flex-md-row-reverse">
        <v-col cols="12" md="7" class="animate-fade-in-up">
          <div class="screenshot-card screenshot-card--right">
            <img :src="chart" alt="Аналитика и прогнозы" class="screenshot-img" />
          </div>
        </v-col>
        <v-col cols="12" md="5" class="animate-fade-in-up delay-2">
          <div class="showcase-text">
            <div class="showcase-icon-wrap mb-4">
              <v-icon icon="mdi-chart-line" color="primary" size="24" />
            </div>
            <h3 class="showcase-title mb-3">Аналитика и прогнозы</h3>
            <p class="showcase-desc">
              Поступления за 6 месяцев, прогноз доходов, ROI, ежемесячный доход —
              принимайте решения на основе данных.
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- CTA -->
      <div class="text-center mt-14 animate-fade-in-up">
        <p class="text-body-1 text-muted-custom mb-5" style="max-width: 480px; margin: 0 auto; line-height: 1.7;">
          Всё это доступно сразу после регистрации. Начните управлять рассрочками профессионально.
        </p>
        <div class="d-flex justify-center ga-3 flex-wrap">
          <v-btn to="/partner" color="primary" size="large" class="text-none px-8" rounded="pill">
            Зарегистрировать компанию
            <v-icon icon="mdi-arrow-right" class="ml-2" />
          </v-btn>
          <v-btn href="https://partner.mizan-pay.ru" target="_blank" variant="outlined" color="primary" size="large" class="text-none px-8" rounded="pill">
            Войти в кабинет
          </v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import dealsList from '@/assets/images/deals-list.png'
import newDeal from '@/assets/images/new-deal.png'
import paymentsCalendar from '@/assets/images/payments-calendar.png'
import chart from '@/assets/images/chart.png'
</script>

<style scoped>
.screenshot-card {
  background: #ffffff;
  border: 1px solid #e2efe8;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(4, 120, 87, 0.06),
    0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.4s ease;
}

.screenshot-card:hover {
  box-shadow:
    0 16px 48px rgba(4, 120, 87, 0.1),
    0 2px 6px rgba(0, 0, 0, 0.06);
  transform: translateY(-4px);
}

.screenshot-card--left {
  transform: perspective(1200px) rotateY(2deg);
}

.screenshot-card--left:hover {
  transform: perspective(1200px) rotateY(0deg) translateY(-4px);
}

.screenshot-card--right {
  transform: perspective(1200px) rotateY(-2deg);
}

.screenshot-card--right:hover {
  transform: perspective(1200px) rotateY(0deg) translateY(-4px);
}

.screenshot-img {
  display: block;
  width: 100%;
  height: auto;
}

.showcase-text {
  padding: 0 16px;
}

@media (min-width: 960px) {
  .showcase-text {
    padding: 0 32px;
  }
}

.showcase-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #f0fdf4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.showcase-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0c1a12;
  letter-spacing: -0.02em;
}

.showcase-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: #5f7a6b;
}

@media (max-width: 959px) {
  .screenshot-card--left,
  .screenshot-card--right {
    transform: none;
  }

  .screenshot-card--left:hover,
  .screenshot-card--right:hover {
    transform: translateY(-4px);
  }

  .showcase-text {
    margin-top: 24px;
    padding: 0;
  }
}
</style>