<template>
  <section id="features" class="section-padding">
    <v-container>
      <div class="text-center mb-14 animate-fade-in-up">
        <div class="section-chip mb-4">Возможности</div>
        <h2 class="section-title mb-3">
          Всё для <span class="text-gradient">удобной рассрочки</span>
        </h2>
        <p class="section-subtitle">
          Прозрачная платформа, где покупатели и рассрочкадатели находят друг друга
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
    icon: 'mdi-percent-circle-outline',
    color: '#047857',
    bg: '#f0fdf4',
    title: '0% — без процентов',
    description: 'Фиксированная наценка (мурабаха) вместо переменного процента. Вы знаете итоговую сумму с первого дня.',
  },
  {
    icon: 'mdi-shield-check-outline',
    color: '#0f766e',
    bg: '#f0fdfa',
    title: 'Безопасные сделки',
    description: 'Система рейтингов, верификация участников и прозрачная история платежей.',
  },
  {
    icon: 'mdi-calculator-variant-outline',
    color: '#7c3aed',
    bg: '#f5f3ff',
    title: 'Умный калькулятор',
    description: '4 режима расчёта: базовый, расширенный, обратный и портфельный — для точного планирования.',
  },
  {
    icon: 'mdi-cellphone-check',
    color: '#2563eb',
    bg: '#eff6ff',
    title: 'Мобильное приложение',
    description: 'Управляйте сделками, платежами и заявками прямо с телефона. iOS и Android.',
  },
  {
    icon: 'mdi-bell-ring-outline',
    color: '#d97706',
    bg: '#fffbeb',
    title: 'Уведомления',
    description: 'Push-уведомления о платежах, новых заявках и изменениях статуса сделок.',
  },
  {
    icon: 'mdi-chart-line',
    color: '#059669',
    bg: '#ecfdf5',
    title: 'Аналитика',
    description: 'Dashboard с KPI: инвестировано, прибыль, ROI, ежемесячный доход — всё в одном месте.',
  },
]
</script>
