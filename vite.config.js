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
        wildlifeHome: 'wildlife_index.html',
        wildlifeAboutEquipment: 'wildlife_aboutEquipment.html',
        wildlifeAboutPhotographer: 'wildlife_aboutPhotographer.html',
        wildlifePortfolio: 'wildlife_portfolio.html',
        wildlifePortfolio2: 'wildlife_portfolio2.html',
        wildlifeContact: 'wildlife_contact.html',
        wildlifeExpeditions: 'wildlife_expeditions.html',
        // Cars
        carsHome: 'cars_index.html',
        carsAboutEquipment: 'cars_aboutEquipment.html',
        carsAboutPhotographer: 'cars_aboutPhotographer.html',
        carsPortfolio: 'cars_portfolio.html',
        carsPortfolio2: 'cars_portfolio2.html',
        carsContact: 'cars_contact.html',
        carsExpeditions: 'cars_expeditions.html',
      }
    }
  }
})
