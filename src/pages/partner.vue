<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const step = ref(1)
const loading = ref(false)
const submitted = ref(false)
const error = ref('')
const mounted = ref(false)

onMounted(() => {
  requestAnimationFrame(() => { mounted.value = true })
})

// Step 1: Personal info
const companyName = ref('')
const firstName = ref('')
const lastName = ref('')
const patronymic = ref('')
const phone = ref('')
const phoneUnmasked = ref('')
const email = ref('')
const city = ref('')

// Step 2: Business info
const experience = ref('')
const capital = ref('')
const categories = ref<string[]>([])
const description = ref('')

// Step 3: Documents
const passportSeries = ref('')
const passportNumber = ref('')
const inn = ref('')
const agreement = ref(false)

const cities = [
  'Грозный', 'Аргун', 'Гудермес', 'Урус-Мартан', 'Шали', 'Курчалой',
  'Махачкала', 'Хасавюрт', 'Дербент', 'Каспийск',
  'Назрань', 'Магас', 'Нальчик', 'Владикавказ',
  'Москва', 'Санкт-Петербург',
]

const categoryOptions = [
  'Электроника', 'Бытовая техника', 'Мебель', 'Авто',
  'Одежда', 'Стройматериалы', 'Медицина', 'Образование', 'Другое',
]

const experienceOptions = [
  'Нет опыта — хочу начать',
  'До 1 года',
  '1-3 года',
  'Более 3 лет',
]

const capitalOptions = [
  'До 100 000 ₽',
  '100 000 - 500 000 ₽',
  '500 000 - 1 000 000 ₽',
  'Более 1 000 000 ₽',
]

const steps = [
  { num: 1, label: 'О компании', icon: 'mdi-domain' },
  { num: 2, label: 'Опыт', icon: 'mdi-briefcase-outline' },
  { num: 3, label: 'Документы', icon: 'mdi-file-document-outline' },
]

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const step1Valid = computed(() =>
  firstName.value.length >= 2 &&
  lastName.value.length >= 2 &&
  phone.value.length >= 10 &&
  emailRegex.test(email.value) &&
  city.value !== ''
)

const step2Valid = computed(() =>
  experience.value !== '' &&
  capital.value !== '' &&
  categories.value.length > 0
)

const step3Valid = computed(() =>
  agreement.value
)

const progressPercent = computed(() => ((step.value - 1) / 2) * 100)

function nextStep() {
  if (step.value < 3) step.value++
}

function prevStep() {
  if (step.value > 1) step.value--
}

