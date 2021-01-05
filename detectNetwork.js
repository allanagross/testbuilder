

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
  let cardNumberArr = cardNumArr.map(num => Number(num));
  let cardName = ''
  if((cardNumber.slice(0, 2) === '39' || cardNumber.slice(0, 2) === '38') && (cardNumArr.length === 14)){
    cardName = "Diner's Club";
  }else if((cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37') && (cardNumber.length === 15)){
    cardName = 'American Express';
  }else if((cardNumArr[0] === '4') && (cardNumber.length === 19 || cardNumArr.length === 16 || cardNumArr.length === 13)){
    cardName = 'Visa';
  }else if((cardNumber.slice(0, 2) === '51' || cardNumber.slice(0, 2) === '52' || cardNumber.slice(0, 2) === '53' || cardNumber.slice(0, 2) === '54' || cardNumber.slice(0, 2) === '55') && (cardNumArr.length === 16)){
    cardName = 'MasterCard';
  }else if((cardNumber.slice(0, 4) === '6011') || (cardNumber.slice()) && (cardNumArr.length === 16 || cardNumArr.length === 19)){
    cardName = 'Discover';
  }else if((cardNumber.slice(0, 4) === '5018' || cardNumber.slice(0, 4) === '5020' || cardNumber.slice(0, 4) === '5038' || cardNumber.slice(0, 4) === '6304') && (cardNumArr.length >= 12 || cardNumArr <= 19)){
    cardName = 'Maestro';
  }else if((cardNumberArr.slice(0, 6).join('') >= 622126 && cardNumberArr.slice(0, 6).join('') <= 622925) || (cardNumberArr.slice(0, 3).join('') >= 624 && cardNumberArr.slice(0, 3).join('') <= 626) || (cardNumberArr.slice(0, 4).join('') >= 6282 && cardNumberArr.slice(0, 4).join('') <= 6288) && (cardNumber.length >= 16 && cardNumber.length <= 19)){
    cardName = 'China UnionPay';
  }
  return cardName;
};


// ignore
typeof module !== 'undefined' && (module.exports = detectNetwork);
