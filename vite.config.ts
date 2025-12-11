import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Memuat environment variables (termasuk dari Netlify UI)
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Mengganti process.env.API_KEY di kode dengan nilai sebenarnya saat build
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})