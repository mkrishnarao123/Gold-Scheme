
// stores/index.js
import { defineStore } from "pinia";

export const useAlertsStore = defineStore("alerts", {
  state: () => {
    return {
      alert: {
        show: false,
        color: "",
        message: "",
      },
    };
  },
  actions: {
    showSuccessAlert(message) {
      Object.assign(this.alert, {
        color: "success",
        show: true,
        message: message,
      });
    },
    showErrorAlert(message) {
      Object.assign(this.alert, {
        color: "error",
        show: true,
        message: message,
      });
    },
  },
});
