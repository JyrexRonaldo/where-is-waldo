const prisma = require("../config/prisma");


function testMiddleware(req, res) {
  console.log(req.user, "this works");
  res.end();
}

module.exports = {  };
