import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  server: {
    port: 3000,
  },
  ...{
    "name": "portfolio",
    "version": "1.0.0",
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "serve": "vite preview"
    },
    "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2"
    },
    "devDependencies": {
      "@vitejs/plugin-react": "^1.0.0",
      "vite": "^2.0.0"
    }
  }
});
