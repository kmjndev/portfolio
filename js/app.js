document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const headerMenu = document.querySelector('.header-menu');
    const menuLinks = document.querySelectorAll('.header-menu a');
    const burgerIcon = burgerBtn ? burgerBtn.querySelector('.material-icons') : null;

    if (burgerBtn && headerMenu) {
        burgerBtn.addEventListener('click', () => {
            headerMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');

            if (burgerIcon) {
                burgerIcon.textContent = headerMenu.classList.contains('active') ? 'close' : 'menu';
            }
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                headerMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
                if (burgerIcon) {
                    burgerIcon.textContent = 'menu';
                }
            });
        });
    }
});