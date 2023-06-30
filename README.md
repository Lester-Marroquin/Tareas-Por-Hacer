
## Tareas Por Hacer App

Esta aplicación crear un archivo .JSON con tareas por hacer, donde se puede crear, listar y actualizar las tareas ingresadas; se utiliza Yargs para la introducción de datos.

#### Instalar paquetes de npm
````
npm install
````

#### Instrucciones
Para utilizar la aplicación, abrir una ventana de consola e introducir:

#### Para Crear una tarea
````
node app crear -d "Comer"
````

>Donde "Comer" representa la descripción de la tarea a crear

#### Para Actualizar una tarea
````
node app actualizar -d "Comer" -c true
````
>Para actualizar el estado a completado de una tareas, se debe de introducir la descripcion ingresada exactamente igual, por defecto el parametro -c ya contiene el valor de true, por lo cual se puede omitir true al final (esto para indicar que ya esta completada), si una tarea se colocara como pendiente debe de introducise false al final
>>node app actualizar -d Comer -c false

#### Para Borrar una tarea
````
node app borrar -d "Cierre"
````
Como respuesta se obtendra un favor "true" en caso de haberse eliminado correctamente la tarea


#### Para Listar las tareas
Mostrar las tareas pendientes:
````
node app listar -c false
````
El resultado seria:

>======== Tareas pendiente ========

>Descripción: Controles

>Estado:  Pendiente

>===========================

Mostrar las tareas completadas
````
node app listar -c true
````
El resultado seria:

>======== Tareas realizadas ========

>Descripción: Cierre

>Estado:  Realizada

>Descripción: Pasear al perro

>Estado:  Realizada

>===========================
