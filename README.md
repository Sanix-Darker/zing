## Zing

Playing around with Rust, Wasm and React (with vite).

In this playground, ma just compiling a rust wasm method that i inject at runTime in a react-app.

## DEV REQUIREMENTS

- Rust installed.
- Node installed

## INSTALLATION

```bash
$ cd rust-lib
$ make build-wasm

# This will build a wasm zinb_bn inside ./react-app/src/zing/
# Yes, it needs to be versioned and therefore will be shiped to the client
# ON DEMAND
```

## USE/TEST IT

```bash
$ cd react-app
$ npm install
$ npm run dev
# should be available on : http://localhost:5173/
```
