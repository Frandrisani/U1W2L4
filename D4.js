/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  let a = l1 * l2;
  return a;
};
console.log(area(5, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (x, y) {
  let sum1;
  if (x === y) {
    sum1 = (x + y) * 3;
  } else {
    sum1 = x + y;
  }
  return sum1;
};
console.log(crazySum(5, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (x) {
  let diff1;
  if (x > 19) {
    diff1 = (x - 19) * 3;
  } else {
    diff1 = 19 - x;
  }
  return diff1;
};
console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(101));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (str) {
  if (str.indexOf("EPICODE") === 0) {
    return str;
  } else {
    return "EPICODE" + str;
  }
};
console.log(epify("EPICODE CIAO!"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (o) {
  let risposta;
  if ((o) => 1) {
    if (o % 3 === 0 || o % 7 === 0) {
      risposta = "è multiplo";
    } else {
      risposta = "non è multiplo";
    }
  } else {
    risposta = "inserisci numero positivo";
  }
  return risposta;
};
console.log(check3and7(6));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (contra) {
  return contra.split("").reverse().join("");
};
console.log(reverseString("Francesco"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (strg) {
  let singleparole = string.split(" ");
  //da finire
};

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (laString) {
  let nuevastring = laString.slice(1, -1);
  return nuevastring;
};
console.log(cutString("Zio"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  const ciccino = [];
  let randomic;
  for (let i = 0; i < n; i++) {
    randomic = Math.floor(Math.random() * 10 + 1);
    ciccino.push(randomic);
  }
  return ciccino;
};
console.log(giveMeRandom(7));
