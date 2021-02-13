'use strict'

const mapLimit = require('async/mapLimit')
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
  const guestIds = [
    'Peach', 'Toad', 'Mario', 'Luigi',
    'Bowser', 'Yoshi', 'Wario', 'Daisy',
    'Rosalina', 'Waluigi', 'Birdo', 'Koopa',
    'Toadette', 'Chain Chomp', 'Kamek',
    'Blooper', 'Petey Piranha', 'Cheep-Cheep',
    'Luma', 'Nabbit', 'Goomba', 'Cappy', 'Boos'
  ]

  const results = await mapLimit(
    guestIds,
    2, // max concurrency
    async (guestId) => deleteLastReservationIfConfirmed(client, guestId)
  )

  console.log(results)
}

main()
