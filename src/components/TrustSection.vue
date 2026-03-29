<template>
  <section id="trust" class="section-padding">
    <v-container>
      <div class="text-center mb-14 animate-fade-in-up">
        <div class="section-chip mb-4">Доверие</div>
        <h2 class="section-title mb-3">
          Почему <span class="text-gradient">MizanPay</span>
        </h2>
      </div>

      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          sm="6"
          md="3"
          class="animate-fade-in-up"
          :class="`delay-${i + 1}`"
        >
          <div class="trust-card text-center hover-lift">
            <div class="trust-icon mx-auto mb-4" :style="{ background: item.bg }">
              <v-icon :icon="item.icon" :color="item.color" size="26" />
            </div>
            <h3 class="text-subtitle-1 font-weight-bold mb-2">{{ item.title }}</h3>
            <p class="text-body-2 text-muted-custom" style="line-height: 1.6">{{ item.text }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
const items = [
  {
    icon: 'mdi-book-open-page-variant-outline',
    color: '#047857',
    bg: '#f0fdf4',
    title: 'Шариат-соответствие',
    text: 'Мурабаха — один из дозволенных видов торговли. Без рибы, без гарара.',
  },
  {
    icon: 'mdi-lock-outline',
    color: '#2563eb',
    bg: '#eff6ff',
    title: 'Защита данных',
    text: 'Шифрование данных, безопасные платежи, верификация участников.',
  },
  {
    icon: 'mdi-account-group-outline',
    color: '#7c3aed',
    bg: '#f5f3ff',
    title: 'Проверенные партнёры',
    text: 'Каждый инвестор проходит модерацию и верификацию документов.',
  },
  {
    icon: 'mdi-headphones',
    color: '#d97706',
    bg: '#fffbeb',
    title: 'Поддержка 24/7',
    text: 'Команда поддержки поможет решить любой вопрос по сделке.',
  },
]
</script>

<style scoped>
.trust-card {
  padding: 32px 24px;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #e2efe8;
  height: 100%;
  transition: all 0.3s ease;
}

.trust-card:hover {
  border-color: rgba(4, 120, 87, 0.2);
}

.trust-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
