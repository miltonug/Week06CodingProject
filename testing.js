const expect = chai.expect
const assert = chai.assert

describe('Create a deck of cards', () => {

    class Cards {
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

      function getCardValue(rank) {   
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
          return parseInt(rank);
          } 
        } 
      }   

    it("should create a deck of 52 cards", () => {
       const cards = new Cards();
       expect(cards.deck.length).to.equal(52);
    });
})
