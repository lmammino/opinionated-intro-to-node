'use strict'

module.exports = {
  getGuest (id, cb) {
    setTimeout(() => cb(null, {
      id,
      reservations: [10, 22, 14]
    }), 100)
  },

  getReservation (id, cb) {
    setTimeout(() => cb(null, {
      id,
      status: 'confirmed'
    }), 100)
  },

  deleteReservation (id, cb) {
    setTimeout(() => cb(null, true), 100)
  }
}
