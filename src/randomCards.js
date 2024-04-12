import { dataChampions } from "./data";

//función para mezclar un array de forma aleatoria
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function randomArr(arr) {
  return Math.floor(Math.random() * arr.length);
}

function randomCards(alreadySelected = []) {
    const cloneAlreadySelected = [...alreadySelected];
    const alreadyAdded = new Set();
    const cardsArr = [];

    //se asegura de introducir una carta a la baraja que el usuario no haya tocado.
    const filteredData = dataChampions.filter(champion => !cloneAlreadySelected.some(selected => selected === champion));
    const randomCard = randomArr(filteredData);
    const pushCard = filteredData[randomCard];
    cardsArr.push(pushCard);
    alreadyAdded.add(pushCard);

    //se agregan entre 1 a 4 cartas en la baraja que ya se hayan tocado.
    const randomNum = Math.floor(Math.random() * 4) + 1;

    for (let i = 0; i < randomNum; i++) {
      if (cloneAlreadySelected.length > 0) {
        const pushCard = cloneAlreadySelected[randomArr(cloneAlreadySelected)];
        cardsArr.push(pushCard);
        alreadyAdded.add(pushCard);
        const indexToRemove = cloneAlreadySelected.indexOf(pushCard);
        cloneAlreadySelected.splice(indexToRemove, 1);
      }
    }
    
    //se agregan las cartas faltantes a la baraja
    while (cardsArr.length < 5 && alreadyAdded.size < dataChampions.length) {
        const randomCard = randomArr(dataChampions);
        const pushCard = dataChampions[randomCard];
    
        if (!alreadyAdded.has(pushCard)) {
          alreadyAdded.add(pushCard);
          cardsArr.push(pushCard);
        }
    }

    //se llama a funcion para mezclar la baraja
    return shuffle(cardsArr);
}

export { randomCards };
