import { materias, estructuraCurricular } from './data.js';
import {
  obtenerEstado,
  avanzarEstado,
  cantAprobadas,
  correlativasFaltantes,
} from './state.js';

const toastEl = document.getElementById('toast');
let toastTimer = null;

export function mostrarToast(mensaje, tipo = 'info') {
  clearTimeout(toastTimer);
  toastEl.textContent = mensaje;
  toastEl.className = `toast toast--${tipo} toast--visible`;
  toastTimer = setTimeout(() => {
    toastEl.className = 'toast';
  }, 2600);
}

export function actualizarProgreso() {
  const total = materias.length;
  const count = cantAprobadas();
  const pct   = Math.round((count / total) * 100);

  document.getElementById('progress-label').textContent = `${count} de ${total} aprobadas`;
  document.getElementById('progress-pct').textContent   = `${pct}%`;
  document.getElementById('progress-fill').style.width  = `${pct}%`;
  document.getElementById('progress-track').setAttribute('aria-valuenow', pct);
}

function construirTooltipFaltantes(materia) {
  const { faltanRegular, faltanAprobar } = correlativasFaltantes(materia);
  const tooltip = document.createElement('div');
  tooltip.className = 'subject-card__tooltip';
  tooltip.setAttribute('role', 'tooltip');

  if (faltanRegular.length > 0) {
    const pReg = document.createElement('p');
    pReg.className = 'subject-card__tooltip-titulo';
    pReg.textContent = 'Te falta regularizar:';
    tooltip.appendChild(pReg);

    const ulReg = document.createElement('ul');
    faltanRegular.forEach(id => {
      const m = materias.find(x => x.id === id);
      if (m) {
        const li = document.createElement('li');
        li.textContent = m.nombre;
        ulReg.appendChild(li);
      }
    });
    tooltip.appendChild(ulReg);
  }

  if (faltanAprobar.length > 0) {
    const pApr = document.createElement('p');
    pApr.className = 'subject-card__tooltip-titulo';
    pApr.textContent = 'Te falta aprobar:';
    tooltip.appendChild(pApr);

    const ulApr = document.createElement('ul');
    faltanAprobar.forEach(id => {
      const m = materias.find(x => x.id === id);
      if (m) {
        const li = document.createElement('li');
        li.textContent = m.nombre;
        ulApr.appendChild(li);
      }
    });
    tooltip.appendChild(ulApr);
  }

  return tooltip;
}

function cerrarTooltipsAbiertos(excepto = null) {
  document.querySelectorAll('.subject-card--tooltip-visible').forEach(card => {
    if (card !== excepto) card.classList.remove('subject-card--tooltip-visible');
  });
}

document.addEventListener('click', () => cerrarTooltipsAbiertos());

function construirCard(materia) {
  const estado = obtenerEstado(materia);
  const card   = document.createElement('article');

  card.className = `subject-card subject-card--${estado}`;
  card.setAttribute('role',     'button');
  card.setAttribute('tabindex', estado === 'locked' ? '-1' : '0');
  card.setAttribute('aria-label', materia.nombre);

  const idEl = document.createElement('span');
  idEl.className = 'subject-card__id';
  idEl.textContent = `#${materia.id}`;
  idEl.setAttribute('aria-hidden', 'true');
  card.appendChild(idEl);

  const nombreEl = document.createElement('span');
  nombreEl.textContent = materia.nombre;
  card.appendChild(nombreEl);

  if (estado === 'locked') {
    card.appendChild(construirTooltipFaltantes(materia));

    card.addEventListener('click', e => {
      e.stopPropagation();
      cerrarTooltipsAbiertos(card);
      card.classList.toggle('subject-card--tooltip-visible');
    });
  } else {
    const togglear = () => {
      avanzarEstado(materia.id, materia);
      const nuevoEstado = obtenerEstado(materia);
      
      let msg = '';
      if (nuevoEstado === 'regular') msg = `${materia.nombre} → Regular`;
      else if (nuevoEstado === 'approved') msg = `${materia.nombre} → Aprobada`;
      else msg = `${materia.nombre} → Puede cursar`;

      mostrarToast(msg, 'info');
      render();
      actualizarProgreso();
    };

    card.addEventListener('click', togglear);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        togglear();
      }
    });
  }

  return card;
}

export function render() {
  const grid = document.getElementById('main-grid');
  grid.innerHTML = '';

  for (const bloque of estructuraCurricular) {
    const col = document.createElement('div');
    col.className = 'year-column';

    const heading = document.createElement('h2');
    heading.className   = 'year-heading';
    heading.textContent = bloque.nivel;
    col.appendChild(heading);

    for (const n of bloque.nivelesNum) {
      for (const materia of materias.filter(m => m.nivel === n)) {
        col.appendChild(construirCard(materia));
      }
    }

    grid.appendChild(col);
  }
}