const { play } = require('./index.js')

describe('rock paper scissors', () => {
  it('rock beats scissors', () => {
    expect(play('rock', 'scissors')).toEqual(1)
  })
})
