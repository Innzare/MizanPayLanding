<template>
  <div class="legal-page">
    <div class="page-bg" />
    <v-container style="position: relative; z-index: 1">
      <v-row justify="center" style="padding-top: 100px; padding-bottom: 60px">
        <v-col cols="12" md="10" lg="8">

          <div class="text-center mb-10">
            <div class="section-chip mb-5">
              <v-icon icon="mdi-headset" size="14" class="mr-1" color="primary" />
              Помощь
            </div>
            <h1 class="page-title mb-4">Служба поддержки</h1>
            <p class="page-subtitle">Мы всегда на связи и готовы помочь</p>
          </div>

          <!-- Contact cards -->
          <v-row class="mb-8">
            <v-col v-for="c in contacts" :key="c.title" cols="12" sm="4">
              <div class="contact-card">
                <div class="contact-icon">
                  <v-icon :icon="c.icon" size="22" color="primary" />
                </div>
                <h3 class="contact-title">{{ c.title }}</h3>
                <p class="contact-value">{{ c.value }}</p>
                <p class="contact-hint">{{ c.hint }}</p>
              </div>
            </v-col>
          </v-row>

          <!-- FAQ -->
          <div class="content-card">
            <h2 class="section-title mb-6">Частые вопросы</h2>

            <v-expansion-panels variant="accordion">
              <v-expansion-panel
                v-for="(faq, i) in faqs"
                :key="i"
                class="faq-panel"
                rounded="lg"
              >
                <v-expansion-panel-title class="faq-title">
                  {{ faq.q }}
                </v-expansion-panel-title>
                <v-expansion-panel-text class="faq-text">
                  {{ faq.a }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

          <!-- Contact form -->
          <div class="content-card mt-6">
            <h2 class="section-title mb-2">Написать нам</h2>
            <p class="section-desc mb-6">Опишите проблему — мы ответим в течение 24 часов</p>

            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="name"
                  label="Ваше имя"
                  variant="outlined"
                  density="comfortable"
                  rounded="lg"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  density="comfortable"
                  rounded="lg"
                  prepend-inner-icon="mdi-email-outline"
                />
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="topic"
                  :items="topics"
                  label="Тема обращения"
                  variant="outlined"
                  density="comfortable"
                  rounded="lg"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="message"
                  label="Сообщение"
                  placeholder="Опишите вашу проблему или вопрос..."
                  variant="outlined"
                  density="comfortable"
                  rounded="lg"
                  rows="4"
                />
              </v-col>
            </v-row>

            <div class="d-flex justify-end mt-2">
              <v-btn
                color="primary"
                variant="flat"
                class="text-none px-8"
                rounded="lg"
                size="large"
                :disabled="!name || !email || !message"
                @click="submitted = true"
              >
                Отправить
                <v-icon icon="mdi-send" size="18" class="ml-2" />
              </v-btn>
            </div>

            <v-alert
              v-if="submitted"
              type="success"
              variant="tonal"
              class="mt-4"
              rounded="lg"
              density="compact"
            >
              Сообщение отправлено! Мы ответим на ваш email в ближайшее время.
            </v-alert>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const topic = ref('')
const message = ref('')
const submitted = ref(false)

const topics = [
  'Проблема с оплатой',
  'Вопрос по сделке',
  'Верификация аккаунта',
  'Стать инвестором',
  'Техническая проблема',
  'Другое',
]

const contacts = [
  {
    icon: 'mdi-email-outline',
    title: 'Email',
    value: 'support@mizan-pay.ru',
    hint: 'Ответим в течение 24 часов',
  },
  {
    icon: 'mdi-phone-outline',
    title: 'Телефон',
    value: '+7 (928) 000-00-00',
    hint: 'Пн-Пт, 9:00 - 18:00',
  },
  {
    icon: 'mdi-send',
    title: 'Telegram',
    value: '@mizanpay_support',
    hint: 'Быстрые ответы',
  },
]

const faqs = [
  {
    q: 'Что такое мурабаха?',
    a: 'Мурабаха — это вид исламского финансирования, при котором продавец покупает товар и перепродаёт его покупателю с заранее оговоренной наценкой в рассрочку. Это не кредит и не процентный займ.',
  },
  {
    q: 'Чем MizanPay отличается от обычной рассрочки?',
    a: 'В обычной рассрочке банк выдаёт деньги под проценты. В MizanPay инвестор сам покупает товар и продаёт вам с фиксированной наценкой. Цена фиксируется на весь срок — никаких скрытых комиссий и штрафов.',
  },
  {
    q: 'Как стать инвестором?',
    a: 'Заполните заявку на странице «Стать инвестором». Мы рассмотрим её в течение 1-3 рабочих дней, проверим документы и откроем доступ к платформе.',
  },
  {
    q: 'Какие товары можно купить в рассрочку?',
    a: 'Электроника, бытовая техника, мебель, автомобили, одежда, стройматериалы, медицинские услуги, образование и многое другое. Категории постоянно расширяются.',
  },
  {
    q: 'Что будет, если я не смогу платить вовремя?',
    a: 'Мы рекомендуем связаться с инвестором через платформу. В большинстве случаев можно договориться о пересмотре графика. MizanPay не начисляет штрафы и пени.',
  },
  {
    q: 'Безопасно ли пользоваться платформой?',
    a: 'Да. Все инвесторы проходят верификацию. Сделки оформляются договором. Данные защищены шифрованием. Мы работаем в соответствии с законодательством РФ.',
  },
]
</script>

<style scoped>
.legal-page {
  position: relative;
  overflow: hidden;
  background: #fafdfb;
  min-height: 100vh;
}

.page-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 0%, rgba(4, 120, 87, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 100%, rgba(15, 118, 110, 0.04) 0%, transparent 40%);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: #0c1a12;
}

.page-subtitle {
  font-size: 1.05rem;
  color: #5f7a6b;
}

.section-chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 100px;
  background: #e8f5ee;
  color: #047857;
  font-size: 13px;
  font-weight: 600;
}

/* Contact cards */
.contact-card {
  background: white;
  border: 1px solid #e2efe8;
  border-radius: 14px;
  padding: 28px 24px;
  text-align: center;
  height: 100%;
  transition: border-color 0.2s;
}

.contact-card:hover {
  border-color: rgba(4, 120, 87, 0.25);
}

.contact-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #e8f5ee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.contact-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #0c1a12;
  margin-bottom: 6px;
}

.contact-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: #047857;
  margin-bottom: 4px;
}

.contact-hint {
  font-size: 0.8rem;
  color: #94a3b8;
}

/* Content card */
.content-card {
  background: white;
  border: 1px solid #e2efe8;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 32px rgba(4, 120, 87, 0.04);
}

@media (min-width: 960px) {
  .content-card {
    padding: 40px;
  }
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0c1a12;
}

.section-desc {
  font-size: 0.9rem;
  color: #5f7a6b;
}

/* FAQ */
.faq-panel {
  border: 1px solid #e2efe8 !important;
  margin-bottom: 8px;
  box-shadow: none !important;
}

.faq-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #0c1a12;
}

.faq-text {
  font-size: 0.9rem;
  color: #5f7a6b;
  line-height: 1.7;
}
</style>