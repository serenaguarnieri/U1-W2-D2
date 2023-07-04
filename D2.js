/* ESERCIZIO 1 v
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const number1 = 11;
const number2 = 99;
console.log(number1 > number2);
console.log(number2 > number1);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2 v
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const numberh = 7;
if (numberh != 5);
{
  console.log("not equal");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3 v
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è 
  perfettamente divisibile per 5 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numberf = 25;
{
  console.log(numberf % 5);
}
/* ESERCIZIO 4 v
  Scrivi un algoritmo per verificare che, dati due numeri interi, 
  il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const numberc = 8;
const numberd = 10;
{
  // console.log(numberc or numberd === 8);
  console.log(numberc + numberd === 8);
  console.log(numberc - numberd === 8);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 55;

if (totalShoppingCart > 50) {
  console.log("totalShoppingCart");
} else if (totalShoppingCart > 50) {
  console.log("totalShoppingCart + 10");
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (totalShoppingCart > 50) {
  console.log("totalShoppingCart-20%");
} else if (totalShoppingCart > 50) {
  console.log("totalShoppingCart -20% + 10");
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8 v
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
george = 8;
{
  console.log(typeof george);
}
// /* SCRIVI QUI LA TUA RISPOSTA */ v

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const numbere = 11;
{
  console.log(numbere % 2);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10 v 
  // Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

let val = 3;
if (val < 10)
  if (val > 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11 v
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const superhero = {
  name: "John",
  lastName: "Doe",
  city: "Toronto",
};
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

{
  console.log(superhero);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
arr.splice(arr.length - 1, 1, 100);
arr[arr.length - 1] = 1000;
console.log(arr);

/* SCRIVI QUI LA TUA RISPOSTA */
