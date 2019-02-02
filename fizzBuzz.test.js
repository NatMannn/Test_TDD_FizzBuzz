const fizzBuzz = require('./fizzBuzz')

test('A number is fizz if it is divisible by 3 ', () => {
    expect(fizzBuzz("3")).toBe("Fizz");
});

test('A number is buzz if it is divisible by 5 ', () => {
    expect(fizzBuzz("5")).toBe("Buzz");
});

test('A number is fizzbuzz if it is divisible by 3 and 5 ', () => {
    expect(fizzBuzz("15")).toBe("FizzBuzz");
});

test('A number is other', () => {
    expect(fizzBuzz("17")).toBe("17");
});

test('A number  has a 3 in it', () => {
    expect(fizzBuzz("37")).toBe("Fizz");
});

test('A number has a 5 in it', () => {
    expect(fizzBuzz("56")).toBe("Buzz");
});

test('A number  has a 3 and 5 in it', () => {
    expect(fizzBuzz("35")).toBe("FizzBuzz");
});


