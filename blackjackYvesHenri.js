// function to pick a card between 1 and 13 and consider the value of 10 for the face cards (11, 12 and 13)
function pickCard() {
  let card = 0;
  card = Math.floor(Math.random() * (13-1)) + 1;
  if (card === 11 || card === 12 || card === 13) {
    card = 10;
  }
  return card;
}

// do...while loop to ask if the player wants to continue to play
do{
console.clear();  
// Pick two cards for the player
let cardPlayer1 = pickCard();
let cardPlayer2 = pickCard();

// Display the value of the player's cards
console.log(`Player's card 1: ${cardPlayer1}`);
console.log(`Player's card 2: ${cardPlayer2}`);

// if statement to choose the ace value
if (cardPlayer1 === 1) {
  cardPlayer1 = parseInt(prompt("Choose the value for the ace: 1 or 11"));
} else if (cardPlayer2 === 1) {
  cardPlayer2 = parseInt(prompt("Choose the value for the ace: 1 or 11"));
} 

// to set the player's score
let totalPlayer = cardPlayer1 + cardPlayer2;
console.log(`Player score is: ${totalPlayer}`);

// Pick two cards for the dealer
let cardDealer1 = pickCard();
let cardDealer2 = pickCard();

// Display the value of the first dealer card
console.log(`Dealer's card 1: ${cardDealer1}`);

// to set the dealer's score
let totalDealer = cardDealer1 + cardDealer2;

// if statement to choose the ace value for the dealer
if (cardDealer1 === 1 && cardDealer2 !== 1) {
  let temp = 0;
  temp = 11 + cardDealer2;
  if (temp <= 21) {
    totalDealer = temp;
  } else {
    totalDealer = cardDealer1 + cardDealer2;
  }
} else if (cardDealer1 !== 1 && cardDealer2 === 1) {
  let temp = 0;
  temp = 11 + cardDealer1;
  if (temp <= 21) {
    totalDealer = temp;
  } else {
    totalDealer = cardDealer1 + cardDealer2;
  }
} else if (cardDealer1 === 1 && cardDealer2 === 1) {
  totalDealer = 11 + cardDealer2;
}

// loop while to ask the player if he wants to pick a new card
while ((totalPlayer < 21) && confirm("Do you want to pick another card?")) {
  let cardPlayer3 = pickCard();
  if (cardPlayer3 === 1) {
    let temp = 0;
    temp = 11 + totalPlayer;
    if (temp <= 21) {
      totalPlayer = temp;
    } else {
      totalPlayer += cardPlayer3;
    }
  } else {
    totalPlayer += cardPlayer3;
  }
  // totalPlayer += cardPlayer3;
  console.log(`New player's card: ${cardPlayer3}`);
  console.log(`Player score is: ${totalPlayer}`);
}

// if statement to check if the player's score is superior to 21
if (totalPlayer > 21) {
  console.log("You loose! The dealer wins");
  // to check if player's score is equal to 21
} else if (totalPlayer === 21) {
  console.log("You win! The dealer looses!");
} else {
  console.log(`Dealer's card 2: ${cardDealer2}`);
  console.log(`Dealer score is: ${totalDealer}`);
}

while (totalDealer < 17 && totalPlayer < 21) {
  let cardDealer3 = pickCard();
  if (cardDealer3 === 1) {
    let temp = 0;
    temp = 11 + totalDealer;
    if (temp >= 17 && temp <= 21) {
      totalDealer = temp;
    } else {
      totalDealer += cardDealer3;
    } 
  } else {
    totalDealer += cardDealer3;
  }
  console.log(`New dealer's card: ${cardDealer3}`);
  console.log(`Dealer score is: ${totalDealer}`);
}

if (totalDealer > 21) {
  console.log("You win! The dealer looses!");
} else if (totalDealer >= totalPlayer && totalPlayer !== 21) {
  console.log("You loose! The dealer wins");
} else if (totalDealer < totalPlayer && totalPlayer < 21) {
  console.log("You win! The dealer looses!");
}
}
  while (
  confirm("Do you want to play?")
)