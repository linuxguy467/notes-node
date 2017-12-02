String.prototype.isPalindrome = function isPalindrome () {
    'use strict';

    if (this.length < 2) {
        return false;
    }

    const len = this.length;

    for (const c of this) {
        const i = this.indexOf(c);
        if (c !== this[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

String.prototype.isPalindromeCaseInSensitive =
    function isPalindromeCaseInSensitive () {
    'use strict';

    if (this.length < 2) {
        return false;
    }

    const len = this.length;
    const s = this.toLocaleLowerCase();

    for (const c of s) {
        const i = s.indexOf(c);
        if (c !== s[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

String.prototype.reverse = function reverse () {
    'use strict';

    if (this.length < 2 || this.isPalindrome()) {
        return this;
    }

    const newString = this.split('')
        .reverse()
        .reduce((prev, cur) => prev + cur);

    return newString;
};