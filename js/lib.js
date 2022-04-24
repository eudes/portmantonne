function leftPartials(word) {
  if (!word) return []

  const partials = []
  for (let i = 0; i < word.length; i++) {
    partials.push(word.slice(0, i + 1))
  }
  return partials
}

function rightPartials(word) {
  if (!word) return []

  const partials = []
  for (let i = 0; i < word.length; i++) {
    partials.push(word.slice(i, word.length))
  }
  return partials
}

function portmantonne(words) {
  const partialized = []
  for (const word of words) {
    partialized.push({ left: leftPartials(word), right: rightPartials(word) })
  }

  const portmanteaus = []
  for (let i = 0; i < partialized.length; i++) {
    const leftWord = partialized[i];
    for (const leftPart of leftWord.left) {
      for (let j = 0; j < partialized.length; j++) {
        if (i === j) continue
        const rightWord = partialized[j]
        for (const rightPart of rightWord.right) {
          portmanteaus.push(leftPart + rightPart)
        }
      }
    }
  }

  return [...new Set(portmanteaus)]
}

function csvToArray(csv, separator) {
  if (!csv) {
    return []
  }
  return csv.split(separator)
    .filter(w => !!w)
    .map(w => w.trim())
    .map(w => w.replaceAll(/\s/g, ''))
}

module.exports = {portmantonne, csvToArray, leftPartials, rightPartials};
