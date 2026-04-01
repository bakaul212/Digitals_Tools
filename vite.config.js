import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ১. এই লাইনটি যোগ করুন

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ২. প্লাগইনটি এখানে কল করুন
  ],
})