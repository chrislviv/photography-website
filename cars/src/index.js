"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello, TypeScript!");
// Example: DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = '<h1>TypeScript Website</h1>';
    }
});
// Scroll-triggered fade out for hero text overlay
document.addEventListener('DOMContentLoaded', function () {
    const heroTextOverlay = document.getElementById('heroTextOverlay');
    const scrollIndicator = document.getElementById('scrollIndicator');
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollThreshold = window.innerHeight * 0.3; // Start fading at 30% scroll
        if (scrollTop > scrollThreshold) {
            heroTextOverlay.classList.add('scrolled');
            scrollIndicator.classList.add('hidden');
        }
        else {
            heroTextOverlay.classList.remove('scrolled');
            scrollIndicator.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
    // Smooth scroll for scroll indicator
    scrollIndicator.addEventListener('click', function () {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});
//# sourceMappingURL=index.js.map