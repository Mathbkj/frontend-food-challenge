import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@images": path.resolve(
        __dirname,
        "./src/assets/product-list-with-cart-main/product-list-with-cart-main/assets/images"
      ),
    },
  },
});
