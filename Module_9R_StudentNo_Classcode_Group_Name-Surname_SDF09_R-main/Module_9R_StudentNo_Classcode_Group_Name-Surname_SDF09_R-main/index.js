// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let player = {
    name: "Minnie",
    chips: 200
    
}

let cards = []
let sum = 0 // Sum of the card values
let hasBlackJack = false // CheckS if player has Blackjack
let isAlive = false
let message = "" // Message to display to the player

// Getting references to HTML elements to update the UI
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

// Function to generate a random card value between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// Function to start the game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard() // Draw first card
    let secondCard = getRandomCard() // Draw second card
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "  // Reset the cards display
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " // Display each card
    }
    
    sumEl.textContent = "Sum:" + sum  // Display the sum of the cards
    if (sum <= 20) { // If sum is less than or equal to 20, prompt for a new card
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!🏆" 
        hasBlackJack = true
    } else {  // If sum is greater than 21, player is out of the game
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message // Display the message to the player
}

// Function to draw a new card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
