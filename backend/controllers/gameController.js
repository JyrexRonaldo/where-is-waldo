const prisma = require("../config/prisma");

function checkCoordinate(x, y) {
  console.log({ x, y });
  if (x > 608 && x < 661 && y > 415 && y < 490) {
    return "waldo";
  } else if (x > 275 && x < 306 && y > 415 && y < 501) {
    return "odlaw";
  } else if (x > 725 && x < 794 && y > 413 && y < 489) {
    return "wizard";
  } else {
    return "No character found"
  }
}

function validateCoordinate(req, res) {
  // console.log(req.body);
  const { xCoordinate, yCoordinate } = req.body;
  console.log({ xCoordinate, yCoordinate });
  const character = checkCoordinate(xCoordinate, yCoordinate);
  console.log(character);
  // res.stat(character)
  return res.status(200).json(character);
}

module.exports = { validateCoordinate };
