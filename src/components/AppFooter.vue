<template>
  <footer class="app-footer">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div class="d-flex align-center mb-4">
            <v-icon icon="mdi-scale-balance" color="white" size="24" class="mr-2" />
            <span class="footer-logo">
              Mizan<span style="color: #34d399">Pay</span>
            </span>
          </div>
          <p class="footer-desc">
            Маркетплейс халяльной рассрочки. Покупайте товары в рассрочку
            по принципам исламских финансов — без процентов.
          </p>
        </v-col>

        <v-col cols="6" md="2">
          <div class="footer-heading">Навигация</div>
          <div class="d-flex flex-column ga-2">
            <a href="#features" class="footer-link">Возможности</a>
            <a href="#how-it-works" class="footer-link">Как работает</a>
            <a href="#calculator" class="footer-link">Калькулятор</a>
          </div>
        </v-col>

        <v-col cols="6" md="2">
          <div class="footer-heading">Партнёрам</div>
          <div class="d-flex flex-column ga-2">
            <router-link to="/partner" class="footer-link">Стать партнёром</router-link>
            <a href="#for-investors" class="footer-link">Преимущества</a>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="footer-heading">Контакты</div>
          <div class="d-flex flex-column ga-3">
            <div class="d-flex align-center ga-3">
              <v-icon icon="mdi-email-outline" size="16" style="color: #94a3b8" />
              <span class="footer-link-static">info@mizanpay.ru</span>
            </div>
            <div class="d-flex align-center ga-3">
              <v-icon icon="mdi-phone-outline" size="16" style="color: #94a3b8" />
              <span class="footer-link-static">+7 (928) 000-00-00</span>
            </div>
            <div class="d-flex align-center ga-3">
              <v-icon icon="mdi-map-marker-outline" size="16" style="color: #94a3b8" />
              <span class="footer-link-static">Грозный, Чеченская Республика</span>
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="footer-divider" />

      <div class="d-flex flex-column flex-sm-row justify-space-between align-center ga-3">
        <span class="footer-copy">&copy; {{ new Date().getFullYear() }} MizanPay. Все права защищены.</span>
        <div class="d-flex ga-1">
          <v-btn icon variant="text" size="small" class="footer-social">
            <v-icon icon="mdi-telegram" size="18" />
          </v-btn>
          <v-btn icon variant="text" size="small" class="footer-social">
            <v-icon icon="mdi-instagram" size="18" />
          </v-btn>
          <v-btn icon variant="text" size="small" class="footer-social">
            <v-icon icon="mdi-whatsapp" size="18" />
          </v-btn>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<style scoped>
.app-footer {
  background: linear-gradient(160deg, #0c1a12 0%, #0a2818 40%, #0c1a12 100%);
  padding: 64px 0 32px;
}

.footer-logo {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.footer-desc {
  font-size: 0.8rem;
  line-height: 1.7;
  color: #94a3b8;
  max-width: 300px;
}

.footer-heading {
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 12px;
}

.footer-link {
  font-size: 0.8rem;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #34d399;
}

.footer-link-static {
  font-size: 0.8rem;
  color: #94a3b8;
}

.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 40px 0 24px;
}

.footer-copy {
  font-size: 0.75rem;
  color: #64748b;
}

.footer-social {
  color: #94a3b8 !important;
  opacity: 0.8;
}

.footer-social:hover {
  color: #34d399 !important;
  opacity: 1;
}
</style>
