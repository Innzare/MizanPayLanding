<template>
  <section id="pricing" class="section-padding">
    <v-container>
      <div class="text-center mb-12 animate-fade-in-up">
        <div class="section-chip mb-4">Тарифы</div>
        <h2 class="section-title mb-3">
          Выберите <span class="text-gradient">свой план</span>
        </h2>
        <p class="section-subtitle">
          Первый месяц — бесплатно на любом тарифе. Без скрытых условий.
        </p>
      </div>

      <!-- Period toggle -->
      <div class="text-center mb-12 animate-fade-in-up delay-1">
        <div class="period-toggle">
          <button class="period-btn" :class="{ active: period === 'monthly' }" @click="period = 'monthly'">
            Ежемесячно
          </button>
          <button class="period-btn" :class="{ active: period === 'yearly' }" @click="period = 'yearly'">
            Ежегодно
            <span class="period-save">−20%</span>
          </button>
        </div>
      </div>

      <!-- Cards grid -->
      <div class="pricing-grid">
        <div
          v-for="(plan, i) in plans"
          :key="plan.name"
          class="pricing-card animate-fade-in-up"
          :class="{
            'pricing-card--popular': plan.popular,
            'pricing-card--premium': plan.tier === 'premium',
          }"
          :style="`--delay: ${(i + 2) * 0.1}s`"
        >
          <!-- Popular ribbon -->
          <div v-if="plan.popular" class="popular-ribbon">
            <v-icon icon="mdi-star" size="12" /> Популярный
          </div>

          <!-- Icon + Name -->
          <div class="pc-header">
            <div class="pc-icon" :style="{ background: plan.iconBg }">
              <v-icon :icon="plan.icon" :color="plan.iconColor" size="22" />
            </div>
            <div>
              <h3 class="pc-name">{{ plan.name }}</h3>
              <p class="pc-desc">{{ plan.desc }}</p>
            </div>
          </div>

          <!-- Price -->
          <div class="pc-price">
            <template v-if="plan.monthlyPrice === 0">
              <span class="pc-price-value">0 ₽</span>
              <span class="pc-price-label">навсегда</span>
            </template>
            <template v-else>
              <span class="pc-price-value">{{ formatPrice(plan.monthlyPrice, plan.yearlyPrice) }} ₽</span>
              <span class="pc-price-label">/ мес</span>
              <div v-if="period === 'yearly'" class="pc-price-annual">
                {{ formatYearlyTotal(plan.yearlyPrice) }} ₽ / год · <span class="pc-price-saving">экономия {{ formatSaving(plan.monthlyPrice, plan.yearlyPrice) }} ₽</span>
              </div>
            </template>
          </div>

          <!-- Deals + response price -->
          <div class="pc-badges">
            <div class="pc-deals" :class="{ 'pc-deals--accent': plan.popular || plan.tier === 'premium' }">
              <v-icon icon="mdi-briefcase-check-outline" size="16" />
              {{ plan.deals }}
            </div>
            <div class="pc-response">
              <v-icon icon="mdi-hand-wave-outline" size="16" />
              {{ plan.responsePrice }}
            </div>
          </div>

          <!-- Trial badge -->
          <div v-if="plan.monthlyPrice > 0" class="pc-trial">
            <v-icon icon="mdi-gift-outline" size="15" />
            Первый месяц бесплатно
          </div>

          <!-- Divider -->
          <div class="pc-divider" />

          <!-- Features -->
          <ul class="pc-features">
            <li v-for="f in plan.features" :key="f.text" :class="{ 'pc-feature--disabled': !f.included }">
              <v-icon
                :icon="f.included ? 'mdi-check-circle' : 'mdi-minus-circle-outline'"
                size="17"
                :color="f.included ? (plan.popular ? '#047857' : '#10b981') : '#d1d5db'"
              />
              <span>{{ f.text }}</span>
            </li>
          </ul>

          <!-- CTA -->
          <div class="pc-cta">
            <v-btn
              to="/partner"
              :color="plan.popular ? 'primary' : plan.tier === 'premium' ? '#d97706' : undefined"
              :variant="plan.popular || plan.tier === 'premium' ? 'flat' : 'outlined'"
              size="large"
              block
              class="text-none pc-btn"
              rounded="pill"
            >
              {{ plan.monthlyPrice === 0 ? 'Начать бесплатно' : 'Попробовать бесплатно' }}
            </v-btn>
          </div>
        </div>
      </div>

      <!-- Footer note -->
      <div class="text-center mt-10 animate-fade-in-up delay-6">
        <p class="pricing-note">
          <v-icon icon="mdi-shield-check-outline" size="16" class="mr-1" />
          Все тарифы включают техподдержку и обновления. Отменить подписку можно в любой момент.
        </p>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const period = ref<'monthly' | 'yearly'>('monthly')

