import { cargarEstado } from './state.js';
import { render, actualizarProgreso } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  cargarEstado();
  render();
  actualizarProgreso();
});
