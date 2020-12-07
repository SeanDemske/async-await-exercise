const URL = "https://deckofcardsapi.com/api/deck";

// 1
async function part1() {
    let data = await $.getJSON(`${URL}/new/draw/?count=1`)
    let {suit, value} = data.cards[0];
    console.log(suit, value);
}

// 2
async function part2() {
    let data = await $.getJSON(`${URL}/new/draw/`)
    let firstCard = data.cards[0];
    let deckId = data.deck_id;
    data = await $.getJSON(`${URL}/${deckId}/draw/`)
    let secondCard = data.cards[0];
    [firstCard, secondCard].forEach(card => {
            console.log(`${card.value.toLowerCase()}`, `${card.suit.toLowerCase()}`);
    });
}



// 3
let deckInit = false;
async function part3() {
    let deckId;
    const $cardBtn = $("#newcard-btn");
    
    if (deckInit === false) {
        let data = await $.getJSON(`${URL}/new/shuffle`)
        deckId = data.deck_id;
    }

    
    $cardBtn.click(async function() {
        if (deckInit) {
            let data = await $.getJSON(`${URL}/${deckId}/draw`)
            if (data.remaining > 0) {
                createCard(data.cards[0].image)
            } else {
                $cardBtn.prop('disabled', true);
            }
        }
    });
    deckInit = true;
}
part3();

function createCard(image) {
    // Creates and appends img element to the content container

    let randNum = Math.floor(Math.random() * 25)
    $(".content-container").append(`
        <img src="${image}" alt="" class="card"
        style="transform: rotate(${randNum}deg);">
    `);
}




