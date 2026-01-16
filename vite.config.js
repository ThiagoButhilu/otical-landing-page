import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Se o repositório não for "username.github.io", descomente e ajuste o base:
  // base: '/nome-do-repositorio/',
  base: '/otical-landing-page/',
})
