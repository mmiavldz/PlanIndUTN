const STORAGE_KEY = 'ing_industrial_plan_v1';

let estadosMaterias = {};

export function cargarEstado() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    estadosMaterias = raw ? JSON.parse(raw) : {};
  } catch {
    estadosMaterias = {};
  }
}

function guardarEstado() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estadosMaterias));
  } catch {}
}

export function avanzarEstado(id, materia) {
  const actual = obtenerEstado(materia);

  if (actual === 'locked') return;
  
  if (actual === 'available') {
    estadosMaterias[id] = 'regular';
  } else if (actual === 'regular') {
    estadosMaterias[id] = 'approved';
  } else if (actual === 'approved') {
    delete estadosMaterias[id];
  }
  
  guardarEstado();
}

export function esAprobada(id) {
  return estadosMaterias[id] === 'approved';
}

export function esRegular(id) {
  return estadosMaterias[id] === 'regular' || estadosMaterias[id] === 'approved';
}

export function cantAprobadas() {
  return Object.values(estadosMaterias).filter(e => e === 'approved').length;
}

export function estaDisponible(materia) {
  const regularesOk = materia.regular.every(id => esRegular(id));
  const aprobadasOk = materia.aprobada.every(id => esAprobada(id));

  return regularesOk && aprobadasOk;
}

export function obtenerEstado(materia) {
  const guardado = estadosMaterias[materia.id];
  if (guardado === 'approved') return 'approved';
  if (guardado === 'regular') return 'regular';
  
  if (estaDisponible(materia)) return 'available';
  
  return 'locked';
}

export function correlativasFaltantes(materia) {
  const faltanRegular = materia.regular.filter(id => !esRegular(id));
  const faltanAprobar = materia.aprobada.filter(id => !esAprobada(id));

  return { faltanRegular, faltanAprobar };
}

export function resetearProgreso() {
  estadosMaterias = {};
  guardarEstado();
}