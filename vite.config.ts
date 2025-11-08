import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  /**
   * En desarrollo (localhost:5173), Vite intercepta /api/... y lo reenvía a
https://regalea-mono-backend.onrender.com/api/... automáticamente.
para evitar error CORS y no tener que poner la URL completa en cada fetch()., backend estan en render.com
por lo tanto el fix para desarrollo es este proxy.
pero el produccion volvera a falla el cors si no se configura el backend para permitir el dominio del frontend.

 */
  server: {
    proxy: {
      "/api": {
        target: "https://regalea-mono-backend.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
