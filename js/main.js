const {portmantonne, csvToArray} = require("./lib");

const listener = (event) => {
  const portmanteaus = portmantonne(
    csvToArray(event.target.value, ',')
  )
  const outputElement = document.getElementById('output')
  outputElement.innerHTML = ''
  portmanteaus.forEach(word => {
    const newEl = document.createElement('p');
    newEl.textContent = word
    outputElement.appendChild(newEl)
  })
}
const elem = document.getElementById('csvWords')
elem.addEventListener('keyup', listener);
