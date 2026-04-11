import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',  // Make sure this is just 'dist'
    emptyOutDir: true,  // Clear dist folder before building
    rollupOptions: {
      input: {
        main: 'index.html',
        aboutEquipment: 'aboutEquipment.html',
        aboutPhotographer: 'aboutPhotographer.html',
        portfolio: 'portfolio.html',
        portfolio2: 'portfolio2.html',
        contact: 'contact.html'
      }
    }
  }
})