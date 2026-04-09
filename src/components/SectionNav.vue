<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sections = [
  { id: 'features', label: 'Возможности' },
  { id: 'how-it-works', label: 'Процесс' },
  { id: 'calculator', label: 'Калькулятор' },
  { id: 'for-investors', label: 'Партнёрам' },
  { id: 'trust', label: 'Доверие' },
  { id: 'cta', label: 'Начать' },
]

const active = ref('features')

function onScroll() {
  const scrollY = window.scrollY + window.innerHeight / 3

  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i].id)
    if (el && el.offsetTop <= scrollY) {
      active.value = sections[i].id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <nav class="section-nav">
    <div
      v-for="section in sections"
      :key="section.id"
      class="nav-item"
      :class="{ active: active === section.id }"
      @click="scrollTo(section.id)"
    >
      <span class="nav-dot" />
      <span class="nav-label">{{ section.label }}</span>
    </div>
  </nav>
</template>

<style scoped>
.section-nav {
  position: fixed;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(4, 120, 87, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  flex-direction: row-reverse;
  padding: 6px 4px;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.nav-item:hover {
  background: rgba(4, 120, 87, 0.04);
}

.nav-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #cbd5e1;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.nav-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: #94a3b8;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all 0.3s ease;
  text-align: right;
}

.nav-item:hover .nav-dot {
  background: #047857;
  transform: scale(1.2);
}

.nav-item:hover .nav-label {
  color: #64748b;
}

.nav-item.active .nav-dot {
  background: #047857;
  width: 10px;
  height: 10px;
  box-shadow: 0 0 0 3px rgba(4, 120, 87, 0.15);
}

.nav-item.active .nav-label {
  color: #047857;
  font-weight: 600;
}

@media (max-width: 1280px) {
  .section-nav {
    right: 12px;
  }
}

@media (max-width: 960px) {
  .section-nav {
    display: none;
  }
}
</style>
