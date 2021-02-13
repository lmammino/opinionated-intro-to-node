'use strict'

module.exports = {
  getGuest (id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({
        id,
        reservations: [10, 22, 14]
      }), 200 * Math.random())
    })
  },

  getReservation (id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({
        id,
        status: 'confirmed'
      }))
    }, 200 * Math.random())
  },

  deleteReservation (id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(true))
    }, 200 * Math.random())
  }
}
