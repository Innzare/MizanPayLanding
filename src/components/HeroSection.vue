<template>
  <section id="hero" class="hero-section">
    <div class="hero-bg" />
    <div class="hero-glow hero-glow--1" />
    <div class="hero-glow hero-glow--2" />

    <v-container class="position-relative" style="z-index: 1">
      <v-row align="center" style="min-height: 85vh; padding-top: 80px">
        <v-col cols="12" md="5" class="animate-fade-in-up">
          <div class="section-chip mb-5">
            <v-icon icon="mdi-star-four-points" size="14" class="mr-1" color="primary" />
            Халяльная рассрочка
          </div>

          <h1 class="hero-title mb-5">
            Покупайте в рассрочку
            <span class="text-gradient">без процентов</span>
          </h1>

          <p class="hero-subtitle mb-8">
            MizanPay — маркетплейс исламской рассрочки по принципу мурабаха.
            Фиксированная цена, прозрачные условия, никаких скрытых комиссий.
          </p>

          <div class="d-flex flex-column flex-sm-row ga-3 mb-10">
            <v-btn
              color="primary"
              size="x-large"
              class="text-none px-8"
              rounded="pill"
              href="#how-it-works"
            >
              Как это работает
              <v-icon icon="mdi-arrow-right" class="ml-2" />
            </v-btn>
            <v-btn
              to="/partner"
              variant="outlined"
              color="primary"
              size="x-large"
              class="text-none px-8"
              rounded="pill"
            >
              Стать партнёром
            </v-btn>
          </div>

          <!-- Stats -->
          <div class="d-flex ga-8 ga-md-12 flex-wrap">
            <div v-for="stat in stats" :key="stat.label">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="text-body-2 text-muted-custom mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="7" class="animate-fade-in-up delay-3">
          <div class="mockups-container">
            <!-- Desktop mockup (back) -->
            <div class="desktop-mockup">
              <div class="desktop-frame">
                <div class="desktop-toolbar">
                  <span class="dot dot--red" />
                  <span class="dot dot--yellow" />
                  <span class="dot dot--green" />
                </div>
                <img
                  src="@/assets/images/mockup-descktop.png"
                  alt="MizanPay — веб-панель инвестора"
                  class="desktop-screen"
                />
              </div>
            </div>

            <!-- Mobile mockup (front) -->
            <div class="mobile-mockup animate-float">
              <div class="mobile-frame">
                <div class="mobile-notch" />
                <img
                  src="@/assets/images/mockup-mobile.jpg"
                  alt="MizanPay — мобильное приложение"
                  class="mobile-screen"
                />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
const stats = [
  { value: '0%', label: 'Процентов' },
  { value: '9', label: 'Категорий' },
  { value: '16', label: 'Городов' },
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
    radial-gradient(ellipse at 80% 0%, rgba(4, 120, 87, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 20% 100%, rgba(15, 118, 110, 0.03) 0%, transparent 40%);
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
  right: -100px;
  background: rgba(16, 185, 129, 0.12);
}

.hero-glow--2 {
  width: 400px;
  height: 400px;
  bottom: -50px;
  left: -100px;
  background: rgba(15, 118, 110, 0.08);
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #0c1a12;
}

@media (min-width: 960px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #5f7a6b;
  max-width: 480px;
}

/* Mockups */
.mockups-container {
  position: relative;
  width: 100%;
  min-height: 420px;
}

@media (min-width: 960px) {
  .mockups-container {
    min-height: 480px;
  }
}

/* Desktop */
.desktop-mockup {
  position: relative;
  z-index: 1;
}

.desktop-frame {
  background: #1e293b;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

.desktop-toolbar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: #0f172a;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot--red { background: #ef4444; }
.dot--yellow { background: #eab308; }
.dot--green { background: #22c55e; }

.desktop-screen {
  display: block;
  width: 100%;
  height: auto;
}

/* Mobile */
.mobile-mockup {
  position: absolute;
  bottom: -20px;
  right: -10px;
  z-index: 2;
  width: 180px;
}

@media (min-width: 960px) {
  .mobile-mockup {
    width: 210px;
    bottom: -30px;
    right: -20px;
  }
}

.mobile-frame {
  background: #0f172a;
  border-radius: 28px;
  padding: 8px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  position: relative;
  overflow: hidden;
}

.mobile-notch {
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

.mobile-screen {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 22px;
}
</style>
