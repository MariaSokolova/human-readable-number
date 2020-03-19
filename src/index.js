module.exports = function toReadable(number) {
    const units = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };

    const dozens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    if (number === 0) {
        return 'zero';
    }

    let result = '';

    const hundreds = Math.floor(number / 100);
    let reminder = (number % 100);

    if (hundreds > 0) {
        const space = (reminder === 0) ? '' : ' ';
        result += units[hundreds] + ' hundred' + space;
    }

    if (reminder >= 20) {
        const tens = Math.floor(reminder / 10);
        reminder = reminder % 10;
        const space = (reminder === 0) ? '' : ' ';
        result += dozens[tens] + space;
    }

    result += units[reminder];

    return result;
};