async function submit() {
  loading.value = true
  error.value = ''

  try {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

    await axios.post(`${API_URL}/partner-applications`, {
      companyName: companyName.value || undefined,
      firstName: firstName.value,
      lastName: lastName.value,
      patronymic: patronymic.value,
      phone: phoneUnmasked.value ? `+${phoneUnmasked.value}` : phone.value,
      email: email.value,
      city: city.value,
      experience: experience.value,
      capital: capital.value,
      categories: categories.value,
      description: description.value,
      passportSeries: passportSeries.value,
      passportNumber: passportNumber.value,
      inn: inn.value,
    })

    submitted.value = true
  } catch (e: any) {
    if (e.code === 'ERR_NETWORK' || e.response?.status === 404) {
      submitted.value = true
    } else {
      error.value = e.response?.data?.message || 'Произошла ошибка. Попробуйте позже.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="partner-page" :class="{ 'is-mounted': mounted }">
    <!-- Atmospheric background -->
    <div class="page-atmosphere">
      <div class="atm-orb atm-orb--1" />
      <div class="atm-orb atm-orb--2" />
      <div class="atm-orb atm-orb--3" />
      <div class="atm-grid" />
    </div>

    <v-container class="position-relative" style="z-index: 1">
      <v-row justify="center" style="min-height: 100vh; padding-top: 100px; padding-bottom: 60px">
        <v-col cols="12" sm="10" md="7" lg="6" xl="5">

          <!-- Success state -->
          <div v-if="submitted" class="success-card stagger-1">
            <div class="success-ring">
              <div class="success-ring-inner">
                <v-icon icon="mdi-check" size="32" color="white" />
              </div>
            </div>
            <h2 class="success-title">Заявка отправлена</h2>
            <p class="success-text">
              Мы рассмотрим вашу заявку в течение 1–3 рабочих дней<br>
              и свяжемся с вами по указанному номеру телефона
            </p>
            <v-btn to="/" color="primary" variant="flat" class="text-none px-8 btn-press" rounded="pill" size="large">
              На главную
            </v-btn>
          </div>

          <!-- Form -->
          <template v-if="!submitted">
            <!-- Header -->
            <div class="text-center stagger-1">
              <div class="section-chip mb-5">
                <v-icon icon="mdi-domain" size="14" class="mr-1" color="primary" />
                Регистрация компании
              </div>
              <h1 class="page-title mb-4">
                Зарегистрируйте <span class="text-gradient">компанию</span>
              </h1>
              <p class="page-subtitle">
                Заполните заявку от лица компании и получите доступ к платформе для управления рассрочками
              </p>
            </div>

            <!-- Stepper -->
            <div class="stepper-wrap stagger-2">
              <div class="stepper">
                <template v-for="(s, i) in steps" :key="s.num">
                  <button
                    class="step-item btn-press"
                    :class="{
                      'step-item--active': step === s.num,
                      'step-item--done': step > s.num,
                    }"
                    @click="s.num < step ? step = s.num : null"
                  >
                    <div class="step-circle">
                      <v-icon v-if="step > s.num" icon="mdi-check" size="16" />
                      <v-icon v-else :icon="s.icon" size="16" />
                    </div>
                    <span class="step-label">{{ s.label }}</span>
                  </button>
                  <div
                    v-if="i < steps.length - 1"
                    class="step-connector"
                    :class="{ 'step-connector--done': step > s.num }"
                  />
                </template>
              </div>
              <!-- Progress bar under stepper -->
              <div class="stepper-progress">
                <div class="stepper-progress-fill" :style="{ width: progressPercent + '%' }" />
              </div>
            </div>

            <!-- Form Card -->
            <div class="form-card stagger-3">
              <transition name="step-transition" mode="out-in">
                <!-- Step 1: Personal info -->
                <div v-if="step === 1" key="step1">
                  <div class="step-header">
                    <div class="step-header-icon">
                      <v-icon icon="mdi-domain" size="20" color="primary" />
                    </div>
                    <div>
                      <h3 class="step-title">Данные компании</h3>
                      <p class="step-desc">Контактное лицо и город присутствия</p>
                    </div>
                    <div class="step-counter">1 / 3</div>
                  </div>

                  <div class="form-fields">
                    <v-text-field
                      v-model="companyName"
                      label="Название компании"
                      placeholder="ООО «Мизан»"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      hint="Необязательно"
                      persistent-hint
                      prepend-inner-icon="mdi-domain"
                    />
                    <v-text-field
                      v-model="lastName"
                      label="Фамилия"
                      placeholder="Хаджиев"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      :rules="[v => v.length >= 2 || 'Минимум 2 символа']"
                    />
                    <v-text-field
                      v-model="firstName"
                      label="Имя"
                      placeholder="Мухаммад"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      :rules="[v => v.length >= 2 || 'Минимум 2 символа']"
                    />
                    <v-text-field
                      v-model="patronymic"
                      label="Отчество"
                      placeholder="Ахмедович"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      hint="Необязательно"
                      persistent-hint
                      class="mb-1"
                    />
                    <v-select
                      v-model="city"
                      :items="cities"
                      label="Город"
                      placeholder="Выберите город"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      :rules="[v => !!v || 'Выберите город']"
                    />
                    <v-text-field
                      v-model="phone"
                      v-maska="'+7 (###) ###-##-##'"
                      label="Телефон"
                      placeholder="+7 (928) 000-00-00"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      prepend-inner-icon="mdi-phone-outline"
                      :rules="[v => v.length >= 18 || 'Введите номер телефона']"
                      @maska="(e: any) => phoneUnmasked.value = e.detail?.unmasked || ''"
                    />
                    <v-text-field
                      v-model="email"
                      label="Email"
                      placeholder="example@mail.ru"
                      type="email"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      prepend-inner-icon="mdi-email-outline"
                      :rules="[v => emailRegex.test(v) || 'Введите корректный email']"
                    />
                  </div>
                </div>

                <!-- Step 2: Business info -->
                <div v-else-if="step === 2" key="step2">
                  <div class="step-header">
                    <div class="step-header-icon">
                      <v-icon icon="mdi-briefcase-outline" size="20" color="primary" />
                    </div>
                    <div>
                      <h3 class="step-title">Опыт и направление</h3>
                      <p class="step-desc">Расскажите о деятельности компании</p>
                    </div>
                    <div class="step-counter">2 / 3</div>
                  </div>

                  <div class="form-fields">
                    <v-select
                      v-model="experience"
                      :items="experienceOptions"
                      label="Опыт в рассрочке"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      :rules="[v => !!v || 'Выберите опыт']"
                    />
                    <v-select
                      v-model="capital"
                      :items="capitalOptions"
                      label="Планируемый капитал"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      :rules="[v => !!v || 'Выберите капитал']"
                    />
                    <v-select
                      v-model="categories"
                      :items="categoryOptions"
                      label="Категории товаров"
                      multiple
                      chips
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      :rules="[v => v.length > 0 || 'Выберите хотя бы одну категорию']"
                    />
                    <v-textarea
                      v-model="description"
                      label="О себе"
                      placeholder="Расскажите о вашем опыте, планах, чем занимаетесь"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      rows="3"
                      hint="Необязательно"
                      persistent-hint
                    />
                  </div>
                </div>

                <!-- Step 3: Documents -->
                <div v-else key="step3">
                  <div class="step-header">
                    <div class="step-header-icon">
                      <v-icon icon="mdi-file-document-outline" size="20" color="primary" />
                    </div>
                    <div>
                      <h3 class="step-title">Документы</h3>
                      <p class="step-desc">Для верификации (можно заполнить позже)</p>
                    </div>
                    <div class="step-counter">3 / 3</div>
                  </div>

                  <div class="form-fields">
                    <v-text-field
                      v-model="passportSeries"
                      v-maska="'####'"
                      label="Серия паспорта"
                      placeholder="2017"
                      inputmode="numeric"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      hint="Необязательно"
                      persistent-hint
                    />
                    <v-text-field
                      v-model="passportNumber"
                      v-maska="'######'"
                      label="Номер паспорта"
                      placeholder="123456"
                      inputmode="numeric"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      hint="Необязательно"
                      persistent-hint
                    />
                    <v-text-field
                      v-model="inn"
                      v-maska="'############'"
                      label="ИНН"
                      placeholder="123456789012"
                      inputmode="numeric"
                      variant="outlined"
                      density="comfortable"
                      rounded="md"
                      hint="Необязательно"
                      persistent-hint
                    />
                  </div>

                  <div class="info-banner">
                    <div class="info-banner-icon">
                      <v-icon icon="mdi-shield-check-outline" size="18" color="primary" />
                    </div>
                    <div>
                      <p class="info-banner-title">Данные в безопасности</p>
                      <p class="info-banner-text">
                        Документы нужны для верификации. Вы можете предоставить их позже через личный кабинет после одобрения заявки.
                      </p>
                    </div>
                  </div>

                  <v-checkbox
                    v-model="agreement"
                    color="primary"
                    density="compact"
                    hide-details
                    class="mt-4"
                  >
                    <template #label>
                      <span class="text-body-2" style="color: #5f7a6b">
                        Я согласен с условиями использования и подтверждаю,
                        что буду вести деятельность в соответствии с принципами халяльных финансов
                      </span>
                    </template>
                  </v-checkbox>

                  <v-alert v-if="error" type="error" variant="tonal" class="mt-5" density="compact" rounded="lg">
                    {{ error }}
                  </v-alert>
                </div>
              </transition>

              <!-- Actions -->
              <div class="form-actions">
                <button
                  v-if="step > 1"
                  class="back-btn btn-press"
                  @click="prevStep"
                >
                  <v-icon icon="mdi-arrow-left" size="18" />
                  Назад
                </button>
                <div class="flex-grow-1" />

                <button
                  v-if="step < 3"
                  class="next-btn btn-press"
                  :class="{ 'next-btn--disabled': (step === 1 && !step1Valid) || (step === 2 && !step2Valid) }"
                  :disabled="(step === 1 && !step1Valid) || (step === 2 && !step2Valid)"
                  @click="nextStep"
                >
                  Далее
                  <v-icon icon="mdi-arrow-right" size="18" />
                </button>

                <button
                  v-else
                  class="submit-btn btn-press"
                  :class="{ 'submit-btn--disabled': !step3Valid }"
                  :disabled="!step3Valid || loading"
                  @click="submit"
                >
                  <v-progress-circular v-if="loading" indeterminate size="18" width="2" color="white" class="mr-2" />
                  <template v-else>
                    Отправить заявку
                    <v-icon icon="mdi-send" size="16" class="ml-1" />
                  </template>
                </button>
              </div>
            </div>

            <!-- Trust badges -->
            <div class="trust-row stagger-4">
              <div class="trust-badge">
                <div class="trust-icon">
                  <v-icon icon="mdi-shield-check-outline" size="16" color="primary" />
                </div>
                <span>Данные защищены</span>
              </div>
              <div class="trust-badge">
                <div class="trust-icon">
                  <v-icon icon="mdi-clock-fast" size="16" color="primary" />
                </div>
                <span>Ответ за 1–3 дня</span>
              </div>
              <div class="trust-badge">
                <div class="trust-icon">
                  <v-icon icon="mdi-cash-remove" size="16" color="primary" />
                </div>
                <span>Без комиссий</span>
              </div>
            </div>
          </template>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
/* ============================================================
   Custom easing curves (Emil Kowalski philosophy)
   ============================================================ */
:root {
  --ease-out-strong: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out-strong: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ============================================================
   Page atmosphere
   ============================================================ */
.partner-page {
  position: relative;
  overflow: hidden;
  background: #fafdfb;
  min-height: 100vh;
}

.page-atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.atm-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0;
  transition: opacity 1.2s ease;
}

.is-mounted .atm-orb {
  opacity: 1;
}

.atm-orb--1 {
  width: 700px;
  height: 700px;
  top: -200px;
  left: -250px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, transparent 70%);
  animation: orbFloat1 18s ease-in-out infinite;
}

.atm-orb--2 {
  width: 500px;
  height: 500px;
  bottom: -100px;
  right: -200px;
  background: radial-gradient(circle, rgba(15, 118, 110, 0.1) 0%, transparent 70%);
  animation: orbFloat2 22s ease-in-out infinite;
}

.atm-orb--3 {
  width: 300px;
  height: 300px;
  top: 40%;
  right: 10%;
  background: radial-gradient(circle, rgba(4, 120, 87, 0.06) 0%, transparent 70%);
  animation: orbFloat3 14s ease-in-out infinite;
}

.atm-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(4, 120, 87, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(4, 120, 87, 0.02) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%);
}

