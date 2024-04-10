import { dataChampions } from "./data";

function randomCards(savedChamps = []) {
  const championsCopy = [...dataChampions];
  const randomChampions = [];
  const selectedIndices = new Set();

  while (randomChampions.length < 5 && selectedIndices.size < championsCopy.length) {
    const randomIndex = Math.floor(Math.random() * championsCopy.length);

    if (!selectedIndices.has(randomIndex)) {
      selectedIndices.add(randomIndex);
      randomChampions.push({id: randomIndex, name: championsCopy[randomIndex]});
    }
  }

  if(savedChamps.length > 0) {
    const randomIndex = Math.floor(Math.random() * randomChampions.length);
    randomChampions[randomIndex] = savedChamps[Math.floor(Math.random() * savedChamps.length)];
  }

  return randomChampions;
}

export default randomCards;
