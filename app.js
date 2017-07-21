console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);
console.log('Result:', notes.add(3, 5));
// console.log(_.isString(true));
// console.log(_.isString('Matt'));
var filtered = _.uniq(['Matt', 1, 'Matt', 1, 2, 3, 4])
console.log(filtered);

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
