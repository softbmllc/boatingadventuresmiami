import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      "057f-2601-582-c302-8510-85d5-9e0d-d43b-e67f.ngrok-free.app"
    ]
  }
})