/** The plan is to build the game using 2 classes
 * 
 * The 1st class is for the CARDS, which involves;
 * - building out a deck of cards.
 * - assiging a numerical value to each card.
 * - shuffling the deck.
 * 
 * The 2nd class is to PLAY the game, which involves;
 * - creating the players.
 * - dealing out the playing cards from the shuffled deck created in the 1st class.
 * - tracking the score as the game is played.
 * - declaring a winner at the end.
 */


class Cards {
  // Create a deck of cards
  constructor() {
    this.deck = [];
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

for (const rank of ranks) {
  let value = getCardValue(rank);
  for (const suit of suits) {
    this.deck.push({value, rank, suit});
  } 
} 

// Determine the value of a card based on it's rank for comparison during the game
function getCardValue(rank) {   
  
    // Give letter cards (Jack, Queen, King, Ace) ranks of 11, 12, 13 and 14 respectively
    if (rank === "Jack") {
        return 11;
        }
    if (rank === "Queen") {
        return 12;
        }
    if (rank === "King") {
        return 13;
        }
    if (rank === "Ace") {
        return 14;
        }  
    // Otherwise, the card value is what's on the card, convert the string to a number
    return parseInt(rank);
  } 

// Shuffle the cards in the deck 
    for (let i = 0; i < this.deck.length; i++) {
      let j = Math.floor(Math.random() * this.deck.length);
      let temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    } 
  } 
}

class Play extends Cards{
  constructor(){
    super();
    this.player1Cards = [];
    this.player2Cards = [];
    this.player1Score = 0;
    this.player2Score = 0;
  }
  
  // Deal the shuffled deck between 2 players, 26 cards each
  dealCards() {
    for (let i = 0; i < 26; i++) {
      this.player1Cards.push(this.deck.pop());
      this.player2Cards.push(this.deck.pop());
    }
    
  // This output to the console is not neccessary for the functioning of the game, 
  // but I'm displaying the cards to show that each player has a random hand.
    console.log("Player 1 Cards:")
    console.table(this.player1Cards);
    console.log("Player 2 Cards:")
    console.table(this.player2Cards);
  }

  // Play the game, each player lays down a card and the value is compared. Higher value scores 1 point
  playGame() {
    this.dealCards();

    let player1Card = null;
    let player2Card = null;
    let ties = 0;

    for (let i = 0; i < 26; i++) {
      player1Card = this.player1Cards[i];
      player2Card = this.player2Cards[i];      
      if (player1Card.value > player2Card.value) {
        this.player1Score ++;
      } else if (player2Card.value > player1Card.value) {
        this.player2Score ++;
      } else {
        ties ++;
      }
    }

  // Display final scores and declare a winner  
    console.log(`Player1 points: (${this.player1Score}). Player2 points: (${this.player2Score}). Ties: (${ties}).`);
    if (this.player1Score > this.player2Score) {
      console.log("The winner is: Player1");
    } else if (this.player2Score > this.player1Score) {
      console.log("The winner is: Player2");
    } else {
      console.log("What a game, it's a tie");
    } 
  } 
}

let war = new Play();
war.playGame();
