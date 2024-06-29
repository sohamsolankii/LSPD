import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	server:{
		proxy:{
			'/api': 'http://localhost:3000'
		}
	},
  plugins: [react()],
})


// proxy is used to connect frontend with backend here we it's work like http://localhost:3000/api