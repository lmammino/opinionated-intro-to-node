'use strict'

const client = require('./fake-client/client-cb')

function deleteLastReservationIfConfirmed (client, guestId, cb) {
  client.getGuest(guestId, (err, guest) => {
    if (err) { return cb(err) }
    const lastReservation = guest.reservations.pop()
    if (typeof lastReservation === 'undefined') {
      return cb(null, false)
    }
    client.getReservation(lastReservation, (err, reservation) => {
      if (err) { return cb(err) }
      if (reservation.status === 'confirmed') {
        client.deleteReservation(reservation.id, (err) => {
          if (err) { return cb(err) }
          console.log(`cancelling last reservation for ${guestId}`)
          return cb(null, true)
        })
      }
    })
  })
}

deleteLastReservationIfConfirmed(client, 'Mario', console.log)
