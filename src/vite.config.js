import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

const base = "/resources/js";
export default defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.jsx",
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    caseSensitive: true,
    alias: {
      "@": base,
      "@pages": base + "/pages",
      "@themes": base + "/common/theme/",
      "@hooks": base + "/common/hooks/",
      "@ui-elements": base + "/components/ui-elements",
      "@ui-parts": base + "/components/ui-parts",
      "@layouts": base + "/components/layouts",
      "@features": base + "/features/",
    },
  },
  test: {
    environment: "happy-dom",
    setupFiles: "./resources/js/__test__/setup.js",
    testMatch: "./resources/js/**/*.test.jsx",
    globals: true,
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
