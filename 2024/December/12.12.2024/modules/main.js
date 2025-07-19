const { add, subtract } = require('./module.js');
const log = require('./module.js').default;

log(add(1, 2)); // 3
log(subtract(1, 2)); // -1