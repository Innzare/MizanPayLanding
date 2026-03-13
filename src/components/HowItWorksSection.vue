<template>
  <section id="how-it-works" class="section-padding bg-gradient-light">
    <v-container>
      <div class="text-center mb-14 animate-fade-in-up">
        <div class="section-chip mb-4">Процесс</div>
        <h2 class="section-title mb-3">
          Как это <span class="text-gradient">работает</span>
        </h2>
        <p class="section-subtitle">
          Простой и прозрачный процесс от заявки до последнего платежа
        </p>
      </div>

      <!-- Tabs -->
      <div class="d-flex justify-center mb-10">
        <div class="tab-toggle">
          <button
            class="tab-btn"
            :class="{ active: tab === 'buyer' }"
            @click="tab = 'buyer'"
          >
            <v-icon icon="mdi-account" size="18" class="mr-2" />
            Покупатель
          </button>
          <button
            class="tab-btn"
            :class="{ active: tab === 'investor' }"
            @click="tab = 'investor'"
          >
            <v-icon icon="mdi-briefcase" size="18" class="mr-2" />
            Рассрочкадатель
          </button>
        </div>
      </div>

      <!-- Steps -->
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div
            v-for="(step, i) in (tab === 'buyer' ? buyerSteps : investorSteps)"
            :key="tab + i"
            class="step-item animate-fade-in-up"
            :class="`delay-${i + 1}`"
          >
            <div class="step-number-new" :class="tab === 'buyer' ? 'step-primary' : 'step-secondary'">
              {{ i + 1 }}
            </div>
            <div v-if="i < 4" class="step-line" />
            <div class="step-content">
              <h3 class="text-subtitle-1 font-weight-bold mb-1">{{ step.title }}</h3>
              <p class="text-body-2 text-muted-custom" style="line-height: 1.65">{{ step.description }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tab = ref('buyer')

const buyerSteps = [
  {
    title: 'Зарегистрируйтесь',
    description: 'Скачайте приложение и зарегистрируйтесь по номеру телефона. Это займёт меньше минуты.',
  },
  {
    title: 'Создайте заявку',
    description: 'Опишите товар, который хотите приобрести: категория, цена, желаемый срок и первоначальный взнос.',
  },
  {
    title: 'Получите предложение',
    description: 'Рассрочкадатель примет вашу заявку и предложит условия: итоговую цену, график платежей.',
  },
  {
    title: 'Подпишите договор',
    description: 'Ознакомьтесь с условиями, подпишите договор. Рассрочкадатель выкупает товар и передаёт вам.',
  },
  {
    title: 'Платите частями',
    description: 'Оплачивайте равными платежами по графику. Отслеживайте прогресс в приложении.',
  },
]

const investorSteps = [
  {
    title: 'Подайте заявку на партнёрство',
    description: 'Заполните форму на сайте, пройдите верификацию. Мы проверим документы и откроем доступ.',
  },
  {
    title: 'Настройте каталог',
    description: 'Добавьте товары, которые готовы продавать в рассрочку. Укажите условия: цена, сроки, минимальный взнос.',
  },
  {
    title: 'Принимайте заявки',
    description: 'Просматривайте заявки покупателей, оценивайте рейтинг клиента и принимайте решение.',
  },
  {
    title: 'Совершайте сделку',
    description: 'Выкупите товар, передайте клиенту, подпишите договор. Платформа автоматически создаст график платежей.',
  },
  {
    title: 'Получайте доход',
    description: 'Получайте платежи по графику. Отслеживайте аналитику: прибыль, ROI, портфель активных сделок.',
  },
]
</script>

<style scoped>
.tab-toggle {
  display: inline-flex;
  border-radius: 100px;
  padding: 4px;
  background: #f0fdf4;
  border: 1px solid #d1e7db;
  gap: 4px;
}

.tab-btn {
  display: flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #5f7a6b;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
}

.tab-btn.active {
  background: #047857;
  color: white;
  box-shadow: 0 2px 8px rgba(4, 120, 87, 0.25);
}

.tab-btn:not(.active):hover {
  color: #047857;
}

.step-item {
  display: flex;
  gap: 20px;
  position: relative;
  padding-bottom: 32px;
}

.step-item:last-child {
  padding-bottom: 0;
}

.step-number-new {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: white;
  position: relative;
  z-index: 1;
}

.step-primary {
  background: #047857;
}

.step-secondary {
  background: #0f766e;
}

.step-line {
  position: absolute;
  left: 19px;
  top: 44px;
  bottom: 0;
  width: 2px;
  background: #d1e7db;
}

.step-content {
  padding-top: 6px;
}
</style>
