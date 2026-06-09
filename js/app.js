const nombreEvento = 'React Summit Alajuela'; //string
const cuposTotales = 50; //number
const activo = true; //boolean
let organizador = null; //null
let observacion; // undefined

/*
let cuposDisponibles = 35;
cuposDisponibles--;
console.log('Cupos disponibles', cuposDisponibles); //intercolación de Strings

let prueba = nombreEvento + cuposTotales;
console.log('Prueba: ', prueba);

console.log(typeof nombreEvento);
console.log(typeof cuposTotales);
console.log(typeof activo);
console.log(typeof observacion);

let x = '3';
let y = '3';

console.log(typeof x);
console.log(typeof y);

x = 'Nuevo';

console.log(
  'El evento ' +
    nombreEvento +
    ' tiene' +
    cuposDisponibles +
    ' cupos disponibles',
);
console.log(
  `el evento ${nombreEvento} tiene ${cuposDisponibles} cupos disponibles`,
);

/*Operadores matemáticos

let inscritos = 15;
cuposDisponibles = cuposTotales - inscritos;
console.log(cuposDisponibles);

console.log('Operadores lógicos');
const modalidad = 'Presencial';
if (cuposDisponibles > 0 && activo)
  console.log('El evento permite inscripción');

if (modalidad === 'Virtual' || modalidad === 'Híbrido') {
  console.log('El evento permite participación en línea');
}

console.log('Condicion Simple');
if (cuposDisponibles > 0) {
  console.log('Inscripción disponible');
} else {
  console.log('Evento lleno');
}

console.log('Condición múltiples');
if (cuposDisponibles > 10) {
  console.log('Disponible');
} else if (cuposDisponibles > 0) {
  console.log('Pocos cupos');
} else {
  console.log('Evento lleno');
}
*/

/* const evento = {
  id: 1,
  nombre: 'React summit Alajuela',
  categoria: 'Desarrollo Web',
  modalidad: 'Presencial',
  cuposTotales: 50,
  inscritos: 15,
  activo: true,
}; */

const eventos = [
  {
    id: 1,
    nombre: 'React summit Alajuela',
    categoria: 'Desarrollo Web',
    modalidad: 'Presencial',
    cuposTotales: 50,
    inscritos: 15,
    activo: true,
    estado: '',
  },
  {
    id: 2,
    nombre: 'Foro de Inteligancia Artificial Aplicada',
    categoria: 'Inteligencia Artificial',
    modalidad: 'Híbrida',
    cuposTotales: 50,
    inscritos: 42,
    activo: true,
    estado: '',
  },
  {
    id: 3,
    nombre: 'Introducción a la Ciberseguridad',
    categoria: 'Ciberseguridad',
    modalidad: 'Presencial',
    cuposTotales: 25,
    inscritos: 25,
    activo: true,
    estado: '',
  },
  {
    id: 4,
    nombre: 'Bootcamp de Desarrollo Móvil con Flutter',
    categoria: 'Desarrollo Móvil',
    modalidad: 'Virtual',
    cuposTotales: 80,
    inscritos: 35,
    activo: true,
    estado: '',
  },
  {
    id: 5,
    nombre: 'Cloud Computing Essentials',
    categoria: 'Computación en la Nube',
    modalidad: 'Híbrida',
    cuposTotales: 40,
    inscritos: 38,
    activo: false,
    estado: '',
  },
];
/*Definir disponibilidad */
for (const evento of eventos) {
  const disp = evento.cuposTotales - evento.inscritos;
  if (disp > 10) {
    evento.activo = 'Disponible';
  } else if (disp <= 10 && disp >= 1) {
    evento.activo = 'Pocos Cupos';
  } else {
    evento.activo = 'Evento lleno';
  }
}

/*Definir activo */
for (const evento of eventos) {
}

/*Mostrar eventos */
console.log(
  '--------------------REPORTE DE EVENTOS TECHEVENTS--------------------',
);
for (const evento of eventos) {
  resultActivo = '';
  if ((evento.activo = true)) {
    resultActivo = 'Si';
  } else {
    resultActivo = 'No';
  }
  console.log(`Evento   : ${evento.nombre}`);
  console.log(`Categoría: ${evento.categoria}`);
  console.log(`Modalidad: ${evento.modalidad}`);
  console.log(`Cupos Disponibles: ${evento.cuposTotales - evento.inscritos}`);
  console.log(`Activo  : ${resultActivo}`);
  console.log('- - - - - - - - - - - - - - - - ');
}
console.log('-----------------------------------------------');

/** 
    ];
    console.log(eventos[1].nombre);
    for (let i = 0; i < eventos.length; i++) {
      console.log(eventos[i].nombre);
    }
    for (const item of eventos) {
      console.log(item.nombre);
    }
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object.key)) {
      }
    }
*/
