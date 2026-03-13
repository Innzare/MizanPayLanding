<script lang="ts" setup>
//
</script>

<template>
  <v-responsive class="overflow-visible">
    <v-app :style="{ backgroundColor: '#ffffff' }">
      <AppHeader />

      <v-main style="--v-layout-top: 0px">
        <v-fade-transition hide-on-leave>
          <router-view />
        </v-fade-transition>
        <AppFooter />
      </v-main>
    </v-app>
  </v-responsive>
</template>
