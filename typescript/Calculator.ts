/// <reference path="ICalculator.ts" /> 

module calculation {

	export class Calculator implements ICalculator {
	 
		add(a: number, b: number) {
			return a + b;
		}

		subtract(a: number, b: number) {
			return a - b;
		}

		multiply(a: number, b: number) {
			return a * b;
		}

        // b must greater than 0;
		divide(a: number, b: number) {
			if (b == 0){
				console.error("Denominator cannot be 0.");
				return 0;
			}
			return a / b;
		}
		
        square(a: number, b: number) {
        	return Math.pow(a, b);
        }

        // a must be greater than 0
        squareRoot(a: number) {
        	return Math.sqrt(a);
        }

	}
}