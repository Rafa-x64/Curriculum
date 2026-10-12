import "./css/styles.css";
import {
  createIcons, Mail, Phone, Printer, MapPin, ArrowUpRight, ArrowLeft, ArrowRight,
  Layers, Server, Cpu, Database, Wrench, Briefcase, GraduationCap, Factory,
  UtensilsCrossed, Package, Music,
} from "lucide";
import { animate } from "animejs";

const $ = (s, r = document) => r.querySelector(s);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const chips = (a) => `<div class="chips">${a.map((t) => `<span class="chip">${t}</span>`).join("")}</div>`;

const skills = [
  ["layers", "Frontend", ["Vue 3", "React", "Pinia", "TypeScript", "Bootstrap 5", "HTML5", "CSS3", "Vite"]],
  ["server", "Backend", ["Node.js", "Express", "Prisma", "APIs REST", "WebSockets", "AJAX", "Zod", "PHP"]],
  ["database", "Bases de datos", ["PostgreSQL", "MySQL", "SQL", "IndexedDB (Dexie.js)"]],
  ["cpu", "Sistemas y multiplataforma", ["C", "C++", "Java", "JavaFX", "Flutter", "Dart", "FFI (Project Panama)", "Linux"]],
  ["wrench", "Herramientas y prácticas", ["Git", "GitHub", "pnpm", "Monorepos", "MVC", "SOLID", "Arquitectura limpia"]],
  ["briefcase", "Gestión", ["Planificación de proyectos", "Liderazgo de equipos", "Levantamiento de requisitos", "SRS y casos de uso"]],
];
$("#skills").innerHTML = skills
  .map(([i, t, a]) => `<article class="card rv"><h3><i data-lucide="${i}"></i>${t}</h3>${chips(a)}</article>`)
  .join("");

const tl = [
  ["Pasantías finalizadas", "Pasante Profesional · Tubrica", "Completé satisfactoriamente las pasantías aplicando desarrollo de software en un entorno empresarial real.", "briefcase"],
  ["En curso", "TSU en Informática · IUJO, Barquisimeto", "Formación continua y autoformación en patrones de diseño arquitectónico, optimización de sistemas y compilación multiplataforma.", "graduation-cap"],
  ["Inicio planificado: 2027", "Ingeniería en Informática", "Siguiente etapa académica para profundizar en arquitectura y sistemas.", "graduation-cap"],
  ["Base", "Bachiller en Ciencias", "U.E.N. Dr. Pablo Herrera Campins.", "graduation-cap"],
];
$("#timeline").innerHTML = tl
  .map(([d, t, p]) => `<div class="tl rv"><small>${d}</small><h3>${t}</h3><p>${p}</p></div>`)
  .join("");

