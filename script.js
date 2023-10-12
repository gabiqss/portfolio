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

// Adicione este código ao final do seu arquivo script.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dataInicio = new Date('2023-06-26'); // Defina a data de início
    const dataAtual = new Date();
    const diffAnos = dataAtual.getFullYear() - dataInicio.getFullYear();
    const diffMeses = dataAtual.getMonth() - dataInicio.getMonth();

    let textoTempo;

    if (diffAnos > 0) {
        textoTempo = `${diffAnos} ${diffAnos === 1 ? 'ano' : 'anos'}`;
        if (diffMeses > 0) {
            textoTempo += ` e ${diffMeses} ${diffMeses === 1 ? 'mês' : 'meses'}`;
        }
    } else {
        textoTempo = `${diffMeses} ${diffMeses === 1 ? 'mês' : 'meses'}`;
    }

    const elementoTempo = document.getElementById('tempo-programacao');
    elementoTempo.textContent = textoTempo;
});


window.addEventListener('scroll', function() {
    var icon = document.getElementById('icone-scroll');

    if (window.scrollY > 100 && !icon.classList.contains('fadeInAnimation')) {
        icon.classList.remove('fadeOutAnimation');
        icon.classList.add('fadeInAnimation');
        icon.classList.remove('hidden');
    } else if (window.scrollY <= 100 && !icon.classList.contains('fadeOutAnimation')) {
        icon.classList.remove('fadeInAnimation');
        icon.classList.add('fadeOutAnimation');
          // Aguarda a animação de fadeOut antes de esconder completamente
    }
});


function trocarIdioma(idioma) {
    if (idioma === 'pt-br') {
        document.querySelectorAll('.pt-br').forEach(element => {
            element.style.display = 'block';
        });
        document.querySelectorAll('.en').forEach(element => {
            element.style.display = 'none';
        });
    } else if (idioma === 'en') {
        document.querySelectorAll('.pt-br').forEach(element => {
            element.style.display = 'none';
        });
        document.querySelectorAll('.en').forEach(element => {
            element.style.display = 'block';
        });
    }
}


 // Calculate the time difference between now and the specified date
 function getTimeDifference(startDate) {
    const now = new Date();
    const start = new Date(startDate);
    const diff = now - start;

    return {
        years: Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)),
        months: Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)),
    };
}

// Display the time difference
function displayTimeDifference() {
    const programmingTime = document.getElementById('programming-time');
    const startDate = new Date('2023-06-26'); // Replace with your start date

    const timeDifference = getTimeDifference(startDate);

    let displayText = '';
    if (timeDifference.years > 0) {
        displayText += `${timeDifference.years} ${timeDifference.years === 1 ? 'year' : 'years'}`;
    }
    if (timeDifference.years > 0 && timeDifference.months > 0) {
        displayText += ' and ';
    }
    if (timeDifference.months > 0) {
        displayText += `${timeDifference.months} ${timeDifference.months === 1 ? 'month' : 'months'}`;
    }

    programmingTime.textContent = `${displayText}`;
}

// Call the displayTimeDifference function when the page loads
window.addEventListener('DOMContentLoaded', displayTimeDifference);

