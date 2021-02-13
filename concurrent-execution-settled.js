'use strict'

const client = require('./fake-client/client-promise')

async function deleteLastReservationIfConfirmed (client, guestId) {
  const guest = await client.getGuest(guestId)
  const lastReservation = guest.reservations.pop()
  if (typeof lastReservation === 'undefined') {
    return false
  }
  const reservation = await client.getReservation(lastReservation)
  if (!reservation || reservation.status !== 'confirmed') {
    return false
  }
  console.log(`cancelling last reservation for ${guestId}`)
  return client.deleteReservation(reservation.id)
}

async function main () {
  const guestIds = ['Peach', 'Toad', 'Mario', 'Luigi']

  const results = await Promise.allSettled(
    guestIds.map(
      guestId => deleteLastReservationIfConfirmed(client, guestId)
    )
  )

  console.log(results)
}

main()
