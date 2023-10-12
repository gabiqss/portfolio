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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dataInicio = new Date('2023-06-26');
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

    document.getElementById('idioma').value = idioma;
}

document.addEventListener('DOMContentLoaded', function() {
    const dataInicio = new Date('2023-06-26');
    const dataAtual = new Date();
    const diffAnos = dataAtual.getFullYear() - dataInicio.getFullYear();
    const diffMeses = dataAtual.getMonth() - dataInicio.getMonth();

    let textoTempo;

    if (diffAnos > 0) {
        textoTempo = `${diffAnos} ${diffAnos === 1 ? 'year' : 'years'}`;
        if (diffMeses > 0) {
            textoTempo += ` e ${diffMeses} ${diffMeses === 1 ? 'month' : 'months'}`;
        }
    } else {
        textoTempo = `${diffMeses} ${diffMeses === 1 ? 'month' : 'months'}`;
    }

    const elementoTempo = document.getElementById('programming-time');
    elementoTempo.textContent = textoTempo;
});

document.addEventListener('DOMContentLoaded', function () {
    var startDate = new Date('2023-10-16');
    var endDate = new Date('2026-04-01');
    var diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    var currentSemester = Math.floor(diffMonths / 6) + 1;
    var semesterPtBr = document.getElementById('semester-pt-br');
    var semesterEn = document.getElementById('semester-en');

    if (semesterPtBr && semesterEn) {
        semesterPtBr.textContent = getSemesterName(currentSemester, 'pt-br');
        semesterEn.textContent = getSemesterName(currentSemester, 'en');
    }
});

function getSemesterName(semester, language) {
    const semesterNames = {
        'pt-br': ['quinto', 'quarto', 'terceiro', 'segundo', 'primeiro'],
        'en': ['fifth', 'fourth', 'third', 'second', 'first']
    };

    return semesterNames[language][semester -1];
}
