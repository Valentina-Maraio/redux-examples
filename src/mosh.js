//import from lodash
import { compose, pipe } from 'lodash/fp';

//corso redux
//una funzione che restituisce una stringa
function sayHello(){
    return "Hello World!"
}
//assegno alla variabile fn la funzione sayHello
let fn = sayHello;
//ora posso chiamare la variabile fn
//come se fosse una funzione
fn();

//passare una funzione come argomento
//di un altra funzione
function greet(fnMessage) {
    console.log(fnMessage());
}

//chiamo greet (che è una funzione)
//e come argomento gli assegno sayHello
//(che è una funzione)
greet(sayHello);

//scrivo una funzione che restituisce una funzione
function sayHelloAgain(){
    //restituisce una funzione anomima (cioè senza nome)
    return function() {
        return "hello world"
    }
}

//richiama la funzione anonima
let fnAgain = sayHelloAgain();
let message = fnAgain();

console.log(message);



function greetAgain(fnAgainAgain){
    console.log(fnAgainAgain());
}
//High-order functions
/* funzione di ordine superiore
sono funzioni che restituiscono una funzione
e/o hanno come argomento una funzione */
function sayBye() {
    return function() {
        return "Bye bye"
    };
}
console.log(greetAgain);
console.log(sayBye);

let numbers = [1, 2, 3];
numbers.map(number => number *2);
//map è una funzione di orgine superiore perchè 
//prende come argomento una funzione (freccia)

//setTimeout è una funzione di ordine superiore.
setTimeout( () => console.log("Hello"), 1000);

//function composition

//non functional problem
let input = " JavaScript ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
//così oppure
const wrapInDivEsempio1 = str => "<div>" + str + "</div>";
//così
const wrapInDivEsempio2 = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

//questa funzione composta si legge da destra a sinistra
const result = wrapInDivEsempio2(toLowerCase(trim(input)));
//come non avere tutte queste parentesi


//Composing and piping
 //using lodash to simplify the code
 //Lodash = utility library for javascript

//riscriviamo
//compose prende come argomenti le tre funzioni ma senza richiamarle
//le compone in una unica funzione
const transform = compose(wrapInDivEsempio1, toLowerCase, trim);
transform(input);

//però continuano a leggersi da destra a sinistra
//per risolvere questo problema uso pipe

const transformAgain = pipe(trim, toLowerCase, wrapInDivEsempio1);
transformAgain(input);

//Currying
