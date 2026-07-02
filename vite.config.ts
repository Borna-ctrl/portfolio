import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Served from https://borna-ctrl.github.io/portfolio/ in production;
  // keep the dev server at the root path.
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react()],
}))