function formatPrice(monthly: number, yearly: number) {
  const val = period.value === 'yearly' ? yearly : monthly
  return val.toLocaleString('ru-RU')
}

function formatYearlyTotal(yearly: number) {
  return (yearly * 12).toLocaleString('ru-RU')
}

function formatSaving(monthly: number, yearly: number) {
  return ((monthly - yearly) * 12).toLocaleString('ru-RU')
}

interface Feature {
  text: string
  included: boolean
}

const plans: {
  name: string; desc: string; icon: string; iconColor: string; iconBg: string
  monthlyPrice: number; yearlyPrice: number; popular: boolean; tier: string
  deals: string; responsePrice: string; features: Feature[]
}[] = [
  {
    name: 'Без подписки',
    desc: 'Для старта',
    icon: 'mdi-gift-outline',
    iconColor: '#6b7280',
    iconBg: '#f3f4f6',
    monthlyPrice: 0,
    yearlyPrice: 0,
    popular: false,
    tier: 'free',
    deals: 'До 3 активных сделок',
    responsePrice: '500 ₽ / отклик',
    features: [
      { text: 'Учёт сделок и платежей', included: true },
      { text: 'Клиентская база', included: true },
      { text: 'Каталог товаров', included: true },
      { text: 'Калькулятор рассрочки', included: true },
      { text: 'Push-уведомления', included: true },
      { text: 'Аналитика и отчёты', included: false },
      { text: 'PDF-договора', included: false },
      { text: 'Экспорт данных', included: false },
    ],
  },
  {
    name: 'Стандарт',
    desc: 'Для предпринимателей',
    icon: 'mdi-star-outline',
    iconColor: '#047857',
    iconBg: '#f0fdf4',
    monthlyPrice: 3900,
    yearlyPrice: 3100,
    popular: false,
    tier: 'pro',
    deals: 'До 15 активных сделок',
    responsePrice: '300 ₽ / отклик',
    features: [
      { text: 'Всё из бесплатного', included: true },
      { text: 'Аналитика — KPI', included: true },
      { text: 'PDF-договора и сводки', included: true },
      { text: 'Со-инвесторы, сотрудники', included: true },
      { text: 'Мой капитал, реестр', included: true },
      { text: 'История действий', included: true },
      { text: 'Графики и Excel', included: false },
      { text: 'WhatsApp-напоминания', included: false },
    ],
  },
  {
    name: 'Бизнес',
    desc: 'Для растущего бизнеса',
    icon: 'mdi-rocket-launch-outline',
    iconColor: '#2563eb',
    iconBg: '#eff6ff',
    monthlyPrice: 7900,
    yearlyPrice: 6300,
    popular: true,
    tier: 'business',
    deals: 'До 50 активных сделок',
    responsePrice: '100 ₽ / отклик',
    features: [
      { text: 'Все функции Стандарта', included: true },
      { text: 'Полная аналитика + графики', included: true },
      { text: 'Экспорт PDF / Excel', included: true },
      { text: 'Импорт из Excel', included: true },
      { text: 'WhatsApp-напоминания', included: true },
      { text: 'Календарь платежей', included: true },
    ],
  },
  {
    name: 'Премиум',
    desc: 'Без ограничений',
    icon: 'mdi-crown-outline',
    iconColor: '#d97706',
    iconBg: '#fffbeb',
    monthlyPrice: 11900,
    yearlyPrice: 9500,
    popular: false,
    tier: 'premium',
    deals: 'Безлимит активных сделок',
    responsePrice: 'Бесплатный отклик',
    features: [
      { text: 'Все функции Бизнеса', included: true },
      { text: 'Безлимит по сделкам', included: true },
      { text: 'Бесплатный отклик на заявки', included: true },
    ],
  },
]
</script>