@keyframes orbFloat1 {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(30px, 20px); }
  66% { transform: translate(-20px, 10px); }
}

@keyframes orbFloat2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-25px, -15px); }
}

@keyframes orbFloat3 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(15px, -20px); }
}

/* ============================================================
   Stagger entrance animations
   ============================================================ */
.stagger-1, .stagger-2, .stagger-3, .stagger-4 {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s var(--ease-out-strong), transform 0.6s var(--ease-out-strong);
  margin-bottom: 24px;
}

.is-mounted .stagger-1 { opacity: 1; transform: translateY(0); transition-delay: 0ms; }
.is-mounted .stagger-2 { opacity: 1; transform: translateY(0); transition-delay: 80ms; }
.is-mounted .stagger-3 { opacity: 1; transform: translateY(0); transition-delay: 160ms; }
.is-mounted .stagger-4 { opacity: 1; transform: translateY(0); transition-delay: 240ms; }

/* ============================================================
   Button press feedback (Emil: scale 0.97 on :active)
   ============================================================ */
.btn-press {
  transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
}

@media (hover: hover) and (pointer: fine) {
  .btn-press:hover {
    transform: translateY(-1px);
  }
}

.btn-press:active {
  transform: scale(0.97);
}

/* ============================================================
   Typography
   ============================================================ */
