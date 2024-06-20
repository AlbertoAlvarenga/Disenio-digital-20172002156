//EJERCICIOS
//1. Dado el siguiente listado de objetos: Genere una lista que contenga solo
// los autores de dicha lista en una variable llamada: autores. 
const libros = [{titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967},
    {titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605},
    {titulo: "1984", autor: "George Orwell", año: 1949 }
  ];
  const autores = [];

  for (let i = 0; i < libros.length; i++) {
    autores.push(libros[i].autor);
  }
  
  console.log(autores);

//2. Modifique el valor del salario, siempre y cuando la antigüedad sea mayor a 5 años, el aumento será del 10%. 
//Imprima los nuevos valores. 
const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };

if (empleado.antiguedad > 5) {
    empleado.salario *= 1.10; // 10% de incremento
  }
  
  console.log(`Nombre: ${empleado.nombre}`);
  console.log(`Salario: ${empleado.salario}`);
  console.log(`Antigüedad: ${empleado.antiguedad} años`);

//3. Imprima el número mayor de la lista (sin ordenarla)
const numeros = [5, 8, 12, 3, 7, 19, 1, 10,  2] 
let maximo = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maximo) {
    maximo = numeros[i];
  }
}

console.log(`El número mayor en la lista es: ${maximo}`);

//4. . Con el listado anterior, calcule el promedio de todos los números impares
let sumaImpares = 0;
let cantidadImpares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2!== 0) {
    sumaImpares += numeros[i];
    cantidadImpares++;
  }
}

const promedioImpares = sumaImpares / cantidadImpares;

console.log(`El promedio de los números impares es: ${promedioImpares}`);

//5. Desestructure el objeto para extraer los valores en 3 variables diferentes y mostrarlas en consola. 
const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };

            const { nombre, edad, ciudad } = persona;

            console.log(`Nombre: ${nombre}`);
            console.log(`Edad: ${edad}`);
            console.log(`Ciudad: ${ciudad}`);