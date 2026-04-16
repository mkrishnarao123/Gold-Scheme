<script setup lang="js">
import navbar from "@/components/Layout/navbar.vue"
</script>
<template>
  <v-layout class="rounded rounded-md">
    <navbar></navbar>

    <v-main class="d-flex align-center justify-center">
      <RouterView></RouterView>
    </v-main>

    <v-footer class="pa-0" app>
      <div class="px-4 py-2 text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Gold Scheme</strong>
      </div>
    </v-footer>
  </v-layout>
</template>
<style scoped></style>
