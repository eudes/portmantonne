const {portmantonne, csvToArray} = require("./lib");
const {Pronounceable} = require("@eudes/pronounceable");
let pronounceable = new Pronounceable();

const listener = (event) => {
  const portmanteaus = portmantonne(
    csvToArray(event.target.value, ',')
  ).map(w => ({word: w, score: pronounceable.score(w)}))
    .sort((a, b) => b.score - a.score)
  const outputElement = document.getElementById('output')
  outputElement.innerHTML = ''
  portmanteaus.forEach(word => {
    const newEl = document.createElement('p');
    newEl.textContent = word.word
    outputElement.appendChild(newEl)
  })
}
const elem = document.getElementById('csvWords')
elem.addEventListener('keyup', listener);
