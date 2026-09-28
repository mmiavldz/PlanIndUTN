# Plan de Estudios — Ingeniería Industrial (UTN)

Un mapa interactivo de las correlativas de la carrera. Útil para saber qué materias te están trabando y ver visualmente tu avance.

IMPORTANTE: La carrera se dicta en la Universidad Tecnológica Nacional (UTN) de Córdoba. Este proyecto se basa en la malla curricular vigente y contempla la separación de requisitos para cursar y para rendir finales.

## Qué hace

- Muestra las 42 materias del plan organizadas por sus 5 niveles.
- Soporta los 4 estados de la carrera según las correlativas:
  - **Aún no puede cursar**: Bloqueada por falta de correlativas (cursadas o aprobadas).
  - **Puede cursar**: Habilitada para cursar según las exigencias del plan.
  - **Regular**: Materia cursada/regularizada (desbloquea las correlativas que solo exigen regularidad).
  - **Aprobada**: Final o promoción aprobada (desbloquea las correlativas que exigen final).
- Al hacer click en una materia, va pasando por sus distintos estados y el progreso queda guardado en el navegador (`localStorage`), así que no se pierde al recargar la página.
- Si pasás el mouse (o tocás en celular) sobre una materia todavía bloqueada, te muestra un cartel con el detalle de las correlativas que te faltan (ya sea para regularizar o para rendir).
- Barra de progreso interactiva con la cantidad de materias aprobadas sobre el total.

## Cómo usarlo

No hace falta instalar nada ni levantar un servidor. Es HTML, CSS y JavaScript puro (sin frameworks ni build), así que alcanza con abrir `index.html` en el navegador.

## Estructura del proyecto
```
├── index.html
├── css/
│ ├── tokens.css variables de diseño (colores, espaciados, tipografía)
│ ├── base.css reset y estilos base
│ ├── layout.css estructura general de la página
│ ├── components.css estilos de cards, tooltip, progreso, toast, etc.
└── js/
├── app.js punto de entrada, inicializa todo
├── data.js listado de materias y sus correlativas
├── state.js lógica de estado: qué está aprobado, disponible o bloqueado
├── ui.js construcción del DOM a partir del estado
```
La separación es intencional: las materias y sus correlativas viven en `js/data.js`. Cada materia tiene esta forma:
```js
{ id: 17, nivel: 3, nombre: 'Costos y Presupuestos', regular: [10, 14], aprobada: [1, 4, 5, 7, 8] }
```

- regular: Arreglo con los id de las materias que se exige tener regularizadas/cursadas.

- aprobada: Arreglo con los id de las materias que se exige tener aprobadas con final.

Así, si el día de mañana cambia el plan de estudios, alcanza con modificar data.js.

## Aviso

Este es un proyecto hecho para uso personal, sin vínculo oficial con la universidad. 
