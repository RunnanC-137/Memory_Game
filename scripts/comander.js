const CARD = "card"
const FRONT =  "front"
const BACK = "back"
const ICON = "icon"

window.onload = startGame()


function startGame() {

    cards = createCardFromTechs(techs)
    shuffleCards(cards)
    initializeCards(cards)
}

function initializeCards(cards) {
    let grade = document.querySelector("#grade")

    cards.forEach(card => {

        let cardElement = document.createElement("div")
        cardElement.id = card.id
        cardElement.classList.add(BACK)
        cardElement.dataset.icon = card.icon
        
        createCardContent(card, cardElement)

        cardElement.addEventListener("click", flipCard)
        grade.appendChild(cardElement)
    })

    console.log(cards)
}

function createCardContent(card, cardElement) {

    createCardFace(FRONT, card, cardElement)
    createCardFace(BACK, card, cardElement)
}

function createCardFace(face, card, element) {
    
    let cardElementFace = document.createElement("div")
    cardElementFace.classList.add(face)

    if (face === FRONT) {

        let iconElement = document.createElement("img")
        iconElement.classList.add(ICON)
        iconElement.src = `./img/${card.icon}.png`
        cardElementFace.appendChild(iconElement)

    } else {

        cardElementFace.innerHTML = "&lt/&gt"
    }

    element.appendChild(cardElementFace)
}

function flipCard(element) {
    element.target
}