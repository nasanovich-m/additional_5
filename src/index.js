module.exports = function check(str, bracketsConfig) {
    var sequence = [];

    var openBrackets = bracketsConfig.map(function (config) {
        return config[0];
    });

    var closeBrackets = bracketsConfig.map(function (config) {
        return config[1];
    });

    for (var i = 0, openIndex, closeIndex; i < str.length; i++) {
        var char = str[i];

        openIndex = openBrackets.indexOf(char);
        closeIndex = closeBrackets.indexOf(char);

        if (openIndex === closeIndex) {
            if (closeIndex === sequence[sequence.length - 1]) {
                openIndex = -1;
            }
        }

        if (openIndex !== -1) {
            sequence.push(openIndex);
        } else if (closeIndex !== -1) {
            var lastIndex = sequence.pop();

            if (closeIndex !== lastIndex) {
                return false;
            }
        }
    }

    return sequence.length === 0;
};
