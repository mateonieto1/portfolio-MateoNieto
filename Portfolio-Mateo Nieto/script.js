const header = document.querySelector('header');
const barraProgreso = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollPx / winHeightPx) * 100;
    barraProgreso.style.width = `${scrolled}%`;
});

const tiltCards = document.querySelectorAll('.tilt-card');
tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});

const stats = document.querySelectorAll('.stat-numero');
let contadoresIniciados = false;
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting && !contadoresIniciados) {
            contadoresIniciados = true;
            stats.forEach(stat => {
                const target = +stat.getAttribute('data-target');
                const updateCount = () => {
                    const count = +stat.innerText;
                    const inc = target / 50; 
                    if (count < target) {
                        stat.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 40);
                    } else {
                        stat.innerText = target;
                    }
                };
                updateCount();
            });
        }
    });
}, { threshold: 0.5 });
const statsSection = document.querySelector('.stats-container');
if(statsSection) statsObserver.observe(statsSection);

const textArray = ["Técnico en Informática.", "Editor de Video y Creador.", "Desarrollador Web."];
let textIndex = 0, charIndex = 0;
const typeWriterElement = document.getElementById("typewriter");

function type() {
    if (charIndex < textArray[textIndex].length) {
        typeWriterElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); 
    } else setTimeout(erase, 2000); 
}
function erase() {
    if (charIndex > 0) {
        typeWriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); 
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, 500); 
    }
}
document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000));

const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
}, { threshold: 0.1 });
hiddenElements.forEach(el => observer.observe(el));

const btnTema = document.getElementById('btn-tema');
const body = document.body;
const iconoTema = btnTema.querySelector('i');

btnTema.addEventListener('click', () => {
    body.classList.toggle('modo-claro');
    if (body.classList.contains('modo-claro')) {
        iconoTema.classList.replace('fa-sun', 'fa-moon');
    } else {
        iconoTema.classList.replace('fa-moon', 'fa-sun');
    }
});

const botonesFiltro = document.querySelectorAll('.yt-chip');
const tarjetasYoutube = document.querySelectorAll('.yt-card');

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesFiltro.forEach(b =>

b.classList.remove('activo'));
        boton.classList.add('activo');
        
        const cat = boton.getAttribute('data-filtro');
        tarjetasYoutube.forEach(tarjeta => {
            if (cat === 'todos' || tarjeta.getAttribute('data-categoria') === cat) {
                tarjeta.classList.remove('oculto');
            } else {
                tarjeta.classList.add('oculto');
            }
        });
    });
});

const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    cursorOutline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: "forwards" });
});

const clickables = document.querySelectorAll('a, button, input, textarea');
clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '60px'; cursorOutline.style.height = '60px';
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px'; cursorOutline.style.height = '40px';
    });
});

const sliderColor = document.getElementById('sliderColor');
const imgEditada = document.getElementById('imgEditada');
const sliderLinea = document.getElementById('sliderLinea');

sliderColor.addEventListener('input', (e) => {
    const valor = e.target.value;
    imgEditada.style.clipPath = `polygon(0 0, ${valor}% 0, ${valor}% 100%, 0 100%)`;
    sliderLinea.style.left = `${valor}%`;
});

const termInput = document.getElementById('terminalInput');
const termCuerpo = document.getElementById('terminalCuerpo');

termInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const comando = termInput.value.toLowerCase().trim();
        const pComando = document.createElement('p');
        pComando.innerHTML = `invitado@mateo:~$ <span style="color:#fff;">${comando}</span>`;
        termCuerpo.appendChild(pComando);
        
        const pRespuesta = document.createElement('p');
        pRespuesta.className = 'txt-verde';

        switch(comando) {
            case 'help':
                pRespuesta.innerHTML = "Comandos disponibles: <br>- <span class='txt-resalte'>skills</span> (Ver habilidades ocultas)<br>- <span class='txt-resalte'>about</span> (Sobre mí)<br>- <span class='txt-resalte'>clear</span> (Limpiar consola)";
                break;
            case 'skills':
                pRespuesta.innerHTML = "Cargando módulos... [OK]<br>- HTML5/CSS3/JS: Nivel Avanzado<br>- Premiere Pro: Dios<br>- Hardware: Solucionador de problemas nato.";
                break;
            case 'about':
                pRespuesta.innerHTML = "Iniciando perfil... Soy Mateo, Técnico en Informática preparándose para comerse el mundo tech.";
                break;
            case 'clear':
                termCuerpo.innerHTML = "";
                break;
            case '':
                break;
            default:
                pRespuesta.innerHTML = `bash: ${comando}: comando no encontrado. Escribí 'help'.`;
        }
        
        if(comando !== 'clear') termCuerpo.appendChild(pRespuesta);
        termInput.value = '';
        termCuerpo.scrollTop = termCuerpo.scrollHeight; 
    }
});

const btnPanico = document.getElementById('btn-panico');
btnPanico.addEventListener('click', () => {
    document.body.classList.toggle('modo-retro');
    if(document.body.classList.contains('modo-retro')) {
        btnPanico.innerText = "VOLVER A LA NORMALIDAD";
    } else {
        btnPanico.innerText = "NO TOCAR ⚠️";
    }
});

// --- POP-UP FORMULARIO DE CONTACTO ---
const formContacto = document.getElementById('form-contacto');
const popupMensaje = document.getElementById('popup-mensaje');

if (formContacto) {
    formContacto.addEventListener('submit', (e) => {
        e.preventDefault(); 
        popupMensaje.classList.remove('popup-oculto');
        popupMensaje.classList.add('popup-activo');
        formContacto.reset();

        setTimeout(() => {

popupMensaje.classList.remove('popup-activo');
            popupMensaje.classList.add('popup-oculto');
        }, 3500);
    });
}
