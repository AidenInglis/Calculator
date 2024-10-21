const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator functions', () => {
    test('adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('subtracts two numbers', () => {
        expect(subtract(2, 1)).toBe(1);
    });

    test('multiplies two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('divides two numbers', () => {
        expect(divide(6, 3)).toBe(2);
    });

    test('throws an error when dividing by zero', () => {
        expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
    });
});