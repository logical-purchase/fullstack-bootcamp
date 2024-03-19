// Imprimir registros en la consola del navegador
console.log('Hola mundo')

// Declaración y asignación de variable (Se puede cambiar su valor)
let firsName = 'Pablo'

// Declaración y asignación de constante (No se puede cambiar su valor)
const lastName = 4

// Imprimir el valor de una viariable en la consola
console.log(firsName)

/* Cambiando el valor de la variable de cadena a entero (tipado débil y dinámico)
Esto significa que Javascript puede cambiar el tipo de dato de la variable según el  valor que se le asigne
Tipos de datos:
- numeric
- string
- bool
- undefined
- null
- BigInt 
- Symbol
*/
firsName = 3
console.log(firsName)
firsName = 'Pablo'
const firtsNameWithUppercase = firsName.toUpperCase()
console.log(firtsNameWithUppercase)