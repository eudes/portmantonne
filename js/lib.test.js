const {portmantonne, leftPartials, rightPartials} = require('./lib')


describe('portmantonne', () => {
  describe('returns all possible portmanteaus of a set of', () => {
    test('no words', () => {
      expect(portmantonne([])).toEqual([])
    })
    test('one word', () => {
      expect(portmantonne(['ab']).sort()).toEqual([].sort())
    })
    test('two letters', () => {
      expect(portmantonne(['a', 'b']).sort()).toEqual([
        'ab',
        'ba'
      ].sort())
    })
    test('two words', () => {
      expect(portmantonne(['ar', 'bo']).sort()).toEqual([
        'arbo',
        'aro',
        'abo',
        'ao',
        'boar',
        'bor',
        'bar',
        'br',
      ].sort())
    })
    // TODO
    test('three words', () => {
      expect(portmantonne(['ar', 'bo', 'le']).sort()).toEqual([
        'arbo',
        'aro',
        'abo',
        'ao',
        'boar',
        'bor',
        'bar',
        'br',
      ].sort())
    })
  })
})

describe('leftPartials', () => {
  test('returns all possible left partials of a word', () => {
    expect(leftPartials(null)).toEqual([])
    expect(leftPartials('').sort()).toEqual([])
    expect(leftPartials('a').sort()).toEqual(['a'].sort())
    expect(leftPartials('as').sort()).toEqual([
      'a',
      'as'
    ].sort())
    expect(leftPartials('asd').sort()).toEqual([
      'a',
      'as',
      'asd'
    ].sort())
  })
})

describe('rightPartials', () => {
  test('returns all possible right partials of a word', () => {
    expect(rightPartials(null)).toEqual([])
    expect(rightPartials('').sort()).toEqual([])
    expect(rightPartials('a').sort()).toEqual(['a'].sort())
    expect(rightPartials('as').sort()).toEqual([
      's',
      'as'
    ].sort())
    expect(rightPartials('asd').sort()).toEqual([
      'd',
      'sd',
      'asd'
    ].sort())
  })
})
