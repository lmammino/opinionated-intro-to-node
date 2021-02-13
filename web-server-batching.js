'use strict'

/**
 * Run the webserver with `node web-server-batching.js`.
 *
 * Once the webserver is started you can:
 *  - Query the webserver with `curl -v 'localhost:8000/availability/v1/units'`
 *  - Benchmark the webserver with `autocannon -c 20 localhost:8000/availability/v1/units`
 */

const { createServer } = require('http')
const db = require('./fake-db/db')

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost')
  if (url.pathname !== '/availability/v1/units') {
    res.writeHead(404, 'Not found')
    return res.end()
  }

  const units = await getUnitsFromDb()

  res.writeHead(200)
  res.end(JSON.stringify(units))
})

server.listen(8000, () => console.log('Web server started at http://localhost:8000'))

let pendingRequest = null

async function getUnitsFromDb () {
  if (pendingRequest) {
    console.log('batching')
    return pendingRequest
  }

  console.log('Getting data from db')
  pendingRequest = db.query('SELECT * FROM units WHERE "availability" > 0')
  pendingRequest.finally(() => {
    pendingRequest = null
  })

  return pendingRequest
}
