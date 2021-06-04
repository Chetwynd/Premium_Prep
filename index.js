//Write the function detectNetwork. It should accept a string or a number for its cardNumber argument and, based on the provided cardData, return the //appropriate network string (or undefined if there's no match).


var cardData = [
  {
    'issuer/network': 'Visa',  // card issuer (network)
    prefixes: ['4'],	       // beginning digits
    lengths: [13, 16, 19]      // lengths of card numbers
  },
  {
    'issuer/network': 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },
  {
    'issuer/network': 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },
  {
    'issuer/network': 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  }
];

function detectNetwork(cardNumber, cardData) 
{
  // your solution here
  // input: cardNumber - string / number 
  // edge case
  // 
  // accumulator
  var network = '';

  // make sure that cardNumber is a string
  if(typeof cardNumber === 'number')
  {
    cardNumber = cardNumber.toString();
    console.log(cardNumber);
  }
  // check the first two digits of the cardnumber
    var firstIndex = cardNumber[0];
    var firstTwoIndexes = cardNumber[0] + cardNumber[1];
    
    // if the first index is 4 then it is possibly visa
    if(firstIndex === cardData[0]['prefixes'][0])
    {
     //if the cardnumber length is either 13,16, or 19 
     if(cardNumber.length === cardData[0]['lengths'][0] || cardNumber.length === cardData[0]['lengths'][1] || cardNumber.length === cardData[0]['lengths'][2])
     { // network is visa
       network = cardData[0]['issuer/network'];
     }
    }  
    // else
    else
    {  // do a swich statement
      switch(firstTwoIndexes)
      {// '34', '37' is amex
        case cardData[2]['prefixes'][0]:
        case cardData[2]['prefixes'][1]:if(cardNumber.length === cardData[2]['lengths'][0]) // if the length is 15 then the network is amex
                                        { 
                                          network = cardData[2]['issuer/network']
                                        }
                                        break;
        // '38', '39' is Diners club
        case cardData[3]['prefixes'][0]:
        case cardData[3]['prefixes'][1]:if(cardNumber.length === cardData[3]['lengths'][0])// if the length is 14 then network is diners club
                                        { 
                                          network = cardData[3]['issuer/network']
                                        }
                                        break;
        //'51', '52', '53', '54', '55' is mastercard
        case cardData[1]['prefixes'][0]:
        case cardData[1]['prefixes'][1]:
        case cardData[1]['prefixes'][2]:
        case cardData[1]['prefixes'][3]:
        case cardData[1]['prefixes'][4]:if(cardNumber.length === cardData[1]['lengths'][0])// if length is 16 then network is mastercard
                                        { 
                                          network = cardData[1]['issuer/network']
                                        }
                                        break;
      }
      
    }
  return network;
}

// example
var network = detectNetwork('343456789012345', cardData);
console.log(network); // --> 'American Express'