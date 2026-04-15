import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/Orthocure-Patient-Survey/',
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
      'import.meta.env.VITE_GOOGLE_SCRIPT_URL': JSON.stringify(env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbw28U8hZsJEpQxzAT395fR-9c8k_Jh1OrM14aSaVFiQOxWyvV7-qwW421seCeEWfCM/exec'),
      'import.meta.env.VITE_DASHBOARD_PASSWORD': JSON.stringify(env.VITE_DASHBOARD_PASSWORD || 'admin'),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
