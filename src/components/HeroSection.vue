<template>
  <section id="hero" class="hero-section">
    <div class="hero-bg" />
    <div class="hero-glow hero-glow--1" />
    <div class="hero-glow hero-glow--2" />
    <div class="hero-glow hero-glow--3" />

    <v-container class="position-relative" style="z-index: 1">
      <v-row align="center" style="min-height: 85vh; padding-top: 80px">
        <v-col cols="12" md="6" class="animate-fade-in-up">
          <div class="section-chip mb-5">
            <v-icon icon="mdi-star-four-points" size="14" class="mr-1" color="primary" />
            Платформа для инвесторов
          </div>

          <h1 class="hero-title mb-5">
            Управляйте рассрочкой.
            <span class="text-gradient">Зарабатывайте халяльно.</span>
          </h1>

          <p class="hero-subtitle mb-8">
            MizanPay — платформа для инвесторов, которые продают товары в рассрочку
            по принципу мурабахи. Учёт сделок, графики платежей, напоминания — всё в одном месте.
          </p>

          <div class="d-flex flex-column flex-sm-row ga-3 mb-6">
            <v-btn
              to="/partner"
              color="primary"
              size="x-large"
              class="text-none px-8"
              rounded="pill"
            >
              Стать партнёром
              <v-icon icon="mdi-arrow-right" class="ml-2" />
            </v-btn>
            <v-btn
              href="#how-it-works"
              variant="outlined"
              color="primary"
              size="x-large"
              class="text-none px-8"
              rounded="pill"
            >
              Как это работает
            </v-btn>
          </div>

          <!-- Store links -->
          <div class="hero-store-links mb-12">
            <a href="#" class="store-badge">
              <v-icon icon="mdi-apple" size="22" />
              <div>
                <div class="store-badge-label">Загрузить в</div>
                <div class="store-badge-name">App Store</div>
              </div>
            </a>
            <a href="#" class="store-badge">
              <v-icon icon="mdi-google-play" size="22" />
              <div>
                <div class="store-badge-label">Доступно в</div>
                <div class="store-badge-name">Google Play</div>
              </div>
            </a>
            <a href="https://partner.mizan-pay.ru" target="_blank" class="store-badge">
              <v-icon icon="mdi-monitor" size="22" />
              <div>
                <div class="store-badge-label">Личный кабинет</div>
                <div class="store-badge-name">Веб-версия</div>
              </div>
            </a>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="animate-fade-in-up delay-3">
          <div class="mockup-group">
            <!-- Desktop -->
            <div class="desktop-mockup">
              <div class="desktop-frame">
                <div class="desktop-toolbar">
                  <div class="desktop-dots">
                    <span /><span /><span />
                  </div>
                </div>
                <img
                  :src="desktopMockup"
                  alt="MizanPay — личный кабинет"
                  class="desktop-screen-img"
                />
              </div>
            </div>
            <!-- Mobile overlay -->
            <div class="mobile-mockup animate-float">
              <div class="phone-frame">
                <div class="phone-notch" />
                <img
                  :src="mobileDashboard"
                  alt="MizanPay — мобильное приложение"
                  class="phone-screen-img"
                />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Stat strip -->
      <div class="stat-strip animate-fade-in-up delay-5">
        <div v-for="stat in stats" :key="stat.label" class="stat-strip-item">
          <div class="stat-strip-icon">
            <v-icon :icon="stat.icon" color="primary" size="22" />
          </div>
          <div class="stat-strip-text">{{ stat.label }}</div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import mobileDashboard from '@/assets/images/mobile-dashboard.PNG'
import desktopMockup from '@/assets/images/mockup-descktop.png'

const stats = [
  { label: '0% процентов', icon: 'mdi-shield-check-outline' },
  { label: 'Автоматический учёт', icon: 'mdi-chart-box-outline' },
  { label: 'Напоминания клиентам', icon: 'mdi-bell-ring-outline' },
  { label: 'Мобильное приложение', icon: 'mdi-cellphone' },
]
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  background: #fafdfb;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 70% 20%, rgba(4, 120, 87, 0.07) 0%, transparent 55%),
    radial-gradient(ellipse at 20% 80%, rgba(15, 118, 110, 0.04) 0%, transparent 45%);
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}

.hero-glow--1 {
  width: 500px;
  height: 500px;
  top: -100px;
  right: 10%;
  background: rgba(16, 185, 129, 0.14);
}

.hero-glow--2 {
  width: 400px;
  height: 400px;
  bottom: -50px;
  left: -100px;
  background: rgba(15, 118, 110, 0.08);
}

.hero-glow--3 {
  width: 300px;
  height: 300px;
  top: 40%;
  right: -80px;
  background: rgba(52, 211, 153, 0.1);
}

.hero-title {
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: #0c1a12;
}

@media (min-width: 960px) {
  .hero-title {
    font-size: 3.25rem;
  }
}

.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #5f7a6b;
  max-width: 500px;
}

/* Store links */
.hero-store-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.store-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: 12px;
  background: #0c1a12;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s;
}

.store-badge:hover {
  background: #1a2e23;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.store-badge-label {
  font-size: 10px;
  opacity: 0.7;
  line-height: 1;
}

.store-badge-name {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
}

/* Mockup group */
.mockup-group {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Desktop mockup */
.desktop-mockup {
  width: 100%;
  max-width: 480px;
}

.desktop-frame {
  background: #0f172a;
  border-radius: 14px;
  overflow: hidden;
  box-shadow:
    0 32px 64px rgba(0, 0, 0, 0.18),
    0 12px 32px rgba(4, 120, 87, 0.08);
}

.desktop-toolbar {
  height: 32px;
  background: #1e293b;
  display: flex;
  align-items: center;
  padding: 0 12px;
}

.desktop-dots {
  display: flex;
  gap: 6px;
}

.desktop-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #334155;
}

.desktop-dots span:first-child { background: #ef4444; }
.desktop-dots span:nth-child(2) { background: #f59e0b; }
.desktop-dots span:last-child { background: #22c55e; }

.desktop-screen-img {
  display: block;
  width: 100%;
  height: auto;
}

/* Mobile overlay */
.mobile-mockup {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 160px;
  z-index: 2;
}

@media (min-width: 960px) {
  .mobile-mockup {
    width: 180px;
    bottom: -30px;
    right: -30px;
  }
}

.phone-frame {
  background: #0f172a;
  border-radius: 28px;
  padding: 8px;
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.25),
    0 8px 24px rgba(4, 120, 87, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.06) inset;
  position: relative;
  overflow: hidden;
}

.phone-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 20px;
  background: #0f172a;
  border-radius: 0 0 12px 12px;
  z-index: 2;
}

.phone-screen-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 22px;
}

/* Stat strip */
.stat-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  padding: 32px 0 0;
  margin-top: 16px;
}

@media (min-width: 960px) {
  .stat-strip {
    justify-content: space-between;
    gap: 16px;
  }
}

.stat-strip-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  background: #ffffff;
  border: 1px solid #e2efe8;
  border-radius: 14px;
  flex: 1 1 200px;
  min-width: 200px;
  max-width: 280px;
  transition: all 0.3s ease;
}

.stat-strip-item:hover {
  border-color: rgba(4, 120, 87, 0.25);
  box-shadow: 0 4px 16px rgba(4, 120, 87, 0.06);
}

.stat-strip-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 10px;
  background: #f0fdf4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-strip-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a2e23;
}
</style>