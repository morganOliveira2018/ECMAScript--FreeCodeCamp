/* Desctructuring */

// Assign variables from objects
var box = {x: 3.6, y:7.4, z:6.54};
// var x = voxel.x; // x = 3.6
// var y = voxel.y; // y = 7.4
// var z = voxel.z; // z = 6.54

const {x, y, z} = box;
console.log(x);
const { x : a, y : b, z : c} = box;
console.log(a);
console.log(b);
console.log(c);

// Atribuir variaveis a objetos aninhados
// Assign variables from nested objects
const obj1 = {
    start: { x: 5 , y: 6},
    end: { z: 8, w: -9 }
};

// atribui o valor de x em startX e o mesmo ocorre entre y e startY
const { start: { x: startX, y: startY }} = obj1;
const { end: { z: startZ, w: startW }} = obj1;
console.log(startX); // startX = 5
console.log(startY); // startY = 6
console.log(startZ); // startZ = 8
console.log(startW); // startW = -9

// Atribuir variáveis para Matrizes de destrituração
// Assign Variables from Arrays
// const [q ,,,, r] =  [ 1, 2, 3, 4, 7];
// console.log(q,r);

// Rest Operator to Reassing Array Elements
// Operador de descanso para atribuir elementos da matriz
const [ q, r, ...rest ] = [ 1, 2, 3, 4, 7];
console.log(q,r);
console.log(rest);

// Pass an Object as function's Parameters
// Usando a Destruturação para passar um objeto como parâmetros de uma função

const profileData = {
    name: 'Morgana',
    age: 22,
    nationality: 'Brazilian',
    address: 'Rua Monsenhor Dourado, N° 25'
};

const profileUpdate = ({ name, age } = profileData ) => {
    console.log(name + ' and ' + age);
    // const { name, age, nationality, location } = profileData;
    // do something with these variables
}
profileUpdate();


// Example 2
function whois({displayName: displayName, fullName: {firstName: name}} = user ){
    console.log(displayName + " is " + name);
  }
  
var user = { 
    id: 42, 
    displayName: "MorganFrime",
    fullName: { 
        firstName: "Morgana",
        lastName: "Ribeiro"
    }
  };

// Calling the function
whois();
