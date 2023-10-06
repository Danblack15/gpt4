import { Parallax } from '../components/parallax';

window.addEventListener('load', () => {
    const allParallaxItems = $.qsa('[data-parallax]');
    
    allParallaxItems?.forEach(parallaxItem => {
        const newParallax = new Parallax(parallaxItem);

        newParallax.init();
    });
});