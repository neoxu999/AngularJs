

module calculation {
	export interface ICalculator {

		// a + b
		add(a: number, b: number): number;

		// a - b
		subtract(a: number, b: number): number;

		// a * b
		multiply(a: number, b: number): number;

		// a / b, b cannot be 0
        divide(a: number, b: number): number;

		// a square by b
		square(a: number, b: number): number;

        // square root for a
        // a must be greater than 0
		squareRoot(a: number): number;
	}
}
