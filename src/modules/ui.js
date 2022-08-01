import {cardObjects} from "./cards.js"


function renderCards() {
    for (let cardObject of cardObjects) {
        createCard(cardObject);
    }
}

function createCard (cardObject) {
    const cardArea = document.querySelector("[data-card-area]")
    console.log(cardArea, cardObject);
}

export {renderCards}