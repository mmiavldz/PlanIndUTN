export const materias = [
  // ==================== 1 AÑO ====================
  { id: 1,  nivel: 1, nombre: "Análisis Matemático I", regular: [], aprobada: [] },
  { id: 2,  nivel: 1, nombre: "Química General", regular: [], aprobada: [] },
  { id: 3,  nivel: 1, nombre: "Sistemas de Representación", regular: [], aprobada: [] },
  { id: 4,  nivel: 1, nombre: "Informática I", regular: [], aprobada: [] },
  { id: 5,  nivel: 1, nombre: "Pensamiento Sistémico", regular: [], aprobada: [] },
  { id: 6,  nivel: 1, nombre: "Física I", regular: [], aprobada: [] },
  { id: 7,  nivel: 1, nombre: "Álgebra y Geometría Analítica", regular: [], aprobada: [] },
  { id: 8,  nivel: 1, nombre: "Ingeniería y Sociedad", regular: [], aprobada: [] },

  // ==================== 2 AÑO ====================
  { id: 9,  nivel: 2, nombre: "Análisis Matemático II", regular: [1, 7], aprobada: [] },
  { id: 10, nivel: 2, nombre: "Administración General", regular: [4, 5, 7, 8], aprobada: [] },
  { id: 11, nivel: 2, nombre: "Probabilidad y Estadística", regular: [1, 7], aprobada: [] },
  { id: 12, nivel: 2, nombre: "Ciencias de los Materiales", regular: [2, 6], aprobada: [] },
  { id: 13, nivel: 2, nombre: "Física II", regular: [1, 6], aprobada: [] },
  { id: 14, nivel: 2, nombre: "Economía General", regular: [1, 5, 8], aprobada: [] },
  { id: 15, nivel: 2, nombre: "Informática II", regular: [4], aprobada: [] },
  { id: 16, nivel: 2, nombre: "Inglés I", regular: [], aprobada: [] },

  // ==================== 3 AÑO ====================
  { id: 17, nivel: 3, nombre: "Costos y Presupuestos", regular: [10, 14], aprobada: [1, 4, 5, 7, 8] },
  { id: 18, nivel: 3, nombre: "Estudio del Trabajo", regular: [3, 10, 11], aprobada: [1, 3, 4, 5, 7, 8] },
  { id: 19, nivel: 3, nombre: "Comercialización", regular: [10, 11, 14], aprobada: [1, 4, 5, 7, 8] },
  { id: 20, nivel: 3, nombre: "Termodinámica y Máquinas Térmicas", regular: [2, 13], aprobada: [1, 6] },
  { id: 21, nivel: 3, nombre: "Estática y Resistencia de los Materiales", regular: [9, 12], aprobada: [1, 2, 6, 7] },
  { id: 22, nivel: 3, nombre: "Mecánica de los Fluidos", regular: [9], aprobada: [1, 6, 7] },
  { id: 23, nivel: 3, nombre: "Economía de la Empresa", regular: [10, 14], aprobada: [1, 4, 5, 7, 8] },
  { id: 24, nivel: 3, nombre: "Electrotecnia y Máquinas Eléctricas", regular: [13], aprobada: [1, 6] },
  { id: 25, nivel: 3, nombre: "Análisis Numérico y Cálculo Avanzado", regular: [9], aprobada: [1, 7] },

  // ==================== 4 AÑO ====================
  { id: 26, nivel: 4, nombre: "Seguridad, Higiene e Ing. Ambiental", regular: [18], aprobada: [10, 11] },
  { id: 27, nivel: 4, nombre: "Investigación Operativa", regular: [9, 11, 25], aprobada: [1, 7, 25] },
  { id: 28, nivel: 4, nombre: "Procesos Industriales", regular: [18, 20, 24], aprobada: [2, 10, 12, 13] },
  { id: 29, nivel: 4, nombre: "Mecánica y Mecanismos", regular: [9], aprobada: [1, 6, 7] },
  { id: 30, nivel: 4, nombre: "Evaluación de Proyectos", regular: [17, 18, 19, 23], aprobada: [10, 11, 14, 16] },
  { id: 31, nivel: 4, nombre: "Planificación y Control de la Producción", regular: [18], aprobada: [10, 11] },
  { id: 32, nivel: 4, nombre: "Diseño de Producto", regular: [15, 19], aprobada: [3, 4, 10, 11, 14] },
  { id: 33, nivel: 4, nombre: "Inglés II", regular: [16], aprobada: [] },
  { id: 34, nivel: 4, nombre: "Instalaciones Industriales", regular: [20, 21, 22, 24], aprobada: [2, 9, 12, 13] },
  { id: 35, nivel: 4, nombre: "Legislación", regular: [], aprobada: [10] },

  // ==================== 5 AÑO ====================
  { id: 36, nivel: 5, nombre: "Mantenimiento", regular: [34], aprobada: [20, 21, 24] },
  { id: 37, nivel: 5, nombre: "Manejo de Mat. y Dist. de Planta", regular: [18, 29], aprobada: [9, 10, 21] },
  { id: 38, nivel: 5, nombre: "Comercio Exterior", regular: [30], aprobada: [18, 19, 23] },
  { id: 39, nivel: 5, nombre: "Relaciones Industriales", regular: [18], aprobada: [10, 11] },
  { id: 40, nivel: 5, nombre: "Ingeniería en Calidad", regular: [18], aprobada: [10, 11] },
  { id: 41, nivel: 5, nombre: "Control de Gestión", regular: [17, 23], aprobada: [10, 14] },
  { id: 42, nivel: 5, nombre: "Proyecto Final", regular: [25, 26, 27, 28, 30, 31], aprobada: [18, 19, 20, 21, 22, 23, 24, 33] }
];

export const estructuraCurricular = [
  { nivel: '1 AÑO',   nivelesNum: [1] },
  { nivel: '2 AÑO',  nivelesNum: [2] },
  { nivel: '3 AÑO', nivelesNum: [3] },
  { nivel: '4 AÑO',  nivelesNum: [4] },
  { nivel: '5 AÑO',   nivelesNum: [5] },
];