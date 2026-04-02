<template>
  <section id="features" class="section-padding">
    <v-container>
      <div class="text-center mb-14 animate-fade-in-up">
        <div class="section-chip mb-4">Возможности</div>
        <h2 class="section-title mb-3">
          Всё что нужно <span class="text-gradient">инвестору</span>
        </h2>
        <p class="section-subtitle">
          Автоматизируйте учёт и контролируйте каждую сделку
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          class="animate-fade-in-up"
          :class="`delay-${i + 1}`"
        >
          <v-card class="feature-card pa-6 h-100 hover-lift" variant="flat">
            <div class="icon-circle mb-5" :style="{ background: feature.bg }">
              <v-icon :icon="feature.icon" :color="feature.color" size="26" />
            </div>
            <h3 class="text-h6 font-weight-bold mb-2" style="letter-spacing: -0.01em">{{ feature.title }}</h3>
            <p class="text-body-2 text-muted-custom" style="line-height: 1.7">{{ feature.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
const features = [
  {
    icon: 'mdi-handshake',
    color: '#047857',
    bg: '#f0fdf4',
    title: 'Создание сделок',
    description: 'Оформите сделку за минуту: товар, условия, клиент. Даже если клиент не на платформе.',
  },
  {
    icon: 'mdi-calendar-check',
    color: '#0f766e',
    bg: '#f0fdfa',
    title: 'График платежей',
    description: 'Автоматический расчёт равных или убывающих платежей с учётом первоначального взноса.',
  },
  {
    icon: 'mdi-message-text-clock',
    color: '#7c3aed',
    bg: '#f5f3ff',
    title: 'Напоминания',
    description: 'Отправляйте напоминания клиентам через WhatsApp одной кнопкой с готовым текстом.',
  },
  {
    icon: 'mdi-chart-line',
    color: '#2563eb',
    bg: '#eff6ff',
    title: 'Аналитика',
    description: 'Выручка, прибыль, ROI — всё на одном дашборде. Контролируйте портфель.',
  },
  {
    icon: 'mdi-store',
    color: '#d97706',
    bg: '#fffbeb',
    title: 'Каталог товаров',
    description: 'Публикуйте товары — клиенты сами отправляют заявки на рассрочку.',
  },
  {
    icon: 'mdi-cellphone',
    color: '#059669',
    bg: '#ecfdf5',
    title: 'Мобильное приложение',
    description: 'Управляйте сделками с телефона. Создавайте, отслеживайте, получайте уведомления.',
  },
]
</script>