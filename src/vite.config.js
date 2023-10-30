import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    laravel({
      input: "resources/js/React/app.tsx",
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    caseSensitive: true,
    alias: {
      "@": "/resources/js/React",
      "@pages": "/resources/js/React/Pages",
      "@layouts": "/resources/js/React/Layouts",
      "@ui-elements": "/resources/js/React/Components/ui-elements",
      "@ui-parts": "/resources/js/React/Components/ui-parts",
      "@icons": "/resources/js/React/Components/ui-elements/Icons",
      "@columns": "/resources/js/React/Components/Column",
    },
  },
  server: {
    host: true,
    hmr: {
      host: "localhost",
    },
    watch: {
      usePolling: true,
    },
  },
});
