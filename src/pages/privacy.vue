<template>
  <div class="legal-page">
    <div class="page-bg" />
    <v-container style="position: relative; z-index: 1">
      <v-row justify="center" style="padding-top: 100px; padding-bottom: 60px">
        <v-col cols="12" md="10" lg="8">

          <div class="text-center mb-10">
            <div class="section-chip mb-5">
              <v-icon icon="mdi-shield-lock-outline" size="14" class="mr-1" color="primary" />
              Документ
            </div>
            <h1 class="page-title mb-4">Политика конфиденциальности</h1>
            <p class="page-subtitle">Последнее обновление: 29 марта 2026 г.</p>
          </div>

          <div class="content-card">
            <section v-for="(s, i) in sections" :key="i" :class="{ 'mt-8': i > 0 }">
              <h2 class="section-heading">{{ s.title }}</h2>
              <div class="section-body" v-html="s.body" />
            </section>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const sections = [
  {
    title: '1. Общие положения',
    body: `
      <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса MizanPay (далее — «Сервис»), доступного по адресу mizan-pay.ru и через мобильное приложение.</p>
      <p>Используя Сервис, вы соглашаетесь с условиями данной Политики. Если вы не согласны — пожалуйста, прекратите использование Сервиса.</p>
    `,
  },
  {
    title: '2. Какие данные мы собираем',
    body: `
      <p>Мы можем собирать следующие категории данных:</p>
      <ul>
        <li><strong>Персональные данные:</strong> ФИО, номер телефона, email, город проживания</li>
        <li><strong>Документы:</strong> серия и номер паспорта, ИНН, фото паспорта, селфи — для верификации</li>
        <li><strong>Данные о сделках:</strong> информация о заявках, сделках, платежах</li>
        <li><strong>Технические данные:</strong> IP-адрес, тип устройства, версия ОС, cookies</li>
      </ul>
    `,
  },
  {
    title: '3. Цели обработки данных',
    body: `
      <p>Мы используем ваши данные для:</p>
      <ul>
        <li>Регистрации и аутентификации в Сервисе</li>
        <li>Верификации личности (KYC)</li>
        <li>Оформления и сопровождения сделок</li>
        <li>Уведомлений о статусе заявок и платежей</li>
        <li>Улучшения качества Сервиса</li>
        <li>Исполнения требований законодательства РФ</li>
      </ul>
    `,
  },
  {
    title: '4. Хранение и защита данных',
    body: `
      <p>Данные хранятся на защищённых серверах на территории Российской Федерации. Мы применяем организационные и технические меры для защиты данных от несанкционированного доступа, утраты или разглашения.</p>
      <p>Передача данных осуществляется по зашифрованному каналу (HTTPS/TLS). Доступ к персональным данным имеют только уполномоченные сотрудники.</p>
    `,
  },
  {
    title: '5. Передача данных третьим лицам',
    body: `
      <p>Мы не продаём и не передаём ваши данные третьим лицам, за исключением случаев:</p>
      <ul>
        <li>Когда это необходимо для исполнения сделки (передача данных инвестору/клиенту в рамках договора)</li>
        <li>По требованию законодательства РФ (запросы государственных органов)</li>
        <li>С вашего явного согласия</li>
      </ul>
    `,
  },
  {
    title: '6. Cookies и аналитика',
    body: `
      <p>Сервис может использовать cookies и аналогичные технологии для корректной работы, аналитики и улучшения пользовательского опыта. Вы можете отключить cookies в настройках браузера.</p>
    `,
  },
  {
    title: '7. Права пользователя',
    body: `
      <p>Вы имеете право:</p>
      <ul>
        <li>Получить информацию о том, какие ваши данные мы обрабатываем</li>
        <li>Потребовать исправления неточных данных</li>
        <li>Потребовать удаления ваших данных (при отсутствии незавершённых сделок)</li>
        <li>Отозвать согласие на обработку данных</li>
      </ul>
      <p>Для реализации своих прав обратитесь в службу поддержки: <strong>support@mizan-pay.ru</strong></p>
    `,
  },
  {
    title: '8. Изменения в Политике',
    body: `
      <p>Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на этой странице. При существенных изменениях мы уведомим вас через Сервис или по email.</p>
    `,
  },
  {
    title: '9. Контакты',
    body: `
      <p>По вопросам обработки персональных данных:</p>
      <ul>
        <li>Email: <strong>support@mizan-pay.ru</strong></li>
        <li>Телефон: <strong>+7 (928) 000-00-00</strong></li>
        <li>Адрес: Грозный, Чеченская Республика</li>
      </ul>
    `,
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

.content-card {
  background: white;
  border: 1px solid #e2efe8;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 32px rgba(4, 120, 87, 0.04);
}

@media (min-width: 960px) {
  .content-card {
    padding: 48px;
  }
}

.section-heading {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0c1a12;
  margin-bottom: 12px;
}

.section-body {
  font-size: 0.9rem;
  line-height: 1.8;
  color: #5f7a6b;
}

.section-body :deep(p) {
  margin-bottom: 10px;
}

.section-body :deep(p:last-child) {
  margin-bottom: 0;
}

.section-body :deep(ul) {
  padding-left: 20px;
  margin: 8px 0;
}

.section-body :deep(li) {
  margin-bottom: 6px;
}

.section-body :deep(strong) {
  color: #0c1a12;
  font-weight: 600;
}
</style>