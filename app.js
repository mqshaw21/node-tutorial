
//npm - global command comes with Node
//npm--version
//local dependency - use only in this particular project npm i <packageName>
//global dependency- use it in any project npm install -g <packageName>

//package.json = manifest file  (stores important information about project/package)
//npm init (step by step questions) or npm init -y

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);