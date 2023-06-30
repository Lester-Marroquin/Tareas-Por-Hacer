const fs = require('fs');

let listadoPorHacer = [];

const guardaDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo guarda la tarea', err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');    
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = (completado) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(
        tarea => tarea.completado === completado
    );

    return nuevoListado;
}

const crear = (descripcion) => {

    cargarDB();
    
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer);

    guardaDB();
    
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {

    let booleano;
    if (completado === 'true') {
        booleano = true;
    } else if (completado === 'false') {
        booleano = false;
    } else {
        return false;
    }

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0 ) {
        listadoPorHacer[index].completado = booleano;
        guardaDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(
        tarea => tarea.descripcion !== descripcion
    );

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardaDB();
        return true;
    }
}

module.exports = { 
    crear,
    getListado,
    actualizar,
    borrar
}