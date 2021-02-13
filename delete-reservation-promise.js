'use strict'

const client = require('./fake-client/client-promise')

function deleteLastReservationIfConfirmed (client, guestId) {
  return client.getGuest(guestId)
    .then((guest) => {
      const lastReservation = guest.reservations.pop()
      if (typeof lastReservation !== 'undefined') {
        return client.getReservation(lastReservation)
      }
    })
    .then((reservation) => {
      if (!reservation || reservation.status !== 'confirmed') {
        return false
      }

      console.log(`cancelling last reservation for ${guestId}`)
      return client.deleteReservation(reservation.id)
    })
}

deleteLastReservationIfConfirmed(client, 'Mario')
  .then(console.log)
  .catch(console.error)
