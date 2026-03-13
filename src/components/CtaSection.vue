<template>
  <section id="cta" class="section-padding">
    <v-container>
      <div class="cta-card">
        <div class="cta-glow cta-glow--1" />
        <div class="cta-glow cta-glow--2" />

        <div class="cta-content">
          <h2 class="cta-title mb-4">
            Готовы начать?
          </h2>
          <p class="cta-subtitle mb-8">
            Скачайте приложение и оформите первую рассрочку
            без процентов уже сегодня
          </p>

          <div class="d-flex flex-column flex-sm-row justify-center ga-3">
            <v-btn
              size="x-large"
              color="white"
              class="text-none px-8"
              style="color: #047857"
              rounded="pill"
            >
              <v-icon icon="mdi-apple" class="mr-2" />
              App Store
            </v-btn>
            <v-btn
              size="x-large"
              color="white"
              class="text-none px-8"
              style="color: #047857"
              rounded="pill"
            >
              <v-icon icon="mdi-google-play" class="mr-2" />
              Google Play
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

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
    padding: 80px 48px;
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
  text-align: center;
}

.cta-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

@media (min-width: 960px) {
  .cta-title {
    font-size: 2.75rem;
  }
}

.cta-subtitle {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}
</style>