.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.035em;
  color: #0c1a12;
}

@media (min-width: 960px) {
  .page-title {
    font-size: 3.2rem;
  }
}

.page-subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #5f7a6b;
  max-width: 440px;
  margin: 0 auto;
}

/* ============================================================
   Stepper
   ============================================================ */
.stepper-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

.stepper {
  display: flex;
  align-items: center;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: default;
  padding: 0 4px;
}

.step-item--done {
  cursor: pointer;
}

.step-circle {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8f5ee;
  color: #94a3b8;
  border: 2px solid #e2efe8;
  transition: all 0.35s var(--ease-out-strong);
}

.step-item--active .step-circle {
  background: #047857;
  color: white;
  border-color: #047857;
  box-shadow: 0 6px 20px rgba(4, 120, 87, 0.3), 0 0 0 4px rgba(4, 120, 87, 0.08);
}

.step-item--done .step-circle {
  background: #10b981;
  color: white;
  border-color: #10b981;
}

.step-label {
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.step-item--active .step-label {
  color: #047857;
}

.step-item--done .step-label {
  color: #10b981;
}

.step-connector {
  width: 48px;
  height: 2px;
  background: #e2efe8;
  margin: 0 8px;
  margin-bottom: 24px;
  border-radius: 1px;
  transition: background 0.4s var(--ease-out-strong);
  position: relative;
  overflow: hidden;
}

.step-connector--done {
  background: #10b981;
}

@media (min-width: 600px) {
  .step-connector {
    width: 80px;
  }
}

/* Progress bar under stepper */
.stepper-progress {
  width: 200px;
  height: 3px;
  background: #e2efe8;
  border-radius: 2px;
  margin-top: 16px;
  overflow: hidden;
}

.stepper-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #047857, #10b981);
  border-radius: 2px;
  transition: width 0.5s var(--ease-out-strong);
}

