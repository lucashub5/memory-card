import { dataChampions } from "./data";

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function randomCards(alreadySelected = []) {
    const dataChampionsCopy = [...dataChampions];
    const alreadySelectedCopy = [...alreadySelected];
    const alreadyAdded = new Set();
    const cardsArr = [];

    if (alreadySelectedCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * alreadySelectedCopy.length);
      const pushCard = alreadySelectedCopy[randomIndex];
      cardsArr.push(pushCard);
      alreadyAdded.add(pushCard);
    }
    
    while (cardsArr.length < 5 && alreadyAdded.size < dataChampionsCopy.length) {
        const randomCard = Math.floor(Math.random() * dataChampionsCopy.length);
    
        if (!alreadyAdded.has(randomCard)) {
          alreadyAdded.add(randomCard);
          cardsArr.push({id: randomCard, name: dataChampionsCopy[randomCard]});
        }
    }

    return shuffle(cardsArr);
}

export { randomCards };
