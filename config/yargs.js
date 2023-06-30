const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea'
};

const argv = require ('yargs')
.command('crear', 'Crea una tarea por realizar', {
    descripcion
})
.command('actualizar', 'Actualiza el estado de la tareas', {
    descripcion,
    completado
})
.command('borrar', 'Borra una tarea', {
    descripcion
})
.command('listar', 'Lista una tarea completada o pendiente', {
    completado
})
.help()
.argv;

module.exports = {
    argv
}