const projects = [
  {
    n: "pg-excel-migrator", sub: "CLI de Migración de Datos Excel a PostgreSQL", icon: "database",
    grad: "linear-gradient(135deg,#15803d,#064e3b)",
    d: "Herramienta CLI interactiva para la migración, validación y transformación automatizada de archivos Excel (.xlsx) hacia PostgreSQL.",
    b: [
      "Motor de mapeo heurístico (Levenshtein + Jaccard) con resolución de Foreign Keys mediante claves jerárquicas y ordenamiento topológico.",
      "Auditoría visual previa mediante generación de Excel intermedio en esquema 1:1 sin tocar la base de datos.",
      "Inserción transaccional por lotes (500 filas/lote), modo atómico, dry-run, auto-instanciación desde plantillas y sincronización automática de secuencias seriales."
    ],
    t: ["TypeScript", "Node.js", "PostgreSQL", "pnpm", "Commander", "Zod", "ExcelJS"],
    r: "https://github.com/Rafa-x64/pg-excel-migrator",
  },
  {
    n: "Sinergy", sub: "Sistema de Gestión de Mantenimiento Industrial", icon: "factory",
    grad: "linear-gradient(135deg,#0f766e,#164e63)",
    d: "Aplicación web offline-first para captura de métricas y control de activos en plantas industriales con conectividad intermitente.",
    b: ["Monorepo con pnpm workspaces (Vue 3 + Express) y arquitectura modular por features.", "Almacenamiento local con IndexedDB (Dexie.js) y dashboards con ApexCharts, Chart.js y ECharts.", "Requisitos levantados con especialistas de planta; seguridad con JWT, XSS y rate limiting; despliegue automatizado en Windows."],
    t: ["Vue 3", "TypeScript", "Pinia", "Node.js", "Express", "Prisma", "PostgreSQL", "Dexie.js"],
    r: "https://github.com/Rafa-x64/Sinergy",
  },
  {
    n: "Komanda", sub: "Sistema operativo para restaurantes", icon: "utensils-crossed",
    grad: "linear-gradient(135deg,#b45309,#7c2d12)",
    d: "Ecosistema en monorepo con arquitectura DDD-Lite para la gestión integral de restaurantes.",
    b: ["Descuento atómico de inventario (back-flushing) a partir de recetas y subrecetas al confirmar cada venta.", "Sincronización bidireccional en tiempo real con WebSockets entre tablets de meseros y la pantalla de cocina (KDS).", "Facturación (POS), flujo de caja y cálculo automático de comisiones por desempeño."],
    t: ["Vue 3", "TypeScript", "Node.js", "Express", "PostgreSQL", "WebSockets", "Zod", "Vite"],
    r: "https://github.com/Rafa-x64/Komanda-Releases",
  },
  {
    n: "SysPulse", sub: "Monitor de sistema en tiempo real para Linux", icon: "cpu",
    grad: "linear-gradient(135deg,#4338ca,#1e1b4b)",
    d: "Monitor de hardware nativo y ligero, sin Electron ni daemons, que renderiza métricas de CPU, RAM, GPU y disco a 60 fps.",
    b: ["Lectura de /proc y /sys con una biblioteca en C conectada a Java mediante Foreign Function & Memory (JEP 454).", "Recolección de métricas sobre Virtual Threads (JEP 444) para no bloquear el hilo gráfico.", "Control de procesos con señales del SO (SIGTERM, SIGKILL, SIGSTOP, SIGCONT)."],
    t: ["Java 25", "JavaFX", "C (GCC)", "Project Panama", "Virtual Threads", "Maven"],
    r: "https://github.com/Rafa-x64/SysPulse",
  },
  {
    n: "QuickStock", sub: "Sistema de gestión de inventario", icon: "package",
    grad: "linear-gradient(135deg,#0369a1,#0c4a6e)",
    d: "Sistema de inventario con MVC puro en PHP nativo y validación defensiva en el servidor.",
    b: ["Operaciones asíncronas con AJAX para actualizar datos sin recargar la página.", "Separación estricta de modelos, vistas y controladores."],
    t: ["PHP", "MySQL", "AJAX", "JavaScript", "MVC"],
    r: "https://github.com/Rafa-x64/QuickStock-Inventory-Management-System-in-PHP",
  },
  {
    n: "ChevereSound", sub: "Audio Player Hi-Fi Multiplataforma", icon: "music",
    grad: "linear-gradient(135deg,#9d174d,#4c1d95)",
    d: "Reproductor de audio de alta fidelidad nativo para Linux, Android y Windows, con lógica de bajo nivel en C++.",
    b: ["Motor de audio optimizado para el menor consumo de recursos y la máxima fidelidad.", "Diseño, planificación y arquitectura multiplataforma."],
    t: ["Flutter", "Dart", "C++"],
    r: "https://github.com/Rafa-x64/ChevereSound",
  },
];
$("#track").innerHTML = projects
  .map((p, k) => `<article class="slide"><div class="pvis" data-n="0${k + 1}" style="background:${p.grad}"><i data-lucide="${p.icon}"></i></div>
  <div class="pbody"><small>${p.sub}</small><h3>${p.n}</h3><p>${p.d}</p><ul>${p.b.map((x) => `<li>${x}</li>`).join("")}</ul>${chips(p.t)}
  <a class="repo" href="${p.r}" target="_blank" rel="noopener">Ver repositorio <i data-lucide="arrow-up-right"></i></a></div></article>`)
  .join("");
