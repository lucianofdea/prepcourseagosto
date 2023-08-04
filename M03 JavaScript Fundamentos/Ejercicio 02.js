/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}
devolverString('Hola suy un string')

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var sumados = x + y;
   return sumados;
}
suma(5,4);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resto = x - y;
   return resto;
}
resta(7,6);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var division = x / y;
   return division;
}
divide(10,2);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var multiplicacion = x * y;
   return multiplicacion;
}
multiplica(3,8);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var resto = x % y;
   return resto;
}
obtenerResto(10,2);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
