import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rootDir: "./src",
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
        carsAbout: 'cars_about.html',
        carsPortfolio: 'cars_portfolio.html',
        carsPortfolio2: 'cars_portfolio2.html',
        carsContact: 'cars_contact.html',
      }
    }
  }
})