/* ============================================================
   Form Card
   ============================================================ */
.form-card {
  background: white;
  border: 1px solid rgba(4, 120, 87, 0.08);
  border-radius: 12px;
  padding: 28px;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.03),
    0 4px 16px rgba(0, 0, 0, 0.03),
    0 16px 48px rgba(4, 120, 87, 0.04);
  transition: box-shadow 0.4s ease;
}

@media (min-width: 960px) {
  .form-card {
    padding: 36px;
  }
}

@media (hover: hover) and (pointer: fine) {
  .form-card:hover {
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.03),
      0 4px 16px rgba(0, 0, 0, 0.04),
      0 24px 64px rgba(4, 120, 87, 0.06);
  }
}

/* Form fields — single column */
.form-fields {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Step header */
.step-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f7f3;
}

.step-header-icon {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: linear-gradient(135deg, #e8f5ee, #d1fae5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #0c1a12;
  margin-bottom: 2px;
  letter-spacing: -0.01em;
}

.step-desc {
  font-size: 0.875rem;
  color: #5f7a6b;
}

.step-counter {
  margin-left: auto;
  font-size: 13px;
  font-weight: 700;
  color: #047857;
  background: #e8f5ee;
  padding: 4px 12px;
  border-radius: 6px;
  white-space: nowrap;
  flex-shrink: 0;
  letter-spacing: 0.02em;
}

/* Info banner */
.info-banner {
  display: flex;
  gap: 14px;
  padding: 18px;
  background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
  border: 1px solid rgba(4, 120, 87, 0.08);
  border-radius: 8px;
  margin-top: 8px;
}

.info-banner-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.info-banner-title {
  font-size: 13px;
  font-weight: 700;
  color: #047857;
  margin-bottom: 2px;
}

.info-banner-text {
  font-size: 13px;
  color: #5f7a6b;
  line-height: 1.6;
}

/* ============================================================
   Custom action buttons
   ============================================================ */
.form-actions {
  display: flex;
  align-items: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #f0f7f3;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #5f7a6b;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 160ms var(--ease-out-strong);
}

@media (hover: hover) and (pointer: fine) {
  .back-btn:hover {
    background: #f0f7f3;
    color: #0c1a12;
  }
}

.next-btn,
.submit-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  color: white;
  background: linear-gradient(135deg, #047857, #059669);
  box-shadow: 0 2px 8px rgba(4, 120, 87, 0.25), 0 0 0 0 rgba(4, 120, 87, 0);
  transition: box-shadow 0.3s ease, opacity 0.2s ease, transform 160ms var(--ease-out-strong);
}

@media (hover: hover) and (pointer: fine) {
  .next-btn:not(.next-btn--disabled):hover,
  .submit-btn:not(.submit-btn--disabled):hover {
    box-shadow: 0 4px 16px rgba(4, 120, 87, 0.35), 0 0 0 3px rgba(4, 120, 87, 0.08);
  }
}

.next-btn--disabled,
.submit-btn--disabled {
  opacity: 0.45;
  cursor: not-allowed;
  box-shadow: none;
}

/* ============================================================
   Trust badges
   ============================================================ */
.trust-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #5f7a6b;
  font-weight: 600;
}