<style scoped>
/* ── Period toggle ── */
.period-toggle {
  display: inline-flex;
  background: #fff;
  border: 1px solid #e2efe8;
  border-radius: 100px;
  padding: 5px;
  gap: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.period-btn {
  padding: 10px 28px;
  border-radius: 100px;
  border: none;
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.period-btn.active {
  background: #047857;
  color: #fff;
  box-shadow: 0 4px 12px rgba(4, 120, 87, 0.3);
}

.period-save {
  padding: 2px 10px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  background: #fef3c7;
  color: #b45309;
}

.period-btn.active .period-save {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

/* ── Grid ── */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: stretch;
}

/* ── Card ── */
.pricing-card {
  background: #fff;
  border: 1px solid #e2efe8;
  border-radius: 20px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.35s ease;
  animation-delay: var(--delay);
  opacity: 0;
}

.pricing-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(4, 120, 87, 0.1);
  border-color: rgba(4, 120, 87, 0.15);
}

.pricing-card--popular {
  border: 2px solid #047857;
  box-shadow: 0 8px 40px rgba(4, 120, 87, 0.12);
  z-index: 1;
}

.pricing-card--popular:hover {
  box-shadow: 0 20px 56px rgba(4, 120, 87, 0.18);
}

.pricing-card--premium {
  background: linear-gradient(180deg, #fffdf7 0%, #fff 50%);
  border-color: rgba(217, 119, 6, 0.2);
}

.pricing-card--premium:hover {
  border-color: rgba(217, 119, 6, 0.35);
  box-shadow: 0 16px 48px rgba(217, 119, 6, 0.1);
}

/* ── Popular ribbon ── */
.popular-ribbon {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #047857, #059669);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 18px;
  border-radius: 100px;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0 4px 12px rgba(4, 120, 87, 0.3);
}

/* ── Header ── */
.pc-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
}

.pc-icon {
  width: 46px;
  height: 46px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pc-name {
  font-size: 18px;
  font-weight: 800;
  color: #1a2e23;
  margin: 0;
  line-height: 1.2;
}

.pc-desc {
  font-size: 13px;
  color: #9ca3af;
  margin: 2px 0 0;
  line-height: 1.3;
}

/* ── Price ── */
.pc-price {
  margin-bottom: 16px;
}

.pc-price-value {
  font-size: 30px;
  font-weight: 800;
  color: #1a2e23;
  letter-spacing: -0.5px;
}

.pc-price-label {
  font-size: 14px;
  color: #9ca3af;
  font-weight: 500;
  margin-left: 2px;
}

.pc-price-annual {
  font-size: 12px;
  color: #b0b8c1;
  margin-top: 2px;
}

.pc-price-saving {
  color: #047857;
  font-weight: 600;
}

/* ── Badges row ── */
.pc-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.pc-deals {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  border-radius: 8px;
  background: #f4f5f7;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
}

.pc-response {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  background: #f4f5f7;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
}

.pc-deals--accent {
  background: #f0fdf4;
  color: #047857;
}

.pricing-card--premium .pc-deals--accent {
  background: #fffbeb;
  color: #b45309;
}

/* ── Trial badge ── */
.pc-trial {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  background: #fffbeb;
  color: #b45309;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 16px;
  width: fit-content;
}

/* ── Divider ── */
.pc-divider {
  height: 1px;
  background: #f0f0f0;
  margin-bottom: 16px;
}

/* ── Features ── */
.pc-features {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

.pc-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
  font-size: 13.5px;
  color: #374151;
  line-height: 1.4;
}

.pc-feature--disabled {
  opacity: 0.4;
}

.pc-feature--disabled span {
  text-decoration: line-through;
}

/* ── CTA ── */
.pc-cta {
  margin-top: auto;
  padding-top: 24px;
}

.pc-btn {
  font-weight: 700 !important;
  letter-spacing: 0.01em;
}

/* ── Footer note ── */
.pricing-note {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  color: #9ca3af;
}

/* ── Responsive ── */
@media (max-width: 1280px) {
  .pricing-grid {
    gap: 16px;
  }
  .pricing-card {
    padding: 24px 20px;
  }
}

@media (max-width: 960px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .pricing-card--popular {
    order: -1;
  }
}

@media (max-width: 600px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
    gap: 16px;
  }
  .period-btn {
    padding: 8px 20px;
    font-size: 13px;
  }
}
</style>
