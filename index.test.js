const { play } = require('./index.js')

describe('rock paper scissors', () => {
  it('rock beats scissors', () => {
    expect(play('rock', 'scissors')).toEqual(1)
    expect(play('scissors', 'rock')).toEqual(2)
  })

  it('scissors beats paper', () => {
    expect(play('scissors', 'paper')).toEqual(1)
    expect(play('paper', 'scissors')).toEqual(2)
  })

  it('paper beats rock', () => {
    expect(play('paper', 'rock')).toEqual(1)
    expect(play('rock', 'paper')).toEqual(2)
  })
})
