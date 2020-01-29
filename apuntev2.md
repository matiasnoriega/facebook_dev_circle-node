# Fundamentos de Testing

## ¿Que es testing?
Poner a prueba un codigo para verificar si cumple con los requerimientos

## Tipos de Testing
### Unit Test
* Objetivo: validar la funcionalidad del codigo aislado
* Consiste en testear la salidad de una "unidad" (funcion pura)
* no dependen de otros recursos (DB)
### Test de Integracion
* Objetivo: verificar el fluo de datos y la interaccion de los componentes
* testear el comportamiento de dos o mas unidades juntas, es un test de integracion
### End to End
* Verificar el comportamiento cconjunto de toda la aplicacion
* Se utiliza poco si ya se si hucieron los unitarios y de integracion
* Son costosos y demandan tiempo
## Ventajas
* Automatización
* Ahorro de tiempo (y dinero)
* Seguridad para continuar desarrollando
## Forma de trabajo
### Habitual
1. Diseño
2. Codigo
3. Test
### Ideal
1. Diseño
2. Test
3. Codigo
