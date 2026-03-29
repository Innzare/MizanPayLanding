<script lang="ts" setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const step = ref(1)
const loading = ref(false)
const submitted = ref(false)
const error = ref('')

// Step 1: Personal info
const firstName = ref('')
const lastName = ref('')
const patronymic = ref('')
const phone = ref('')
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
  { num: 1, label: 'Личные данные', icon: 'mdi-account-outline' },
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
      firstName: firstName.value,
      lastName: lastName.value,
      patronymic: patronymic.value,
      phone: phone.value,
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
  <div class="partner-page">
    <div class="page-bg" />
    <div class="page-glow page-glow--1" />
    <div class="page-glow page-glow--2" />

    <v-container class="position-relative" style="z-index: 1">
      <v-row justify="center" style="min-height: 100vh; padding-top: 100px; padding-bottom: 60px">
        <v-col cols="12" md="10" lg="8" xl="7">

          <!-- Success state -->
          <transition name="fade-up" mode="out-in">
            <div v-if="submitted" class="success-card">
              <div class="success-icon-wrap">
                <v-icon icon="mdi-check" size="36" color="white" />
              </div>
              <h2 class="text-h4 font-weight-bold mt-6 mb-3" style="color: #0c1a12">Заявка отправлена!</h2>
              <p class="text-body-1 mb-8" style="color: #5f7a6b; max-width: 420px; margin: 0 auto; line-height: 1.7">
                Мы рассмотрим вашу заявку в течение 1-3 рабочих дней и свяжемся с вами по указанному номеру телефона.
              </p>
              <v-btn to="/" color="primary" variant="flat" class="text-none px-8" rounded="pill" size="large">
                На главную
              </v-btn>
            </div>
          </transition>

          <!-- Form -->
          <template v-if="!submitted">
            <!-- Header -->
            <div class="text-center mb-10">
              <div class="section-chip mb-5">
                <v-icon icon="mdi-handshake-outline" size="14" class="mr-1" color="primary" />
                Партнёрство
              </div>
              <h1 class="page-title mb-4">
                Стать <span class="text-gradient">инвестором</span>
              </h1>
              <p class="page-subtitle">
                Заполните заявку и начните зарабатывать на халяльной рассрочке
              </p>
            </div>

            <!-- Stepper -->
            <div class="stepper-wrap mb-8">
              <div class="stepper">
                <template v-for="(s, i) in steps" :key="s.num">
                  <button
                    class="step-item"
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
            </div>

            <!-- Form Card -->
            <div class="form-card">
              <transition name="slide-fade" mode="out-in">
                <!-- Step 1: Personal info -->
                <div v-if="step === 1" key="step1">
                  <div class="step-header">
                    <div class="step-header-icon">
                      <v-icon icon="mdi-account-outline" size="20" color="primary" />
                    </div>
                    <div>
                      <h3 class="step-title">Личные данные</h3>
                      <p class="step-desc">Расскажите немного о себе</p>
                    </div>
                  </div>

                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="lastName"
                        label="Фамилия"
                        placeholder="Хаджиев"
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        :rules="[v => v.length >= 2 || 'Минимум 2 символа']"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="firstName"
                        label="Имя"
                        placeholder="Мухаммад"
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        :rules="[v => v.length >= 2 || 'Минимум 2 символа']"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="patronymic"
                        label="Отчество"
                        placeholder="Ахмедович"
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        hint="Необязательно"
                        persistent-hint
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        v-model="city"
                        :items="cities"
                        label="Город"
                        placeholder="Выберите город"
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        :rules="[v => !!v || 'Выберите город']"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="phone"
                        label="Телефон"
                        placeholder="+7 (928) 000-00-00"
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        prepend-inner-icon="mdi-phone-outline"
                        :rules="[v => v.length >= 10 || 'Введите номер телефона']"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="email"
                        label="Email"
                        placeholder="example@mail.ru"
                        type="email"
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        prepend-inner-icon="mdi-email-outline"
                        :rules="[v => emailRegex.test(v) || 'Введите корректный email']"
                      />
                    </v-col>
                  </v-row>
                </div>

                <!-- Step 2: Business info -->
                <div v-else-if="step === 2" key="step2">
                  <div class="step-header">
                    <div class="step-header-icon">
                      <v-icon icon="mdi-briefcase-outline" size="20" color="primary" />
                    </div>
                    <div>
                      <h3 class="step-title">Опыт и направление</h3>
                      <p class="step-desc">Помогите нам понять ваш профиль</p>
                    </div>
                  </div>

                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-select
                        v-model="experience"
                        :items="experienceOptions"
                        label="Опыт в рассрочке"
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        :rules="[v => !!v || 'Выберите опыт']"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        v-model="capital"
                        :items="capitalOptions"
                        label="Планируемый капитал"
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        :rules="[v => !!v || 'Выберите капитал']"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-select
                        v-model="categories"
                        :items="categoryOptions"
                        label="Категории товаров"
                        multiple
                        chips
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        :rules="[v => v.length > 0 || 'Выберите хотя бы одну категорию']"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        v-model="description"
                        label="О себе"
                        placeholder="Расскажите о вашем опыте, планах, чем занимаетесь"
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        rows="3"
                        hint="Необязательно"
                        persistent-hint
                      />
                    </v-col>
                  </v-row>
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
                  </div>

                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="passportSeries"
                        label="Серия паспорта"
                        placeholder="2017"
                        maxlength="4"
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        hint="Необязательно"
                        persistent-hint
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="passportNumber"
                        label="Номер паспорта"
                        placeholder="123456"
                        maxlength="6"
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        hint="Необязательно"
                        persistent-hint
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="inn"
                        label="ИНН"
                        placeholder="123456789012"
                        maxlength="12"
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        hint="Необязательно"
                        persistent-hint
                      />
                    </v-col>
                  </v-row>

                  <div class="info-banner">
                    <v-icon icon="mdi-information-outline" size="20" color="primary" class="flex-shrink-0 mt-1" />
                    <p class="text-body-2" style="color: #5f7a6b; line-height: 1.6">
                      Документы нужны для верификации. Вы можете предоставить их позже через личный кабинет после одобрения заявки.
                    </p>
                  </div>

                  <v-checkbox
                    v-model="agreement"
                    color="primary"
                    density="compact"
                    hide-details
                    class="mt-2"
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
                <v-btn
                  v-if="step > 1"
                  variant="text"
                  class="text-none"
                  color="default"
                  @click="prevStep"
                >
                  <v-icon icon="mdi-arrow-left" size="18" class="mr-1" />
                  Назад
                </v-btn>
                <v-spacer />

                <v-btn
                  v-if="step < 3"
                  color="primary"
                  variant="flat"
                  class="text-none px-8"
                  rounded="lg"
                  size="large"
                  :disabled="(step === 1 && !step1Valid) || (step === 2 && !step2Valid)"
                  @click="nextStep"
                >
                  Далее
                  <v-icon icon="mdi-arrow-right" size="18" class="ml-1" />
                </v-btn>

                <v-btn
                  v-else
                  color="primary"
                  variant="flat"
                  class="text-none px-8"
                  rounded="lg"
                  size="large"
                  :disabled="!step3Valid"
                  :loading="loading"
                  @click="submit"
                >
                  Отправить заявку
                  <v-icon icon="mdi-send" size="18" class="ml-2" />
                </v-btn>
              </div>
            </div>

            <!-- Trust badges -->
            <div class="trust-row">
              <div class="trust-badge">
                <v-icon icon="mdi-shield-check-outline" size="18" color="primary" />
                <span>Данные защищены</span>
              </div>
              <div class="trust-badge">
                <v-icon icon="mdi-clock-outline" size="18" color="primary" />
                <span>Ответ за 1-3 дня</span>
              </div>
              <div class="trust-badge">
                <v-icon icon="mdi-currency-rub" size="18" color="primary" />
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
.partner-page {
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

.page-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
  pointer-events: none;
}

