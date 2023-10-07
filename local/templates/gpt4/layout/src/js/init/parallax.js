import { Parallax } from '../components/parallax';

window.addEventListener('load', () => {
    if (window.innerWidth <= 1024) return;
     
    const allParallaxItems = $.qsa('[data-parallax]');
    
    allParallaxItems?.forEach(parallaxItem => {
        const newParallax = new Parallax(parallaxItem);

        newParallax.init();
    });
});