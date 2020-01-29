## Chrome V8
- Traduce JSa lenguaje de bajo nivel
- Ejecuta el código en la computadora

## Node
- Es un entorno de ejecucion
    Node le da a JS todas las funcionalidades que no tiene (por ejemplo, escribir en disco).
- Modelo liviano manejado por eventos NO bloqueantes
    Tiene un solo hilo de ejecucion, por lo tanto pude hacer una sola cosa a la vez. Por eso maneja una PILA DE TAREAS (TASK STACK) LIFO (Last In - First Out).

        tarea1(
            tarea2(
                tarea3();
            );
        );

        <-- tarea3 --> tarea2 , tarea1
        y = 2 + (5 * 6)
- Las APIS son las que complementan a JS
    Cuando NODE se da cuenta de que hay algo que JS no puede resolver, llama a las API

# 

NPM es la libreria mas grande del mundo de paquetes

npm init ---> Inicializa un proyecto en Node. Inicia un formulario interactivo

MODULOS de NODE --> nodejs.org
MODULOS de TERCEROS --> npmjs.org
 
El navegador por defecto **NO EJECUTA** archivos .js
Por CONVENCION en node se llama a la variable de la misma manera que el modulo (Ej: const http = require('http'))

Un objeto literal en Javascript, a diferencia de un array que solo contiene datos, el objeto tiene pares clave-valor

en el package.json se puede declarar por ejemplo "dev: nodemon" y ejecutar 'npm run dev' y va a ejecutar lo que declaremos en dev: