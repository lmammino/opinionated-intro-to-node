'use strict'

module.exports = {
  query () {
    const data = [{ id: 1, name: "Mario's place" }, { id: 2, name: "Luigi's mansion" }]
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), Math.random() * 10)
    })
  }
}
