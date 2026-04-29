<template>
  <section id="zakat" class="section-padding zakat-section">
    <v-container>
      <div class="text-center mb-12 animate-fade-in-up">
        <div class="section-chip section-chip--islam mb-4">
          <v-icon icon="mdi-mosque" size="14" class="me-1" />
          Закят
        </div>
        <h2 class="section-title mb-3">
          Расчёт закята <span class="text-gradient">прямо в системе</span>
        </h2>
        <p class="section-subtitle">
          Mizan помогает выполнять обязанность ислама — рассчитывает закят с учётом вашего капитала,
          активных сделок и дебиторской задолженности
        </p>
      </div>

      <v-row class="mb-10">
        <v-col cols="12" md="6" class="animate-fade-in-up">
          <div class="zakat-feature">
            <div class="zakat-feature-num">1</div>
            <div>
              <h3 class="zakat-feature-title">Автоматический расчёт</h3>
              <p class="zakat-feature-text">
                Система видит ваш капитал, активные продажи и ожидаемые поступления — облагаемая база
                считается мгновенно. Дополните данные о золоте, серебре и наличных — получите точную сумму закята.
              </p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="animate-fade-in-up delay-1">
          <div class="zakat-feature">
            <div class="zakat-feature-num">2</div>
            <div>
              <h3 class="zakat-feature-title">Календарь хаула</h3>
              <p class="zakat-feature-text">
                Укажите дату начала исламского лунного года — система напомнит за 30, 7 и 1 день
                до даты выплаты. Вы не пропустите свой день закята.
              </p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="animate-fade-in-up delay-2">
          <div class="zakat-feature">
            <div class="zakat-feature-num">3</div>
            <div>
              <h3 class="zakat-feature-title">Учёт по шариату</h3>
              <p class="zakat-feature-text">
                Нисаб по золоту (85 г) или серебру (595 г). Ставка 2.5%. 8 категорий получателей
                по аяту 60 суры «Ат-Тауба». Всё по канону.
              </p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="animate-fade-in-up delay-3">
          <div class="zakat-feature">
            <div class="zakat-feature-num">4</div>
            <div>
              <h3 class="zakat-feature-title">История выплат</h3>
              <p class="zakat-feature-text">
                Все выплаты сохраняются с датой, суммой, категорией получателя и приложенным чеком.
                В любой момент посмотрите свою историю помощи нуждающимся.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Calculator preview card -->
      <v-card class="zakat-preview pa-0 hover-lift" variant="flat">
        <div class="zakat-preview-grid">
          <div class="zakat-preview-text">
            <div class="zakat-preview-eyebrow">Уникальная фишка для исламского бизнеса</div>
            <h3 class="zakat-preview-title">Не нужно считать вручную или искать сторонний калькулятор</h3>
            <p class="zakat-preview-desc">
              Mizan — единственная CRM в России, которая считает закят на основе ваших реальных бизнес-данных.
              Помогаем мусульманам-предпринимателям выполнять обязанности перед Всевышним.
            </p>
            <ul class="zakat-preview-bullets">
              <li><v-icon icon="mdi-check-circle" size="16" />Автоматическая интеграция с вашим капиталом</li>
              <li><v-icon icon="mdi-check-circle" size="16" />Учёт дебиторской задолженности (долгов клиентов)</li>
              <li><v-icon icon="mdi-check-circle" size="16" />Напоминания о приближении хаула</li>
              <li><v-icon icon="mdi-check-circle" size="16" />История выплат за все годы</li>
            </ul>
          </div>
          <div class="zakat-preview-visual">
            <div class="zakat-card-mock">
              <div class="zakat-card-mock-header">
                <v-icon icon="mdi-hand-coin-outline" size="22" />
                <span>Сумма закята</span>
              </div>
              <div class="zakat-card-mock-amount">14 250 ₽</div>
              <div class="zakat-card-mock-rows">
                <div class="zakat-card-mock-row">
                  <span>Облагаемая база</span><strong>570 000 ₽</strong>
                </div>
                <div class="zakat-card-mock-row">
                  <span>Нисаб</span><strong>637 500 ₽</strong>
                </div>
                <div class="zakat-card-mock-row">
                  <span>Ставка</span><strong>2.5%</strong>
                </div>
              </div>
              <div class="zakat-card-mock-footer">
                <v-icon icon="mdi-calendar-clock" size="14" />
                До дня закята: 47 дней
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-container>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.zakat-section {
  background: linear-gradient(180deg, transparent 0%, rgba(4, 120, 87, 0.02) 50%, transparent 100%);
}

.section-chip--islam {
  background: rgba(4, 120, 87, 0.10) !important;
  color: rgb(4, 120, 87) !important;
}

/* Features */
.zakat-feature {
  display: flex;
  gap: 18px;
  padding: 24px;
  border-radius: 16px;
  background: white;
  border: 1px solid rgba(4, 120, 87, 0.08);
  transition: border-color 0.2s, transform 0.2s;
  height: 100%;
}
.zakat-feature:hover {
  border-color: rgba(4, 120, 87, 0.25);
  transform: translateY(-2px);
}
.zakat-feature-num {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(4, 120, 87, 0.10);
  color: rgb(4, 120, 87);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.zakat-feature-title {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #111;
  letter-spacing: -0.01em;
}
.zakat-feature-text {
  font-size: 14px;
  line-height: 1.6;
  color: #6b7280;
  margin: 0;
}

/* Preview */
.zakat-preview {
  border-radius: 24px !important;
  overflow: hidden;
  border: 1px solid rgba(4, 120, 87, 0.15) !important;
  background: linear-gradient(135deg, #ffffff 0%, rgba(4, 120, 87, 0.04) 100%) !important;
}
.zakat-preview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
}
@media (max-width: 960px) {
  .zakat-preview-grid { grid-template-columns: 1fr; }
}
.zakat-preview-text { padding: 40px 36px; }
.zakat-preview-eyebrow {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgb(4, 120, 87);
  margin-bottom: 14px;
}
.zakat-preview-title {
  font-size: 26px;
  font-weight: 800;
  line-height: 1.25;
  color: #111;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
}
.zakat-preview-desc {
  font-size: 15px;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 20px;
}
.zakat-preview-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.zakat-preview-bullets li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #374151;
}
.zakat-preview-bullets li :deep(.v-icon) { color: rgb(4, 120, 87); flex-shrink: 0; }

.zakat-preview-visual {
  background: linear-gradient(135deg, rgba(4, 120, 87, 0.08), rgba(4, 120, 87, 0.02));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.zakat-card-mock {
  width: 100%;
  max-width: 320px;
  background: linear-gradient(135deg, rgb(4, 120, 87), rgb(6, 95, 70));
  border-radius: 18px;
  color: white;
  overflow: hidden;
  box-shadow: 0 20px 40px -10px rgba(4, 120, 87, 0.4);
}
.zakat-card-mock-header {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.zakat-card-mock-amount {
  padding: 24px 20px 16px;
  font-size: 32px;
  font-weight: 800;
  line-height: 1;
}
.zakat-card-mock-rows { padding: 0 20px 16px; }
.zakat-card-mock-row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 6px 0;
  opacity: 0.92;
}
.zakat-card-mock-footer {
  padding: 12px 20px;
  background: rgba(0, 0, 0, 0.18);
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
