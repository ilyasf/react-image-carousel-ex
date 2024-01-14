import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

const viteOutDir = 'dist';

console.log('process.env.VITE_OUT_DIR = ', process.env.VITE_OUT_DIR);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    outDir: viteOutDir,
  },
})
