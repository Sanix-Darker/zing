import { useState } from 'react';
import './App.css';
import initSync from './zing/zing';
import { calculateTax } from './zing_module';

const App = () => {
  const [value, setValue] = useState(0) as any;
  const [result, setResult] = useState(0) as any;

  const loadWasmModule = async () => {
    try {
      // Fetch the wasm module
      const wasmUrl = new URL('./zing/zing_bg.wasm', import.meta.url);
      const response = await fetch(wasmUrl);
      const bytes = await response.arrayBuffer();

      // Initialize the wasm module synchronously
      return await initSync(bytes);
    } catch (error) {
      console.error('Error loading WebAssembly module:', error);
    }
  };

  const handleRsTax = () =>  {
    loadWasmModule().then(wasmModule => {
        setResult("loading...");
        setResult("result : " + calculateTax("rust", wasmModule, value));
    }).catch(e => console.log(e));
  }

  const handleJsTax = () =>  {
    setResult("loading...");
    setResult("result : " + calculateTax("js", null, value));
  }

  return (
    <div>
      <h1>ChakRs</h1>
      <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
      />
      <hr/>
      <input
          disabled
          value={result}
      />
      <hr/>
      <button onClick={handleRsTax}>Calculate Rs Tax</button>
      <button onClick={handleJsTax}>Calculate Js Tax</button>
    </div>
  );
};

export default App;
