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
      "@icons": "@/common/Icons",
      "@style": "@/common/styles",
      "@utils": "@/common/utils",
      "@ui-parts": "@/components/ui-parts",
      "@ui-elements": "@/components/ui-elements",
      "@functional": "@/components/functional",
      "@features": "@/features",
      "@layout": "@/components/layouts",
      "@copyright": "@/components/layouts/Copyright",
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
