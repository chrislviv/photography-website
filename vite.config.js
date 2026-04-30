import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        aboutEquipment: 'aboutEquipment.html',
        aboutPhotographer: 'aboutPhotographer.html',
        portfolio: 'portfolio.html',
        portfolio2: 'portfolio2.html',
        contact: 'contact.html',
        expeditions: 'expeditions.html'
      }
    }
  }
})