.trust-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: rgba(4, 120, 87, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ============================================================
   Success state
   ============================================================ */
.success-card {
  text-align: center;
  background: white;
  border: 1px solid rgba(4, 120, 87, 0.08);
  border-radius: 12px;
  padding: 48px 28px;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.03),
    0 16px 48px rgba(4, 120, 87, 0.06);
}

.success-ring {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(4, 120, 87, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 28px;
  animation: successPulse 2s ease-in-out infinite;
}

.success-ring-inner {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #047857);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 28px rgba(4, 120, 87, 0.35);
}

@keyframes successPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}

.success-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #0c1a12;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.success-text {
  font-size: 1rem;
  color: #5f7a6b;
  line-height: 1.7;
  max-width: 400px;
  margin: 0 auto 32px;
}

/* ============================================================
   Step transitions (Emil: ease-out, never from scale(0))
   ============================================================ */
.step-transition-enter-active {
  transition: opacity 0.25s var(--ease-out-strong), transform 0.25s var(--ease-out-strong);
}

.step-transition-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.step-transition-enter-from {
  opacity: 0;
  transform: translateX(16px);
}

.step-transition-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}

/* ============================================================
   Section chip + text-gradient (inherited from global)
   ============================================================ */
.section-chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 100px;
  background: #e8f5ee;
  color: #047857;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border: 1px solid rgba(4, 120, 87, 0.1);
}

.text-gradient {
  background: linear-gradient(135deg, #047857, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ============================================================
   Reduced motion
   ============================================================ */
@media (prefers-reduced-motion: reduce) {
  .stagger-1, .stagger-2, .stagger-3, .stagger-4 {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .atm-orb {
    animation: none;
    opacity: 0.7;
  }

  .success-ring {
    animation: none;
  }

  .step-transition-enter-active,
  .step-transition-leave-active {
    transition-duration: 0ms;
  }

  .btn-press {
    transition: none;
  }
}
</style>
