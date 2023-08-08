window.NINJA_BIZ = {
  isAvailable() {
    return new Promise((resolve) => {
      resolve()
    })
  },
  gameStart() { },
  lottery() {
    const a = Math.round(Math.random() * 2 + 1)
    return Promise.resolve({ type: a })
  },
  showResult(score) {
    // console.log(arguments);
    console.log(score)
    // window.NINJA_GAME.restart()
  },
  downgrade() {
    return Promise.resolve({ downgrade2D: false })
  },
  close() {
    window.NINJA_GAME.stop()
    // console.log(NINJA_GAME.pause(), NINJA_GAME)
    setTimeout(function () {
      window.NINJA_GAME.restart()
    }, 1000)
  },
}