import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/cmsc-170-project-elbis-yummiest-group-2/',
  plugins: [react(), tailwindcss()],
})
