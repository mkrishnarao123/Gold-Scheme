import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";

export default createVuetify({
  VBtn: {
    style: "text-transform: none;",
  },
  VCard: {
    VBtn: { variant: "tonal" },
  },
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 340,
      md: 540,
      lg: 800,
      xl: 1280,
    },
  },
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});
