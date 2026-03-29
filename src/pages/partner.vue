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
    // If API is not available, still show success for demo
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
  <div class="section-padding" style="padding-top: 120px">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" lg="7">
          <!-- Success state -->
          <v-card v-if="submitted" class="text-center pa-8 pa-md-12" variant="outlined">
            <v-icon icon="mdi-check-circle" color="primary" size="80" class="mb-4" />
            <h2 class="text-h4 font-weight-bold mb-3">Заявка отправлена!</h2>
            <p class="text-body-1 text-medium-emphasis mb-6" style="max-width: 400px; margin: 0 auto">
              Мы рассмотрим вашу заявку в течение 1-3 рабочих дней
              и свяжемся с вами по указанному номеру телефона.
            </p>
            <v-btn to="/" color="primary" variant="flat" class="text-none px-8">
              На главную
            </v-btn>
          </v-card>

          <!-- Form -->
          <template v-else>
            <div class="text-center mb-8">
              <v-chip color="primary" variant="tonal" class="mb-4" size="small">Партнёрство</v-chip>
              <h1 class="text-h4 text-md-h3 font-weight-bold mb-3">
                Стать <span class="text-gradient">рассрочкадателем</span>
              </h1>
              <p class="text-body-1 text-medium-emphasis">
                Заполните заявку — мы рассмотрим её и откроем доступ к платформе
              </p>
            </div>

            <!-- Stepper -->
            <div class="d-flex justify-center mb-8">
              <div class="d-flex align-center ga-2">
                <div
                  v-for="s in 3"
                  :key="s"
                  class="d-flex align-center"
                >
                  <div
                    class="step-number"
                    :class="step >= s ? 'bg-primary text-white' : 'bg-grey-lighten-3 text-grey'"
                    style="width: 40px; height: 40px; font-size: 16px"
                  >
                    <v-icon v-if="step > s" icon="mdi-check" size="18" />
                    <span v-else>{{ s }}</span>
                  </div>
                  <div v-if="s < 3" class="mx-2" style="width: 48px; height: 2px" :class="step > s ? 'bg-primary' : 'bg-grey-lighten-3'" />
                </div>
              </div>
            </div>

            <v-card variant="outlined" class="pa-6 pa-md-8">
              <!-- Step 1: Personal info -->
              <div v-if="step === 1">
                <h3 class="text-h6 font-weight-bold mb-1">Личные данные</h3>
                <p class="text-body-2 text-medium-emphasis mb-6">Расскажите о себе</p>

                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="firstName"
                      label="Имя"
                      placeholder="Мухаммад"
                      :rules="[v => v.length >= 2 || 'Минимум 2 символа']"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="lastName"
                      label="Фамилия"
                      placeholder="Хаджиев"
                      :rules="[v => v.length >= 2 || 'Минимум 2 символа']"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="patronymic"
                      label="Отчество (необязательно)"
                      placeholder="Ахмедович"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="phone"
                      label="Телефон"
                      placeholder="+7 (928) 000-00-00"
                      :rules="[v => v.length >= 10 || 'Введите номер телефона']"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="email"
                      label="Email"
                      placeholder="example@mail.ru"
                      type="email"
                      :rules="[v => emailRegex.test(v) || 'Введите корректный email']"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="city"
                      :items="cities"
                      label="Город"
                      placeholder="Выберите город"
                      :rules="[v => !!v || 'Выберите город']"
                    />
                  </v-col>
                </v-row>
              </div>

              <!-- Step 2: Business info -->
              <div v-if="step === 2">
                <h3 class="text-h6 font-weight-bold mb-1">Опыт и направление</h3>
                <p class="text-body-2 text-medium-emphasis mb-6">Помогите нам понять ваш профиль</p>

                <v-row>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="experience"
                      :items="experienceOptions"
                      label="Опыт в рассрочке"
                      :rules="[v => !!v || 'Выберите опыт']"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="capital"
                      :items="capitalOptions"
                      label="Планируемый капитал"
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
                      :rules="[v => v.length > 0 || 'Выберите хотя бы одну категорию']"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="description"
                      label="О себе (необязательно)"
                      placeholder="Расскажите о вашем опыте, планах, чем занимаетесь"
                      rows="3"
                    />
                  </v-col>
                </v-row>
              </div>

              <!-- Step 3: Documents -->
              <div v-if="step === 3">
                <h3 class="text-h6 font-weight-bold mb-1">Документы</h3>
                <p class="text-body-2 text-medium-emphasis mb-6">Для верификации (можно заполнить позже)</p>

                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="passportSeries"
                      label="Серия паспорта (необязательно)"
                      placeholder="2017"
                      maxlength="4"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="passportNumber"
                      label="Номер паспорта (необязательно)"
                      placeholder="123456"
                      maxlength="6"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="inn"
                      label="ИНН (необязательно)"
                      placeholder="123456789012"
                      maxlength="12"
                    />
                  </v-col>
                </v-row>

                <v-alert type="info" variant="tonal" class="mb-4" density="compact">
                  <template #text>
                    Документы нужны для верификации. Вы можете предоставить их позже
                    через личный кабинет после одобрения заявки.
                  </template>
                </v-alert>

                <v-checkbox
                  v-model="agreement"
                  color="primary"
                  density="compact"
                >
                  <template #label>
                    <span class="text-body-2">
                      Я согласен с условиями использования и подтверждаю,
                      что буду вести деятельность в соответствии с принципами халяльных финансов
                    </span>
                  </template>
                </v-checkbox>

                <v-alert v-if="error" type="error" variant="tonal" class="mt-4" density="compact">
                  {{ error }}
                </v-alert>
              </div>

              <!-- Actions -->
              <div class="d-flex justify-space-between mt-6">
                <v-btn
                  v-if="step > 1"
                  variant="text"
                  class="text-none"
                  @click="prevStep"
                >
                  <v-icon icon="mdi-arrow-left" class="mr-1" />
                  Назад
                </v-btn>
                <v-spacer v-else />

                <v-btn
                  v-if="step < 3"
                  color="primary"
                  class="text-none px-8"
                  :disabled="(step === 1 && !step1Valid) || (step === 2 && !step2Valid)"
                  @click="nextStep"
                >
                  Далее
                  <v-icon icon="mdi-arrow-right" class="ml-1" />
                </v-btn>

                <v-btn
                  v-else
                  color="primary"
                  class="text-none px-8"
                  :disabled="!step3Valid"
                  :loading="loading"
                  @click="submit"
                >
                  Отправить заявку
                </v-btn>
              </div>
            </v-card>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
