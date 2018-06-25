(function f() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }
        return str + this;
    };

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }
        return this + str;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {

        // If string is less than N case:
        if (this.length < n) {
            return this.toString();
        }

        // N less than 4 case:

        if (n < 4) {
            return '.'.repeat(n);
        }

        // If string is longer than N case:


        if (this.length > n) {
            let splittedStr = this.split(' ');

            // No space case:
            if (splittedStr.length === 1) {
                let result = '';
                for (let i = 0; i < n - 3; i++) {
                    result += this[i];
                }
                return result + '...';
            }

            // If there are spaces case:

            let result = '';

            for (let i = 0; i < splittedStr.length; i++) {
                if ((result + splittedStr[i] + '...').length <= n) {
                    result += ' ' + splittedStr[i];
                    result = result.trim();
                }
                else {
                    break;
                }
            }
            return result += '...';
        }

        // If the string length is equal to N

        if(this.length === n){
            return this.toString();
        }
    };


    String['format'] = function (text, parameters) {
        let splitStr = text.split('');
        while (true) {
            let openIndex = splitStr.indexOf('{');
            let closeIndex = splitStr.indexOf('}');

            if (openIndex === -1 || closeIndex === -1) {
                break;
            }

            let placeIndex = closeIndex - 1;
            let paramIndex = Number(splitStr[placeIndex]);

            if (paramIndex + 1 < 0 || paramIndex + 1 > arguments.length - 1) {
                break;
            }


            splitStr[placeIndex] = arguments[paramIndex + 1];
            splitStr[openIndex] = '';
            splitStr[closeIndex] = '';
        }


        return splitStr.filter(w => w !== '').join('').trim();
    };

}());