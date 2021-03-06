/**
 * This file contains configuration settings for the buttons in the keypad.
 */

/* globals i18n */

const Keys = require('../data/keys');
const {DecimalSeparators, IconTypes, KeyTypes} = require('../consts');
const {decimalSeparator} = require('../utils');

const KeyConfigs = {
    // 新增
    [Keys.COMMA]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.BRACKETS]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.TWOTERM]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.ANGLE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.RIGHTSUB]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.MIDDLEBRACKETS]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.VERTICAL]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.RIGHTTOPBTM]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.ABSOLUTEVALUE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.TRIANGLE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.PARALLEL]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.PM]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.CIRC]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.APPROX]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.FEN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.LE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.TWOFEN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.DWAN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.ALPHA]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.COT]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.COLON]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.BETA]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.HUO]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.BAI]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.THETA]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.QIE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.TEMPERATURE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.ONE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.LEFTRIGHT]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.FOUR]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.PI]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.RIGHTLEFT]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.TWO]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.FIVE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.THREE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.SIX]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.SIM]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.SIM1]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.CONG]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.THREETERM]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.LG]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.INFTY]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.NEG]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.LOGARITHM]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.COMPLEMENT]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.VEE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.BAR]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.OVERRIGHTARROW]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.VARNOTHING]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.WEDGE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.HAT]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.CAP]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.SUBSET]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.CDOTS]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.PARENTHESIS]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.CUP]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.SUPSET]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.OMEGA]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.IN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.NOTIN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.SUBSETEQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.SUBSETNEQQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.MU]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.RHO]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.SUPSETEQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.SUPSETNEQQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.NU]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.SIGMA]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.GAMMA]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.LAMBDA]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.DELTA]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.UPSILON]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.KONG]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.VARPHI]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.OMEGA1]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    

    

    // 新增结束

    // Basic math keys.
    [Keys.PLUS]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a plus sign.
        ariaLabel: i18n._('Plus'),
    },
    [Keys.MINUS]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a minus sign.
        ariaLabel: i18n._('Minus'),
    },
    [Keys.NEGATIVE]: {
        type: KeyTypes.VALUE,
        // I18N: A label for a minus sign.
        ariaLabel: i18n._('Negative'),
    },
    [Keys.TIMES]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a multiplication sign (represented with an 'x').
        ariaLabel: i18n._('Multiply'),
    },
    [Keys.DIVIDE]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a division sign.
        ariaLabel: i18n._('Divide'),
    },
    [Keys.DECIMAL]: {
        type: KeyTypes.VALUE,
        // I18N: A label for a decimal symbol.
        ariaLabel: i18n._('Decimal'),
        icon: decimalSeparator === DecimalSeparators.COMMA ? {
            // TODO(charlie): Get an SVG icon for the comma, or verify with
            // design that the text-rendered version is acceptable.
            type: IconTypes.TEXT,
            data: ',',
        } : {
            type: IconTypes.SVG,
            data: Keys.PERIOD,
        },
    },
    [Keys.PERCENT]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a percent sign.
        ariaLabel: i18n._('Percent'),
    },
    [Keys.CDOT]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a multiplication sign (represented as a dot).
        ariaLabel: i18n._('Multiply'),
    },
    [Keys.EQUAL]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Equals sign'),
    },
    [Keys.NEQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Not-equals sign'),
    },
    [Keys.GT]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a 'greater than' sign (represented as '>').
        ariaLabel: i18n._('Greater than sign'),
    },
    [Keys.LT]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a 'less than' sign (represented as '<').
        ariaLabel: i18n._('Less than sign'),
    },
    [Keys.GEQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Greater than or equal to sign'),
    },
    [Keys.LEQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Less than or equal to sign'),
    },
    [Keys.FRAC_INCLUSIVE]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that creates a new fraction and puts the
        // current expression in the numerator of that fraction.
        ariaLabel: i18n._('Fraction, with current expression in numerator'),
    },
    [Keys.FRAC_EXCLUSIVE]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that creates a new fraction next to the
        // cursor.
        ariaLabel: i18n._('Fraction, excluding the current expression'),
    },
    [Keys.EXP]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that will allow the user to input a custom
        // exponent.
        ariaLabel: i18n._('Custom exponent'),
    },
    [Keys.EXP_2]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that will square (take to the second
        // power) some math.
        ariaLabel: i18n._('Square'),
    },
    [Keys.EXP_3]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that will cube (take to the third power)
        // some math.
        ariaLabel: i18n._('Cube'),
    },
    [Keys.SQRT]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Square root'),
    },
    [Keys.CUBE_ROOT]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cube root'),
    },
    [Keys.RADICAL]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Radical with custom root'),
    },
    [Keys.LEFT_PAREN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Left parenthesis'),
    },
    [Keys.RIGHT_PAREN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Right parenthesis'),
    },
    [Keys.LN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Natural logarithm'),
    },
    [Keys.LOG]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Logarithm with base 10'),
    },
    [Keys.LOG_N]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Logarithm with custom base'),
    },
    [Keys.SIN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Sine'),
    },
    [Keys.COS]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.SUREBTN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.EQUIV]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Always-equal sign'),
    },
    [Keys.TAN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Tangent'),
    },
    // [Keys.PI]: {
    //     type: KeyTypes.VALUE,
    //     ariaLabel: i18n._('Pi'),
    //     icon: {
    //         type: IconTypes.MATH,
    //         data: '\\pi',
    //     },
    // },
    // [Keys.THETA]: {
    //     type: KeyTypes.VALUE,
    //     ariaLabel: i18n._('Theta'),
    //     icon: {
    //         type: IconTypes.MATH,
    //         data: '\\theta',
    //     },
    // },
    [Keys.NOOP]: {
        type: KeyTypes.EMPTY,
    },

    // Input navigation keys.
    [Keys.UP]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Up arrow'),
    },
    [Keys.RIGHT]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Right arrow'),
    },
    [Keys.DOWN]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Down arrow'),
    },
    [Keys.LEFT]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Left arrow'),
    },
    [Keys.JUMP_OUT_PARENTHESES]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Navigate right out of a set of parentheses'),
    },
    [Keys.JUMP_OUT_EXPONENT]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Navigate right out of an exponent'),
    },
    [Keys.JUMP_OUT_BASE]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Navigate right out of a base'),
    },
    [Keys.JUMP_INTO_NUMERATOR]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Navigate right into the numerator of a fraction'),
    },
    [Keys.JUMP_OUT_NUMERATOR]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._(
            'Navigate right out of the numerator and into the denominator'),
    },
    [Keys.JUMP_OUT_DENOMINATOR]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._(
            'Navigate right out of the denominator of a fraction'),
    },
    [Keys.BACKSPACE]: {
        type: KeyTypes.INPUT_NAVIGATION,
        // I18N: A label for a button that will delete some input.
        ariaLabel: i18n._('Delete'),
    },

    // Keypad navigation keys.
    [Keys.DISMISS]: {
        type: KeyTypes.KEYPAD_NAVIGATION,
        // I18N: A label for a button that will dismiss/hide a keypad.
        ariaLabel: i18n._('Dismiss'),
    },
};

