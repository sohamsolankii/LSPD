import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/api/v1': {
                target: 'https://lspd-mq7j.onrender.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/v1/, '/v1'), // Corrected this line
            },
        },
    },
    build: {
        outDir: 'build', // Change the output directory to 'build'
    },
    plugins: [react()],
})
