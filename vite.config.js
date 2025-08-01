import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: "/to_do_list_reactJS/",
  server: {
    host: '0.0.0.0',
    port: 3000
  }
  
})
