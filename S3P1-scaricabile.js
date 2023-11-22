/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma
 moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let crazySum = (a, b)=>{
    let sum;
    if(a === b){
        sum = (a+b) *3;
    }else{
        sum = a+b;
    }
    console.log(sum);
}

let one = 10;
let two = 10;

crazySum(one, two);

*/


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso
 tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let boundary = (a)=>{

    if(a >= 0){

        let value;

        if(a >=20 && a <= 100 || a === 400){
            console.log("Il numero è compreso fra 20 e 100 o uguale a 400.");
            value = true;
        }else{
            console.log("il numero non corrisponde ai requisiti richiesti");
            value = false;
        }
        console.log(value);
    }else{
        console.log("Si accettano soltanto numeri interi.")
    }
}

let num = 19;

boundary(num);

*/


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let string = "CAVALLO";

let reverseString = (a)=>{
    let arr = a.split("");
    let rev = arr.reverse();
    let out = rev.join("");
    console.log(out);
}

reverseString(string);

*/


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera
 iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let upperFirst = (a)=>{

    let spl = a.split(" ");
    let lost = [];
    let complete;

    for(i=0; i < spl.length; i++){

        let upp = spl[i].charAt(0).toUpperCase();
        let other = spl[i].slice(1, (spl[i].length)).toLowerCase();
        complete = upp + other;
        lost.push(complete);
        output = lost.join(" ");
    }
    
    console.log(output);
};

let str = "uN cAro saLuto agLi amIci di ePicodE";

upperFirst(str);

*/


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri
 random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let giveMeRandom = (n) => {
    let array = [];
    for(i = 0; i < n; i++){
      array.push(Math.floor(Math.random() * 10 ));    
    }
    console.log(array);
  }
  
let n = 10;
  
giveMeRandom(n);

*/


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let area = (l1, l2)=>{
    let rettangolo = l1*l2;
    console.log("L'area calcolata è di " + rettangolo);
}

a = 5;
b = 9;

area(a, b);

*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/*

let crazyDiff = (x)=>{

    let diff = x-19;

    if(x < 0){
        x = x * -1;
        console.log("x = " + x);
    }

    if(diff > 19){
        diff = diff * 3;
    }
    console.log(diff);
}

let n = -40;

crazyDiff(n);

*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita
 comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let codify = (string)=>{
    
    let verify = string.split("").splice(0, 4);

    if(verify.join("") === "code"){
        console.log(string);
    }else{
        string = "code" + string;
        console.log(string);
    }
}
 let a = "codesta";
 let b = "barcode";

 codify(a);

*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let output;

let check3and7 = (n)=>{
    if(n % 3 === 0 || n % 7 === 0){
        output = true;
    }else{
        output = false;
    }
    console.log(output);
}

let val = 14;

check3and7(val);

*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/ 

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let cutString = (string)=>{
    let first = string.split("");
    let second = first.slice(1, (string.length - 1));
    console.log(second.join(""));
}

let input = "ragazzo";

cutString(input);

*/