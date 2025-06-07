const prisma = require("../config/prisma");
let secondsPassed = null;
let timesArray = [];

function checkCoordinate(x, y) {
  if (x > 608 && x < 661 && y > 415 && y < 490) {
    return "waldo";
  } else if (x > 275 && x < 306 && y > 415 && y < 501) {
    return "odlaw";
  } else if (x > 725 && x < 794 && y > 413 && y < 489) {
    return "wizard";
  } else {
    return "No character found";
  }
}

function validateCoordinate(req, res) {
  const { xCoordinate, yCoordinate } = req.body;
  const character = checkCoordinate(xCoordinate, yCoordinate);
  return res.status(200).json(character);
}

async function getTimes(req, res) {
  const { time, name } = req.body;
  // timesArray.push(time);
  // if (timesArray.length === 2) {
  //   secondsPassed = Math.floor(
  //     (new Date(timesArray[1]) - new Date(timesArray[0])) / 1000
  //   );
  //   timesArray = [];
  // }
  if (name) {
    await prisma.leaderboard.create({
      data: {
        // time: secondsPassed,
        time,
        name,
      },
    });
    // console.log({ name, secondsPassed });
  }
}

async function getScores(req, res) {
  const allScores = await prisma.leaderboard.findMany({
    orderBy: [
      {
        time: "asc",
      },
    ],
  });
  res.status(200).json(allScores);
}

module.exports = { validateCoordinate, getTimes, getScores };