.page-glow--1 {
  width: 600px;
  height: 600px;
  top: -150px;
  left: -200px;
  background: rgba(16, 185, 129, 0.15);
}

.page-glow--2 {
  width: 500px;
  height: 500px;
  bottom: -100px;
  right: -200px;
  background: rgba(15, 118, 110, 0.1);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: #0c1a12;
}

@media (min-width: 960px) {
  .page-title {
    font-size: 3rem;
  }
}

.page-subtitle {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #5f7a6b;
  max-width: 440px;
  margin: 0 auto;
}

/* Stepper */
.stepper-wrap {
  display: flex;
  justify-content: center;
}

.stepper {
  display: flex;
  align-items: center;
  gap: 0;
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
  transition: all 0.3s ease;
}

.step-item--done {
  cursor: pointer;
}

.step-circle {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8f5ee;
  color: #94a3b8;
  border: 2px solid #e2efe8;
  transition: all 0.3s ease;
}

.step-item--active .step-circle {
  background: #047857;
  color: white;
  border-color: #047857;
  box-shadow: 0 4px 16px rgba(4, 120, 87, 0.3);
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
  transition: background 0.3s ease;
}

.step-connector--done {
  background: #10b981;
}

@media (min-width: 600px) {
  .step-connector {
    width: 80px;
  }
}

/* Form Card */
.form-card {
  background: white;
  border: 1px solid #e2efe8;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 32px rgba(4, 120, 87, 0.04);
}

@media (min-width: 960px) {
  .form-card {
    padding: 40px;
  }
}

.step-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f7f3;
}

.step-header-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #e8f5ee;
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
}

.step-desc {
  font-size: 0.875rem;
  color: #5f7a6b;
}

/* Info banner */
.info-banner {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #f0f7f3;
  border-radius: 12px;
  margin-top: 4px;
}

/* Actions */
.form-actions {
  display: flex;
  align-items: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #f0f7f3;
}

/* Trust badges */
.trust-row {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #5f7a6b;
  font-weight: 500;
}

/* Success */
.success-card {
  text-align: center;
  background: white;
  border: 1px solid #e2efe8;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 32px rgba(4, 120, 87, 0.04);
}

.success-icon-wrap {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #047857);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 8px 24px rgba(4, 120, 87, 0.3);
}

/* Transitions */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-up-enter-active {
  transition: all 0.4s ease;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* Section chip (from global styles) */
.section-chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 100px;
  background: #e8f5ee;
  color: #047857;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.text-gradient {
  background: linear-gradient(135deg, #047857, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>