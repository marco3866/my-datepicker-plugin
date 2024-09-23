import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/DatePickerPlugin.jsx', // Point d'entrée de la bibliothèque
      name: 'DatePickerPlugin',
      fileName: (format) => `datepicker-plugin.${format}.js`,
    },
    rollupOptions: {
      // Assurez-vous d'exclure les dépendances externes de votre bundle
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [react()],
});
