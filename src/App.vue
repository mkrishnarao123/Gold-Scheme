<script setup>
import { RouterView } from "vue-router";
import { useAlertsStore } from "@/stores/index";
const storeAlerts = useAlertsStore();
</script>

<template>
  <RouterView />

  <v-snackbar
    v-model="storeAlerts.alert.show"
    rounded="pill"
    centered
    :color="storeAlerts.alert.color"
    dense
  >
    <v-alert :type="storeAlerts.alert.color" class="mb-0 ma-0 pa-0" dense>{{
      storeAlerts.alert.message
    }}</v-alert>
    <template v-slot:actions>
      <v-btn
        size="small"
        color="white"
        icon
        @click="storeAlerts.alert.show = !storeAlerts.alert.show"
      >
        <v-icon icon="fas fa-close"></v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>
