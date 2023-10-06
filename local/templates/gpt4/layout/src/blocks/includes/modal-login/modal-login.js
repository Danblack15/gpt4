window.addEventListener('load', () => {
    let toRegister = $.qs('[data-register]');

    toRegister?.addEventListener('click', () => {
        let loginWrapepr = $.qs('[data-login-wrapper]'),
            registerWrapper = $.qs('[data-register-wrapper]');

        loginWrapepr?.classList.add('wrapper-hide');
        registerWrapper?.classList.add('wrapper-show');
    });

    let toLogin = $.qs('[data-login]');

    toLogin?.addEventListener('click', () => {
        let loginWrapepr = $.qs('[data-login-wrapper]'),
            registerWrapper = $.qs('[data-register-wrapper]');

        loginWrapepr?.classList.remove('wrapper-hide');
        registerWrapper?.classList.remove('wrapper-show');
    });
});