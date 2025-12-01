import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',   // <--- EN ÖNEMLİ KISIM BURASI (Virgülü unutma)
  plugins: [react()],
})