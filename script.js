// Adicione no seu arquivo script.js
const elementosComSombra = document.querySelectorAll('.icon-container');

elementosComSombra.forEach(elemento => {
    elemento.addEventListener('mouseenter', () => {
        elemento.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    });

    elemento.addEventListener('mouseleave', () => {
        elemento.style.boxShadow = 'none';
    });
});

// Adicione no seu arquivo script.js
const elementosComEscala = document.querySelectorAll('.icon-container');

elementosComEscala.forEach(elemento => {
    elemento.addEventListener('mouseenter', () => {
        elemento.style.transform = 'scale(1.1)';
    });

    elemento.addEventListener('mouseleave', () => {
        elemento.style.transform = 'scale(1)';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const modoEscuroBtn = document.getElementById('modo-escuro');

    modoEscuroBtn.addEventListener('click', function() {
        document.body.classList.toggle('modo-escuro');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modoEscuroBtn = document.getElementById('modo-escuro');

    modoEscuroBtn.addEventListener('click', function() {
        document.body.classList.toggle('modo-escuro');
        document.querySelectorAll('*').forEach(elemento => {
            elemento.classList.toggle('modo-escuro');
        });
        modoEscuroBtn.classList.toggle('ativo');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const iconeScroll = document.getElementById('icone-scroll');

    iconeScroll.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const elementosComSombra = document.querySelectorAll('.icon-container');

    elementosComSombra.forEach(elemento => {
        elemento.addEventListener('mouseenter', () => {
            elemento.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        });

        elemento.addEventListener('mouseleave', () => {
            elemento.style.boxShadow = 'none';
        });
    });

    const elementosComEscala = document.querySelectorAll('.icon-container');

    elementosComEscala.forEach(elemento => {
        elemento.addEventListener('mouseenter', () => {
            elemento.style.transform = 'scale(1.1)';
        });

        elemento.addEventListener('mouseleave', () => {
            elemento.style.transform = 'scale(1)';
        });
    });

    const elementosRedeSocial = document.querySelectorAll('.rede-social-container a');

    elementosRedeSocial.forEach(elemento => {
        elemento.addEventListener('mouseenter', () => {
            elemento.querySelector('i').style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        });

        elemento.addEventListener('mouseleave', () => {
            elemento.querySelector('i').style.boxShadow = 'none';
        });
    });
});

