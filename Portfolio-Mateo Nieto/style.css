@import url('https://fonts.googleapis.com/css2?family=VT323&family=Fira+Code:wght@400;600&display=swap');

:@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap');
root {
    --bg-color: #090909; --bg-alt: rgba(17, 17, 17, 0.7);
    --text-main: #f3f4f6; --text-muted: #a3a3a3;
    --primary: #a855f7; --primary-hover: #9333ea;
    --card-bg: rgba(26, 26, 26, 0.6); --border-color: rgba(255, 255, 255, 0.1);
    --yt-bg: #0f0f0f; --yt-chip-bg: rgba(255, 255, 255, 0.1);
    --yt-chip-hover: rgba(255, 255, 255, 0.2); --nav-bg: rgba(9, 9, 9, 0.95);
    --fuente-principal: 'Space Grotesk', sans-serif;
}

body.modo-claro {
    --bg-color: #f8fafc; --bg-alt: #f1f5f9;
    --text-main: #0f172a; --text-muted: #475569;
    --card-bg: #ffffff; --border-color: rgba(0, 0, 0, 0.1);
    --yt-bg: #f8fafc; --yt-chip-bg: rgba(0, 0, 0, 0.05);
    --yt-chip-hover: rgba(0, 0, 0, 0.1); --nav-bg: rgba(255, 255, 255, 0.95);
}

body.modo-retro {
    --bg-color: #000080; --bg-alt: #000000;
    --text-main: #00ff00; --text-muted: #ff00ff;
    --primary: #ff00ff; --card-bg: #000;
    --border-color: #00ff00; --fuente-principal: 'VT323', monospace;
    text-shadow: 2px 2px #ff0000;
}
body.modo-retro img { filter: contrast(200%) saturate(200%) hue-rotate(90deg); }

/* --- SCROLLBAR PERSONALIZADA --- */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--bg-color); }
::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 5px; }
::-webkit-scrollbar-thumb:hover { background: var(--primary-hover); }

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; font-size: 16px; overflow-x: hidden; }

body { background-color: var(--bg-color); color: var(--text-main); font-family: var(--fuente-principal); line-height: 1.6; overflow-x: hidden; transition: background-color 0.5s, color 0.5s, font-family 0.1s; cursor: none; }
a, button, input, textarea { cursor: none; }

.scroll-progress { position: fixed; top: 0; left: 0; width: 0%; height: 4px; background: var(--primary); z-index: 9999; box-shadow: 0 0 10px var(--primary); transition: width 0.1s; }

.cursor-dot, .cursor-outline { position: fixed; top: 0; left: 0; transform: translate(-50%, -50%); border-radius: 50%; z-index: 9999; pointer-events: none; }
.cursor-dot { width: 8px; height: 8px; background: var(--primary); }
.cursor-outline { width: 40px; height: 40px; border: 2px solid rgba(168, 85, 247, 0.5); transition: width 0.2s, height 0.2s; }

ul { list-style: none; }
a { text-decoration: none; color: inherit; }

