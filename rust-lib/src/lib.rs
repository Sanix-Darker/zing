use core::f64;

use wasm_bindgen::prelude::*;

type Int = i32;

pub fn fibonacii(val: Int) -> Int {
    match val {
       0 => 0,
       1 => 1,
       _ => fibonacii(val - 1) + fibonacii(val - 2)
    }
}

#[wasm_bindgen]
pub fn calculate_sales_tax(price: f64, tax_rate: f64) -> f64 {
    let fifi = fibonacii(price as Int) as f64;
    fifi * tax_rate
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = calculate_sales_tax(10.0, 1.0);
        assert_eq!(result, 1.0);
    }
}
