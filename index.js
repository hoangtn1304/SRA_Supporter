var app = require("./app");
const port = process.env.PORT || 4000;

var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});