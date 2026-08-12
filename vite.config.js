import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Root
        main: 'index.html',
        // Wildlife
        wildlifeHome: 'wildlife/index.html',
        aboutEquipment: 'wildlife/aboutEquipment.html',
        aboutPhotographer: 'wildlife/aboutPhotographer.html',
        portfolio: 'wildlife/portfolio.html',
        portfolio2: 'wildlife/portfolio2.html',
        contact: 'wildlife/contact.html',
        expeditions: 'wildlife/expeditions.html',
        // Cars
        carsHome: 'cars/index.html',
        carsAboutEquipment: 'cars/aboutEquipment.html',
        carsAboutPhotographer: 'cars/aboutPhotographer.html',
        carsPortfolio: 'cars/portfolio.html',
        carsPortfolio2: 'cars/portfolio2.html',
        carsContact: 'cars/contact.html',
        carsExpeditions: 'cars/expeditions.html'
      }
    }
  }
})
