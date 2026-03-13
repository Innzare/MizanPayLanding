<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const drawer = ref(false)

function onScroll() {
  // keep for potential future use
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="floating-header">
    <div class="header-inner">
      <router-link to="/" class="d-flex align-center text-decoration-none">
        <v-icon icon="mdi-scale-balance" color="primary" size="32" class="mr-2" />
        <span class="logo-text">
          Mizan<span class="text-primary">Pay</span>
        </span>
      </router-link>

      <router-link to="/partner" class="cta-link d-none d-sm-flex">
        <v-btn
          color="primary"
          variant="flat"
          class="text-none"
          rounded="pill"
        >
          Стать партнёром
        </v-btn>
      </router-link>

      <!-- Mobile menu -->
      <v-btn
        class="d-sm-none"
        icon="mdi-menu"
        variant="text"
        @click="drawer = true"
      />
    </div>
  </header>

  <!-- Mobile drawer -->
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list nav>
      <v-list-item
        href="#features"
        title="Возможности"
        @click="drawer = false"
      />
      <v-list-item
        href="#how-it-works"
        title="Как это работает"
        @click="drawer = false"
      />
      <v-list-item
        href="#calculator"
        title="Калькулятор"
        @click="drawer = false"
      />
      <v-list-item
        href="#for-investors"
        title="Для инвесторов"
        @click="drawer = false"
      />
      <v-divider class="my-2" />
      <v-list-item>
        <v-btn
          to="/partner"
          color="primary"
          variant="flat"
          block
          class="text-none"
          rounded="pill"
          @click="drawer = false"
        >
          Стать партнёром
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.floating-header {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 96%;
  max-width: 600px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  padding: 14px 24px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(4, 120, 87, 0.1);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-text {
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
}

.cta-link {
  text-decoration: none !important;
}
</style>
