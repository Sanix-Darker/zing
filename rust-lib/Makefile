.PHONY: install-wasm-pack build create-react-app

install-wasm-pack:
	cargo install wasm-pack

# normally not need.
build:
	cargo build

# Build the wasm and place it inside src/zing
# yes, it needs to be versioned.
build-wasm: build
	wasm-pack build --target web --out-name zing --out-dir ../react-app/src/zing/

# with vite
create-react-app:
	npm create vite@latest
