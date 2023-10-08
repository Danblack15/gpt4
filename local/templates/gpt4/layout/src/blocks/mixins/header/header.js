let header = $.qs('[data-header]');

window.addEventListener('scroll', () => {
    if (scrollY > 0)
        header?.classList.add('header--background');
    else
        header?.classList.remove('header--background');
});