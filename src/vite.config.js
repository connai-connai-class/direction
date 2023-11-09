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
    },
  },
});