header { width: 100%; position: fixed; top: 0; left: 0; background: transparent; z-index: 1000; padding: 1.5rem 0; transition: all 0.4s ease; }
header.scrolled { background: var(--nav-bg); backdrop-filter: blur(12px); padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); }
.navbar { width: 90%; max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.logo h1 { font-size: 1.5rem; font-weight: 700; color: var(--text-main); }
.logo span { font-size: 0.8rem; color: var(--primary); text-transform: uppercase; letter-spacing: 2px; }

.menu { display: flex; gap: 2rem; }
.menu a { position: relative; color: var(--text-muted); transition: 0.3s; font-weight: 600; }
.menu a:hover { color: var(--text-main); }

.header-actions { display: flex; align-items: center; gap: 1rem; }
.btn-tema { background: transparent; border: none; color: var(--text-main); font-size: 1.2rem; transition: 0.3s; }
.btn-tema:hover { color: var(--primary); transform: rotate(15deg); }
.btn-contacto { padding: 0.5rem 1.5rem; border: 2px solid var(--primary); border-radius: 50px; color: var(--primary); font-weight: 600; transition: 0.3s; }
.btn-contacto:hover { background: var(--primary); color: #fff; }

.hidden { opacity: 0; transform: translateY(40px); transition: all 0.8s ease-out; }
.show { opacity: 1; transform: translateY(0); }

section { padding: 6rem 5%; width: 100%; }
.seccion-alternativa { background-color: var(--bg-alt); transition: 0.5s; }
.seccion-oscura { background-color: var(--bg-color); transition: 0.5s; }
.titulo-seccion { text-align: center; font-size: 2.5rem; margin-bottom: 4rem; color: var(--text-main); text-transform: uppercase; }
.mt-5 { margin-top: 5rem; }

.hero { min-height: 100vh; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; width: 90%; max-width: 1200px; margin: 0 auto; padding-top: 100px; }
.hero-content { flex: 1; min-width: 300px; }
.hero-content h2 { font-size: 4rem; margin-bottom: 0.5rem; line-height: 1.1; color: var(--text-main); }
.hero-content span { color: var(--primary); }
.typing-text { font-size: 1.5rem; color: var(--text-muted); margin-bottom: 2.5rem; min-height: 36px; border-right: 2px solid var(--primary); white-space: nowrap; overflow: hidden; animation: blinkCursor 0.75s step-end infinite; }
@keyframes blinkCursor { 50% { border-color: transparent; } }

.hero-links { display: flex; gap: 1.5rem; }
.btn-primary, .btn-secondary { padding: 1rem 2rem; border-radius: 8px; font-weight: 600; transition: all 0.3s; border: none; }
.btn-primary { background: var(--primary); color: #fff; }
.btn-primary:hover { background: var(--primary-hover); transform: translateY(-3px); }
.btn-secondary { background: transparent; border: 2px solid var(--text-muted); color: var(--text-main); }
.btn-secondary:hover { border-color: var(--primary); color: var(--primary); transform: translateY(-3px); }

.hero-img { flex: 1; display: flex; justify-content: center; align-items: center; position: relative; min-width: 300px; }
.hero-img img { border-radius: 20px; width: 300px; height: 350px; object-fit: cover; z-index: 2; border: 2px solid rgba(168, 85, 247, 0.5); transition: 0.5s; }
.hero-img img:hover { transform: scale(1.02); border-color: var(--primary); }
.glow-ring { position: absolute; width: 320px; height: 370px; background: linear-gradient(45deg, var(--primary), transparent, #4338ca); border-radius: 20px; filter: blur(20px); opacity: 0.3; animation: rotateGlow 5s linear infinite; z-index: 1; }
@keyframes rotateGlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

.contenedor-tabla { max-width: 800px; margin: 0 auto; overflow-x: auto; }
table { width: 100%; border-collapse: collapse; background: var(--card-bg); border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); }
th, td { padding: 1.2rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--text-main); }
th { background: var(--primary); color: #fff; }

.skills-container { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; max-width: 1000px; margin: 0 auto; }
.skill-card { background: var(--card-bg); padding: 2.5rem 2rem; border-radius: 16px; text-align: center; flex: 1; min-width: 250px; border: 1px solid var(--border-color); }
.tilt-card { transition: transform 0.1s ease-out; transform-style: preserve-3d; will-change: transform; }
.skill-card i { font-size: 3.5rem; color: var(--primary); margin-bottom: 1.5rem; transition: 0.3s; transform: translateZ(30px); }
.skill-card h4 { margin-bottom: 1rem; font-size: 1.3rem; color: var(--text-main); transform: translateZ(20px); }
.skill-card ul li { color: var(--text-muted); margin-bottom: 0.8rem; transform: translateZ(10px); }

.experiencia-item { display: flex; gap: 2rem; max-width: 900px; margin: 0 auto 3rem auto; background: var(--card-bg); padding: 2rem; border-radius: 16px; border: 1px solid var(--border-color); transition: 0.3s; }
.experiencia-item:hover { border-color: var(--primary); transform: translateX(10px); }
.exp-icon { width: 60px; height: 60px; background: rgba(168, 85, 247, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--primary); flex-shrink: 0; }
.exp-content h4 { font-size: 1.4rem; color: var(--text-main); margin-bottom: 0.3rem; }
.fecha { display: inline-block; color: var(--primary); font-size: 0.9rem; margin-bottom: 1rem; font-weight: 600; }
.exp-content p { color: var(--text-muted); }

.stats-container { display: flex; justify-content: space-around; flex-wrap: wrap; max-width: 1000px; margin: 0 auto; gap: 2rem; text-align: center; }
.stat-box { background: var(--card-bg); padding: 2rem; border-radius: 16px; border: 1px solid var(--border-color); flex: 1; min-width: 200px; transition: 0.3s; }
.stat-box:hover { border-color: var(--primary); transform: translateY(-5px); }
.stat-box span.stat-numero { font-size: 3.5rem; font-weight: 700; color: var(--primary); text-shadow: 0 0 15px rgba(168,85,247,0.4); }
.stat-box span.stat-signo { font-size: 3.5rem; font-weight: 700; color: var(--primary); }
.stat-box p { color: var(--text-muted); font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.5rem; }

.subtitulo-interactivo { text-align: center; color: var(--text-muted); margin-top: -2rem; margin-bottom: 3rem; }
.slider-grading-container { position: relative; max-width: 800px; height: 450px; margin: 0 auto; overflow: hidden; border-radius: 16px; border: 2px solid var(--primary); }
.img-grading { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }
.img-grading.raw { filter: grayscale(100%) contrast(70%) brightness(80%); } 
.img-grading.editada { clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%); } 
.slider-color { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; z-index: 10; }
.slider-line { position: absolute; top: 0; left: 50%; width: 4px; height: 100%; background: #fff; z-index: 5; pointer-events: none; transform: translateX(-50%); box-shadow: 0 0 10px rgba(0,0,0,0.5); }
.slider-arrows { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40px; height: 40px; background: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; border: 3px solid white; }

.youtube-section { background-color: var(--yt-bg); padding: 6rem 5%; transition: 0.5s; }
.yt-filters { display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap; }
.yt-chip { padding: 0.6rem 1.2rem; border-radius: 8px; border: none; background: var(--yt-chip-bg); color: var(--text-main); font-weight: 600; transition: 0.3s; font-family: inherit; }
.yt-chip:hover { background: var(--yt-chip-hover); }
.yt-chip.activo { background: var(--text-main); color: var(--bg-color); }
.yt-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem 1.5rem; max-width: 1200px; margin: 0 auto; }
.yt-card { transition: transform 0.2s; background: transparent; border: none; display: block; }
.yt-card:hover { transform: scale(1.02); }
.yt-card.oculto { display: none; }
.yt-thumb { position: relative; border-radius: 12px; overflow: hidden; margin-bottom: 0.8rem; }
.yt-thumb img { width: 100%; height: 180px; object-fit: cover; display: block; }
.yt-time { position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.8); color: white; font-size: 0.75rem; padding: 3px 6px; border-radius: 4px; font-weight: 600; }
.yt-details { display: flex; gap: 12px; }
.yt-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
.yt-text h4 { color: var(--text-main); font-size: 1rem; line-height: 1.4; margin-bottom: 4px; font-weight: 600; }
.yt-text p { color: var(--text-muted); font-size: 0.85rem; line-height: 1.2; }

.terminal-box { max-width: 700px; margin: 0 auto; background: #000; border-radius: 10px; border: 1px solid #333; overflow: hidden; font-family: 'Fira Code', monospace; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
.terminal-header { background: #2d2d2d; padding: 10px; display: flex; align-items: center; }
.red-dot, .yellow-dot, .green-dot { width: 12px; height: 12px; border-radius: 50%; margin-right: 8px; }
.red-dot { background: #ff5f56; } .yellow-dot { background: #ffbd2e; } .green-dot { background: #27c93f; }
.terminal-header p { margin: 0 auto; color: #999; font-size: 0.85rem; }
.terminal-body { padding: 20px 20px 0 20px; min-height: 150px; max-height: 300px; overflow-y: auto; }
.txt-verde { color: #0f0; }
.txt-resalte { color: #ffeb3b; }
.terminal-input-line { display: flex; padding: 0 20px 20px 20px; }
.terminal-input-line span { margin-right: 10px; }
.terminal-input-line input { flex: 1; background: transparent; border: none; color: #0f0; font-family: 'Fira Code', monospace; font-size: 1rem; }
.terminal-input-line input:focus { outline: none; }

.contacto-flex { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 4rem; max-width: 1000px; margin: 0 auto; }
.contacto-info p { font-size: 1.2rem; margin-bottom: 1.5rem; color: var(--text-muted); display: flex; align-items: center; }
.contacto-info i { color: var(--primary); font-size: 1.5rem; margin-right: 15px; width: 30px; text-align: center; }
.formulario { display: flex; flex-direction: column; gap: 1.2rem; flex: 1; min-width: 300px; }
.formulario input, .formulario textarea { width: 100%; padding: 1.2rem; border: 1px solid var(--border-color); border-radius: 12px; background: var(--card-bg); color: var(--text-main); font-family: inherit; }
.formulario input:focus, .formulario textarea:focus { outline: none; border-color: var(--primary); }
.btn-enviar { width: 100%; padding: 1.2rem; font-size: 1.1rem; border-radius: 12px; }

/* --- POPUP MENSAJE ENVIADO --- */
.popup-oculto { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); display: flex; justify-content: center; align-items: center; z-index: -1; opacity: 0; transition: opacity 0.3s ease, z-index 0.3s step-end; backdrop-filter: blur(5px); }
.popup-activo { z-index: 10000; opacity: 1; transition: opacity 0.3s ease, z-index 0.3s step-start; }
.popup-contenido { background: var(--card-bg); padding: 3rem; border-radius: 20px; text-align: center; border: 2px solid var(--primary); transform: scale(0.8); transition: transform 0.3s ease; box-shadow: 0 0 30px rgba(168, 85, 247, 0.3); }
.popup-activo .popup-contenido { transform: scale(1); }
.popup-contenido i { font-size: 4rem; color: #25d366; margin-bottom: 1rem; }
.popup-contenido h3 { font-size: 1.8rem; color: var(--text-main); margin-bottom: 0.5rem; }
.popup-contenido p { color: var(--text-muted); }

footer { background: var(--nav-bg); text-align: center; padding: 3rem; border-top: 1px solid var(--border-color); position: relative; }
footer p { color: var(--text-muted); margin-bottom: 0.5rem; font-size: 0.95rem; }
.btn-panico { position: absolute; bottom: 20px; right: 20px; background: #ff0000; color: white; border: 2px solid darkred; padding: 8px 15px; border-radius: 5px; font-weight: bold; transition: 0,2ms; }
.btn-panico:hover { background: darkred; transform: scale(1.1); }

.whatsapp-flotante { position: fixed; bottom: 30px; left: 30px; width: 60px; height: 60px; background-color: #25d366; color: #fff; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 2rem; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); z-index: 1000; transition: all 0.3s ease; animation: latido-wa 2s infinite; }
.whatsapp-flotante:hover { background-color: #1ebe57; transform: scale(1.1); color: #fff; }
@keyframes latido-wa { 0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); } 70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); } 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); } }

@media (max-width: 768px) { .menu { display: none; } .hero-content h2 { font-size: 2.8rem; } .hero-img img { width: 250px; height: 300px; } .glow-ring { width: 270px; height: 320px; } .experiencia-item { flex-direction: column; gap: 1rem; } }
