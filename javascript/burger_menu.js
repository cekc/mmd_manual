// burger menu toggle
const navbarToggle = () => {
    const nav = document.querySelector('.desktop-nav');
    nav.classList.toggle('toggleShow');
    }
    document.querySelector('.navToggle').addEventListener('click', navbarToggle);