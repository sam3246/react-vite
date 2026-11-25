import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // tailwindcss() activa Tailwind dentro de Vite
  plugins: [react(), tailwindcss()],
})
