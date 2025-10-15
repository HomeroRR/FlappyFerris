# FlappyFerris
Rust Flappy Bird game using the Bevy game engine compiled to WebAssembly

# Build Steps
1. Make sure you have Rust installed by following the instructions at [rust-lang](https://rust-lang.org)
2. Add a Web Assembly target
    ```bash
    rustup target add wasm32-unknown-unknown
    ```
3. Build with wasm target
    ```bash
    RUSTFLAGS='--cfg getrandom_backend="wasm_js"' cargo build --release --target wasm32-unknown-unknown
    ```
4. Package with wasm-bindgen
    ```bash
    cargo install -f wasm-bindgen-cli --version 0.2.100
    wasm-bindgen target/wasm32-unknown-unknown/release/flappy_bird.wasm --out-dir ./public --target web
    ```

# Run Steps
All you need is pre-compiled in the "public" folder.
Simply open index.html in a browser.
To serve the files in the public folder you can run 
```bash
npm install -g http-server
http-server
```

# FAQ
To compile with sound in Linux, install the appropriate libraries:
```bash
sudo apt-get install libasound2-dev libudev-dev
```

Make sure to copy your "assets" folder into your "public" dir