import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "mizanpay",
    themes: {
      mizanpay: {
        dark: false,
        colors: {
          primary: "#047857",
          secondary: "#0f766e",
          accent: "#059669",
          background: "#f8faf9",
          surface: "#ffffff",
          "surface-variant": "#f0fdf4",
          error: "#dc2626",
          info: "#0284c7",
          success: "#047857",
          warning: "#d97706",
          "on-primary": "#ffffff",
          "on-secondary": "#ffffff",
          "on-background": "#0f172a",
          "on-surface": "#1e293b",
        },
      },
    },
  },
  defaults: {
    VBtn: {
      rounded: "lg",
      elevation: 0,
    },
    VCard: {
      rounded: "xl",
      elevation: 0,
    },
    VTextField: {
      variant: "outlined",
      rounded: "lg",
      density: "comfortable",
    },
    VTextarea: {
      variant: "outlined",
      rounded: "lg",
    },
    VSelect: {
      variant: "outlined",
      rounded: "lg",
      density: "comfortable",
    },
  },
});
