import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 5173,
    host: true, // Cambiamos '0.0.0.0' por true
    strictPort: true,
    hmr: {
      clientPort: 443 // Esto es importante para Codespaces
    }
  }
});
