<template>
  <section id="cta" class="section-padding">
    <v-container>
      <div class="cta-card">
        <div class="cta-glow cta-glow--1" />
        <div class="cta-glow cta-glow--2" />

        <v-row align="center" class="position-relative" style="z-index: 1">
          <v-col cols="12" md="7">
            <div class="cta-content">
              <h2 class="cta-title mb-4">
                Начните зарабатывать на рассрочке
              </h2>
              <p class="cta-subtitle mb-8">
                Зарегистрируйтесь как инвестор и получите полный контроль
                над вашими сделками
              </p>

              <div class="d-flex flex-column flex-sm-row ga-3">
                <v-btn
                  to="/partner"
                  size="x-large"
                  color="white"
                  class="text-none px-8"
                  style="color: #047857"
                  rounded="pill"
                >
                  Стать партнёром
                  <v-icon icon="mdi-arrow-right" class="ml-2" />
                </v-btn>
                <v-btn
                  size="x-large"
                  variant="outlined"
                  color="white"
                  class="text-none px-8"
                  rounded="pill"
                >
                  Посмотреть демо
                </v-btn>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="5" class="d-none d-md-flex justify-center">
            <div class="cta-phone animate-float">
              <div class="cta-phone-frame">
                <div class="cta-phone-notch" />
                <img
                  :src="mobileWorkArea"
                  alt="MizanPay — мобильное приложение"
                  class="cta-phone-screen"
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import mobileWorkArea from '@/assets/images/mobile-work-area.PNG'
</script>

<style scoped>
.cta-card {
  position: relative;
  background: linear-gradient(135deg, #047857 0%, #065f46 50%, #064e3b 100%);
  border-radius: 24px;
  padding: 64px 32px;
  overflow: hidden;
}

@media (min-width: 960px) {
  .cta-card {
    padding: 64px 48px;
  }
}

.cta-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.cta-glow--1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -50px;
  background: rgba(52, 211, 153, 0.2);
}

.cta-glow--2 {
  width: 250px;
  height: 250px;
  bottom: -80px;
  left: -40px;
  background: rgba(16, 185, 129, 0.15);
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

@media (min-width: 960px) {
  .cta-title {
    font-size: 2.5rem;
  }
}

.cta-subtitle {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  line-height: 1.6;
}

/* Phone mockup */
.cta-phone {
  width: 220px;
}

.cta-phone-frame {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 8px;
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  position: relative;
  overflow: hidden;
}

.cta-phone-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 22px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0 0 12px 12px;
  z-index: 2;
}

.cta-phone-screen {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 26px;
}
</style>