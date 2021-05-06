const sum = require('./sum');

test('properly adds two numbers', () => {
    expect(
        sum(1,2))
        .toBe(3);
});


//expect is kinda if and .toBe()