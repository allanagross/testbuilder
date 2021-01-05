

/**
 * Given a credit card number, this function should return a string
 * with the name of a network, like 'MasterCard' or 'American Express'
 *
 * Example: detectNetwork('343456789012345') should return 'American Express'
 *
 * How can you tell one card network from another? Easy!
 * There are two indicators:
 *   1. The first few numbers (called the prefix)
 *   2. The number of digits in the number (called the length)
 *
 * Note: `cardNumber` will always be a string
 *
 * The Diner's Club network always starts with a 38 or 39 and is 14 digits long
 * The American Express network always starts with a 34 or 37 and is 15 digits long
 *
 * Once you've read this, go ahead and try to implement this function, then return to the console.
 */
const detectNetwork = (cardNumber) => {
  let cardNumArr = cardNumber.split('');
  let cardName = ''
  if(cardNumArr[1] === '8' || cardNumArr[1] === '9' && cardNumArr.length === 14){
    cardName = "Diner's Club";
  }else if(cardNumArr[1] === '4' || cardNumArr[1] === '7' && cardNumArr.length === 15){
    cardName = 'American Express';
  }else if((cardNumArr[0] === '4') && (cardNumArr.length === 19 || cardNumArr.length === 16 || cardNumArr.length === 13)){
    cardName = 'Visa';
  }else if((cardNumArr.slice(0, 2) === '51' || cardNumArr.slice(0, 2) === '52' || cardNumArr.slice(0, 2) === '53' || cardNumArr.slice(0, 2) === '54' || cardNumArr.slice(0, 2) === '55') && (cardNumArr.length === 16)){
    cardName = 'Mastercard';
  }else if(cardNumArr[0] === '6' && cardNumArr.length === 16 || cardNumArr.length === 19){
    cardName = 'Discover';
  }else if(cardNumArr.slice(0, 4) === '5018' || cardNumArr.slice(0, 4) === '5020' || cardNumArr.slice(0, 4) === '5038'){

  }
  return cardName;
};


// ignore
typeof module !== 'undefined' && (module.exports = detectNetwork);
