import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0',
//   }
// })


export default defineConfig({
  server: {
    allowedHosts: [
      '2bc4a089-8757-4483-8f82-37f3db640408-00-qeioo8z8pidf.worf.replit.dev', // Adicione o host do Replit aqui
    ],
  },
});