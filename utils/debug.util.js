var util = require('util');

export function logObject(object, options) {
    console.log(util.inspect(object, options));
}
