import { fact, primeNum } from './math.js'

// prime number

const prime0 = primeNum();
const prime1 = primeNum(-1);
const prime2 = primeNum(0);
const prime3 = primeNum(1);
const prime4 = primeNum(2);
const prime5 = primeNum(4);
const prime6 = primeNum(40);
const prime7 = primeNum(21);
const prime8 = primeNum(39);

const printPrime = {
  prime0,
  prime1,
  prime2,
  prime3,
  prime4,
  prime5,
  prime6,
  prime7,
  prime8,
};
console.log(printPrime);

// factorial

const fact0 = fact(0);
const fact1 = fact(-1);
const fact2 = fact(5);

const printFact = {
    factorial1:fact0,
    factorial2:fact1,
    factorial3:fact2,
};

console.log(printFact);