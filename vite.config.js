import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({ // Added parentheses here, ensure it's a function call
  base: '/Delivery/', // Corrected base path
  plugins: [react(), tailwindcss()]
})