// Add in any multi-function buttons. By default, these keys will mix in any
// configuration settings from their default child key (i.e., the first key in
// the `childKeyIds` array).
// TODO(charlie): Make the multi-function button's long-press interaction
// accessible.
KeyConfigs[Keys.FRAC_MULTI] = {
    childKeyIds: [Keys.FRAC_INCLUSIVE, Keys.FRAC_EXCLUSIVE],
};

// TODO(charlie): Use the numeral color for the 'Many' key.
KeyConfigs[Keys.MANY] = {
    type: KeyTypes.MANY,
    // childKeyIds will be configured by the client.
};
KeyConfigs[Keys.MANY1] = {
    type: KeyTypes.MANY1,
    // childKeyIds will be configured by the client.
};

// Add in every numeral.
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of NUMBERS) {
    // TODO(charlie): Consider removing the SVG icons that we have for the
    // numeral keys. They can be rendered just as easily with text (though that
    // would mean that we'd be using text beyond the variable key).
    const textRepresentation = `${num}`;
    KeyConfigs[`NUM_${num}`] = {
        type: KeyTypes.VALUE,
        ariaLabel: textRepresentation,
        icon: {
            type: IconTypes.TEXT,
            data: textRepresentation,
        },
    };
}

// Add in every variable.
const LETTERS = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];
for (const letter of LETTERS) {
    const lowerCaseVariable = letter.toLowerCase();
    const upperCaseVariable = letter.toUpperCase();

    for (const textRepresentation of [lowerCaseVariable, upperCaseVariable]) {
        KeyConfigs[textRepresentation] = {
            type: KeyTypes.VALUE,
            ariaLabel: textRepresentation,
            icon: {
                type: IconTypes.MATH,
                data: textRepresentation,
            },
        };
    }
}

for (const key of Object.keys(KeyConfigs)) {
    KeyConfigs[key] = {
        id: key,
        // Default to an SVG icon indexed by the key name.
        icon: {
            type: IconTypes.SVG,
            data: key,
        },
        ...KeyConfigs[key],
    };
}

module.exports = KeyConfigs;
