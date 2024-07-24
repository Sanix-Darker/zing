## Zing

Playing around with Rust, Wasm and React (with vite).

In this playground, am just compiling a rust wasm method that i inject at runTime in a react-app.

It's ridiculously fast...

![Screenshot from 2024-07-24 12-44-22](https://github.com/user-attachments/assets/a6fd8831-5b5e-41ed-8c42-ac7c37aa807d)


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
