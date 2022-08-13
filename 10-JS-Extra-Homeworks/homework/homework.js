// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

var Matriz = Object.keys(objeto).map(function (key) {return [(key), objeto[key]];});
return Matriz;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter 
  //con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

// metodo 1 para encontrar ocurrencias
//var count = (string.match(/d/g) || []).length;
let NewObject ={};

for (var i = 0; i < 9; i++) {
   NewObject[i] = (string.charAt(i))  +": "+ find_occurences(string,string.charAt(i)) ;
  }

let Resultado = NewObject;

   return Object.values(Resultado); 


//count = find_occurences(string,"w");

function find_occurences(str, char_to_count){
    return str.split(char_to_count).length - 1;
}

//return count;

}






function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
let minusculas ="";
let mayusculas ="";

for (let i = 0; i < s.length; i++){
    let letra = s.charAt(i);
    if (letra == letra.toUpperCase()){mayusculas = mayusculas + letra}
    else {minusculas = minusculas + letra}
   
}
return (mayusculas + minusculas); 



}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo 
  //tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
let NewSentence =""
let ReversedWord ="";
let SplittedWord= "";
let CompleteWord="";
let SplittedString =str.split(" ");


for (let i =0; i< SplittedString.length; i++){
   SplittedWord = SplittedString[i].split("");
   ReversedWord = SplittedWord.reverse();
   CompleteWord = ReversedWord.join("");
    
    NewSentence = (NewSentence + CompleteWord +" ");
 
}


return NewSentence.trim();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
var Cadena = numero.toString();
var SplitString = Cadena.split("")
var ReversedStr = SplitString.reverse();
var JoinStr = ReversedStr.join("");

if (JoinStr == Cadena){return "Es capicua"} else {return "No es capicua"};

  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

