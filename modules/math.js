// factorial function

function fact(num) {
  let result = 1;
  if (num < 0 || num == null) {
    return "Please enter a positive number !";
  } else if (num === 0) {
    return 1;
  } else {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

// prime number function

function primeNum(num) {
  if (num == null) {
    return "Fuck! Enter a number to calculate.";
  } else if (num < 0 || num === 0) {
    return "Enter a positive number !";
  } else {
    for (let i = 2; i < num / 2; i++) {
      if (num % i === 0) {
        return { isPrime: false, message: "Not Prime Number" };
      }
    }
    return { isPrime: true, message: "Prime Number" };
  }
}

// palindrome function

function palindrome(num){

}
export { fact, primeNum };