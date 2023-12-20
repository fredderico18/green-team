let purpleDeck = [];
let blueDeck = [];
let yellowDeck = [];
let gameDeck = [];

let deckTypes = [
    {
        type: "purple",
    },

    {
        type: "blue",
    },

    {
        type: "yellow",
    }
    
];

function generateDecks() {

    for (let i = 0; i < deckTypes.length; i++) {
        let selectedDeck = deckTypes[i];
            for (let j = 1; j < 141; j++) {
             let cardImage = "assets/" + selectedDeck.type + "Cards/" + selectedDeck.type + "_" + j + ".png";
             console.log (cardImage);
             let card = new Card(j, cardImage);
    
            if (selectedDeck.type == "purple") {
                purpleDeck.push(card);
            }
            
            if (selectedDeck.type == "blue") {
                blueDeck.push(card);
            }
    
            if (selectedDeck.type == "yellow") {
                yellowDeck.push(card);
            }
            
        }
    
    }

}
 
function Card(id, cardImage) {
    this.id = id;
    this.cardImage = cardImage;
}

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleDeck(array) {
    let currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function createGameDeck() {

    purpleDeck = shuffleDeck(purpleDeck);
    blueDeck = shuffleDeck(blueDeck);
    yellowDeck = shuffleDeck(yellowDeck);

    for (i = 0; i < 5; i++) {
        gameDeck.push(purpleDeck[i].cardImage);
        gameDeck.push(blueDeck[i].cardImage);
        gameDeck.push(yellowDeck[i].cardImage);
    }

    gameDeck = shuffleDeck(gameDeck);

  }

  generateDecks();
  createGameDeck();
