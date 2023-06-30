
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

let booleano;
if (argv.completado === 'true' || argv.completado === 'false' || argv.descripcion != "") {

    if (argv.completado === 'true') {
        booleano = true;
    } else {
        booleano = false;
    }

    switch ( comando ) {
        case 'crear':
            let tarea = porHacer.crear( argv.descripcion );
            console.log(tarea);
            break;
    
        case 'listar':
        let estado;
        let estado2;

        let listado = porHacer.getListado(booleano);

        if(listado.length === 0 ){
            console.log(`======== No tienes tareas ========`.green);
        } else if (listado.length > 0){
        
            if (booleano) {
                estado = 'Tareas realizadas';
                estado2 = 'Realizada';
            } else {
                estado = 'Tareas pendiente';
                estado2 = 'Pendiente';
            }
    
            console.log(`======== ${ estado } ========`.blue);
            
            for (const tarea of listado) {
                console.log (`Descripción:`, tarea.descripcion.green);
                console.log(`Estado: `, `${ estado2}`);
            }
            
            console.log('==========================='.blue);
        break;
        }  
        
        case 'actualizar':
            let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
            console.log(actualizado);
            break
    
        case 'borrar':
            let borrado = porHacer.borrar(argv.descripcion);
            console.log(borrado);
            break;
    
        default:
            console.log('Comando no reconocido');
    }

} else {
    console.log('Parametro no reconocido');   
}

