const TAX_RATE = 0.15;

const calculateRsTax = (module: any, value: number): number => {

    const processCalculation = (module: any) => {
      try {
        const start = new Date().getTime();
        const result = module.calculate_sales_tax(value, TAX_RATE);
        console.log(`From Rust, gave ${result} in ${(new Date().getTime() - start)/1000}s`);
        return result;
      } catch (error) {
        console.error('Error calling WebAssembly function:', error);
      }
    };

    if (module) {
      return processCalculation(module);
    } else {
      console.error('WebAssembly module is not loaded yet.');
    }

    return -1;
};

const calculateJsTax = (_: any, value: number): number => {
  const js_fibonacci = (val: number): number => {
      switch (val) {
        case 0:
          return 0;
        case 1:
          return 1;
        default:
          return js_fibonacci(val - 1) + js_fibonacci(val - 2);
      }
  };

  try {
    const start = new Date().getTime();
    const result = js_fibonacci(value)  * TAX_RATE;
    console.log(`From Javascript, gave ${result} in ${(new Date().getTime() - start)/1000}s`);
    return result;
  }catch(error) {
      console.error('Error processing js calcul tax');
  }

  return -1;
};

type TaxCalculator = (module: any, value: number) => number;

const Modes: Record<string, TaxCalculator> = {
    "rust": calculateRsTax,
    "js": calculateJsTax,
};

export const calculateTax = (mode: string, module: any, value: number) => {
    return Modes[mode](module, value);
}
