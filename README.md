# An opinionated intro to Node.js - code examples

In this repository you can find the code examples presented in the talk [An opinionated intro to Node.js](https://loige.link/devrupt-node) presented at [Devrupt Hospitality Hackaton](https://devrupt-hospitality.com/).

[![An opinionated intro to Node.js](./images/cover.png)](https://loige.link/devrupt-node)

## Setup

Requires `Node.js 14+`.

Install the necessary dependencies with:

```bash
npm install
```

## Examples

  - [`delete-reservation-cb.js`](./delete-reservation-cb.js) - Shows async control flow using callbacks
  - [`delete-reservation-promise.js`](./delete-reservation-promise.js) - Shows async control flow using promises
  - [`delete-reservation-async.js`](./delete-reservation-async.js) - Shows async control flow using async/await
  - [`sequential-execution.js`](./sequential-execution.js) - Show sequential execution using async/await
  - [`sequential-execution-pitfall.js`](./sequential-execution-pitfall.js) - Shows a common pitfall with sequential execution
  - [`concurrent-execution.js`](./concurrent-execution.js) - Shows concurrent execution using `Promise.all()`
  - [`concurrent-execution-settled.js`](./concurrent-execution-settled.js) - Shows concurrent execution using `Promise.allSettled()`
  - [`limited-concurrent-execution.js`](./limited-concurrent-execution.js) - Shows limited concurent execution using the [async](https://npm.im/async) module
  - [`web-server-batching.js`](./web-server-batching.js) - Shows a web server example taking advantage of the request batching pattern


## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/lmammino/opinionated-intro-to-node/issues).


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.


<a href="https://www.nodejsdesignpatterns.com"><img width="240" align="right" src="https://github.com/lmammino/lmammino/blob/master/nodejsdp.jpg?raw=true"></a>

## Node.js Design Patterns

If you enjoyed the material here consider checking out [Node.js Design Patterns](https://www.nodejsdesignpatterns.com/), a book designed to help you build production-grade Node.js applications using proven patterns and techniques
