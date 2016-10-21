var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.utc().format());

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.format('x') + 1000);
// console.log(parseInt(now.format('x'), 10) +1000);
// console.log(now.valueOf('x') + 1000);

// var timestamp = 1477061884000;
// var timestampMoment = moment.utc(timestamp);
// console.log(timestampMoment.format());
// console.log(timestampMoment.local().format());
// console.log(timestampMoment.local().format('HH:mm'));

// now.subtract(1, 'year');
// console.log(now.format());
// console.log(now.format('HH:mm'));
// console.log(now.format('YYYY-MM-DD dddd HH:MM'))