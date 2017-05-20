var Trilogy = require("trilogy");
// 把一些公用的库放到这里来引用
var $ = require("jquery");

const db = new Trilogy('./app/db/sincerp.sqlite3', {
  client: 'sql.js'
});