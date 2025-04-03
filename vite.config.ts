import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import commonjs from "vite-plugin-commonjs";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), commonjs()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["@canvasjs/charts"],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
