<template>
  <section id="how-it-works" class="section-padding bg-gradient-light">
    <v-container>
      <div class="text-center mb-14 animate-fade-in-up">
        <div class="section-chip mb-4">Процесс</div>
        <h2 class="section-title mb-3">
          Как это <span class="text-gradient">работает</span>
        </h2>
        <p class="section-subtitle">
          Простой и прозрачный процесс от регистрации до получения дохода
        </p>
      </div>

      <!-- Steps -->
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="step-item animate-fade-in-up"
            :class="`delay-${i + 1}`"
          >
            <div class="step-number-new step-primary">
              {{ i + 1 }}
            </div>
            <div v-if="i < steps.length - 1" class="step-line" />
            <div class="step-content">
              <h3 class="text-subtitle-1 font-weight-bold mb-1">{{ step.title }}</h3>
              <p class="text-body-2 text-muted-custom" style="line-height: 1.65">{{ step.description }}</p>
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="text-center mt-10 animate-fade-in-up delay-5">
        <v-btn to="/partner" color="primary" size="large" class="text-none px-8" rounded="pill">
          Зарегистрировать компанию
          <v-icon icon="mdi-arrow-right" class="ml-2" />
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
const steps = [
  {
    title: 'Регистрация компании',
    description: 'Подайте заявку и получите доступ к личному кабинету для вашей команды.',
  },
  {
    title: 'Создайте сделку',
    description: 'Укажите товар, условия рассрочки и данные клиента.',
  },
  {
    title: 'Получайте платежи',
    description: 'Клиент платит по графику, вы контролируете в личном кабинете.',
  },
  {
    title: 'Отправляйте напоминания',
    description: 'Если клиент задерживает — отправьте напоминание в WhatsApp.',
  },
]
</script>

<style scoped>
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