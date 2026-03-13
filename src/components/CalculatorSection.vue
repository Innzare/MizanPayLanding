<script lang="ts" setup>
import { ref, computed } from 'vue'

const price = ref(100000)
const markup = ref(15)
const term = ref(12)
const downPayment = ref(10000)

const totalPrice = computed(() => price.value + price.value * markup.value / 100)
const markupAmount = computed(() => price.value * markup.value / 100)
const remaining = computed(() => totalPrice.value - downPayment.value)
const monthly = computed(() => term.value > 0 ? Math.ceil(remaining.value / term.value) : 0)

function fmt(n: number) {
  return n.toLocaleString('ru-RU')
}
</script>

<template>
  <section id="calculator" class="section-padding">
    <v-container>
      <div class="text-center mb-14 animate-fade-in-up">
        <div class="section-chip mb-4">Калькулятор</div>
        <h2 class="section-title mb-3">
          Рассчитайте <span class="text-gradient">рассрочку</span>
        </h2>
        <p class="section-subtitle">
          Узнайте размер ежемесячного платежа прямо сейчас
        </p>
      </div>

      <v-row justify="center">
        <v-col cols="12" lg="10">
          <v-card class="calc-card pa-6 pa-md-10" variant="flat">
            <v-row>
              <v-col cols="12" md="7">
                <div class="calc-inputs">
                  <div class="calc-field">
                    <div class="d-flex justify-space-between align-center mb-2">
                      <span class="calc-label">Стоимость товара</span>
                      <span class="calc-value-label">{{ fmt(price) }} &#8381;</span>
                    </div>
                    <v-slider
                      v-model="price"
                      :min="10000"
                      :max="500000"
                      :step="5000"
                      color="primary"
                      track-color="grey-lighten-3"
                      hide-details
                      thumb-size="20"
                    />
                  </div>

                  <div class="calc-field">
                    <div class="d-flex justify-space-between align-center mb-2">
                      <span class="calc-label">Наценка</span>
                      <span class="calc-value-label">{{ markup }}%</span>
                    </div>
                    <v-slider
                      v-model="markup"
                      :min="5"
                      :max="30"
                      :step="1"
                      color="primary"
                      track-color="grey-lighten-3"
                      hide-details
                      thumb-size="20"
                    />
                  </div>

                  <div class="calc-field">
                    <div class="d-flex justify-space-between align-center mb-2">
                      <span class="calc-label">Срок</span>
                      <span class="calc-value-label">{{ term }} мес.</span>
                    </div>
                    <v-slider
                      v-model="term"
                      :min="1"
                      :max="36"
                      :step="1"
                      color="primary"
                      track-color="grey-lighten-3"
                      hide-details
                      thumb-size="20"
                    />
                  </div>

                  <div class="calc-field">
                    <div class="d-flex justify-space-between align-center mb-2">
                      <span class="calc-label">Первоначальный взнос</span>
                      <span class="calc-value-label">{{ fmt(downPayment) }} &#8381;</span>
                    </div>
                    <v-slider
                      v-model="downPayment"
                      :min="0"
                      :max="price"
                      :step="5000"
                      color="primary"
                      track-color="grey-lighten-3"
                      hide-details
                      thumb-size="20"
                    />
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="5">
                <div class="calc-results">
                  <div class="result-main mb-6">
                    <div class="result-main-label">Ежемесячный платёж</div>
                    <div class="result-main-value">{{ fmt(monthly) }} <span>&#8381;</span></div>
                  </div>

                  <div class="result-row">
                    <span class="result-label">Итоговая стоимость</span>
                    <span class="result-value">{{ fmt(totalPrice) }} &#8381;</span>
                  </div>
                  <div class="result-row">
                    <span class="result-label">Наценка</span>
                    <span class="result-value">{{ fmt(markupAmount) }} &#8381;</span>
                  </div>
                  <div class="result-row">
                    <span class="result-label">Остаток к оплате</span>
                    <span class="result-value">{{ fmt(remaining) }} &#8381;</span>
                  </div>
                  <div class="result-row">
                    <span class="result-label">Первоначальный взнос</span>
                    <span class="result-value">{{ fmt(downPayment) }} &#8381;</span>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.calc-card {
  background: #ffffff;
  border: 1px solid #d1e7db;
  overflow: hidden;
}

.calc-inputs {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.calc-field {
  /* field styling */
}

.calc-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #5f7a6b;
}

.calc-value-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: #1a2e23;
}

.calc-results {
  background: #f0fdf4;
  border-radius: 20px;
  padding: 28px 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.result-main {
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #d1e7db;
}

.result-main-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: #5f7a6b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.result-main-value {
  font-size: 2.25rem;
  font-weight: 800;
  color: #047857;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.result-main-value span {
  font-size: 1.5rem;
  font-weight: 600;
}

.result-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(209, 231, 219, 0.5);
}

.result-row:last-child {
  border-bottom: none;
}

.result-label {
  font-size: 0.8rem;
  color: #5f7a6b;
}

.result-value {
  font-size: 0.875rem;
  font-weight: 700;
  color: #1a2e23;
}
</style>