$("#dots").innerHTML = projects.map((_, k) => `<button aria-label="Proyecto ${k + 1}"></button>`).join("");

createIcons({
  icons: { Mail, Phone, Printer, MapPin, ArrowUpRight, ArrowLeft, ArrowRight, Layers, Server, Cpu, Database, Wrench, Briefcase, GraduationCap, Factory, UtensilsCrossed, Package, Music },
});
$("#year").textContent = new Date().getFullYear();

/* carrusel */
const track = $("#track"), dots = [...$("#dots").children], box = $("#carousel");
let cur = 0, timer;
const go = (n) => {
  cur = (n + projects.length) % projects.length;
  track.style.transform = `translateX(${-cur * 100}%)`;
  dots.forEach((d, k) => d.classList.toggle("on", k === cur));
};
const play = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => go(cur + 1), 7500); };
$("#prev").onclick = () => { go(cur - 1); play(); };
$("#next").onclick = () => { go(cur + 1); play(); };
dots.forEach((d, k) => (d.onclick = () => { go(k); play(); }));
box.onmouseenter = () => clearInterval(timer);
box.onmouseleave = play;
box.onkeydown = (e) => { if (e.key === "ArrowRight") go(cur + 1); if (e.key === "ArrowLeft") go(cur - 1); };
let x0 = 0;
box.onpointerdown = (e) => (x0 = e.clientX);
box.onpointerup = (e) => { const dx = e.clientX - x0; if (Math.abs(dx) > 50) { go(cur + (dx < 0 ? 1 : -1)); play(); } };
go(0); play();

/* texto animado */
const roles = ["Desarrollador Fullstack", "Planificador de Proyectos", "Arquitecturas limpias y modulares", "Sistemas nativos y web reactiva"];
const typed = $("#typed");
if (reduce) typed.textContent = roles[0];
else {
  let r = 0, c = 0, del = false;
  const tick = () => {
    const w = roles[r];
    typed.textContent = w.slice(0, (c += del ? -1 : 1));
    let wait = del ? 35 : 70;
    if (!del && c === w.length) { del = true; wait = 1700; }
    else if (del && c === 0) { del = false; r = (r + 1) % roles.length; wait = 350; }
    setTimeout(tick, wait);
  };
  tick();
}

/* revelado al hacer scroll + contadores */
const count = (el) => {
  const to = +el.dataset.count, o = { v: 0 };
  animate(o, { v: to, duration: 1600, ease: "outExpo", onUpdate: () => (el.textContent = Math.round(o.v) + (el.dataset.suf || "")) });
};
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  const el = e.target, i = [...el.parentElement.children].indexOf(el);
  io.unobserve(el);
  if (reduce) { el.style.opacity = 1; el.querySelectorAll("[data-count]").forEach(count); return; }
  animate(el, { opacity: [0, 1], translateY: [30, 0], duration: 900, delay: Math.min(i, 6) * 90, ease: "outExpo" });
  el.querySelectorAll("[data-count]").forEach(count);
}), { threshold: 0.15 });
document.querySelectorAll(".rv").forEach((el) => io.observe(el));

/* barra de progreso, navbar y scroll spy */
const bar = $("#progress"), top = $("#top");
addEventListener("scroll", () => {
  const h = document.documentElement;
  bar.style.transform = `scaleX(${scrollY / (h.scrollHeight - innerHeight || 1)})`;
  top.classList.toggle("solid", scrollY > 30);
}, { passive: true });
const links = [...document.querySelectorAll(".links a")];
const spy = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

/* resplandor que sigue al cursor en las tarjetas */
document.addEventListener("pointermove", (e) => {
  const c = e.target.closest?.(".card");
  if (!c) return;
  const b = c.getBoundingClientRect();
  c.style.setProperty("--x", e.clientX - b.left + "px");
  c.style.setProperty("--y", e.clientY - b.top + "px");
});
