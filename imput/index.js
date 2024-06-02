import {registrar, leer } from './operaciones.js';

const [accion, id, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)


if(accion === 'registrar'){
    registrar (id, nombre, edad, tipo, color, enfermedad);
}

if(accion === 'leer'){
    leer();
}

