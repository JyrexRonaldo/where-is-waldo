const { body } = require("express-validator");
const prisma = require("../config/prisma");
let secondsPassed = null;
let timesArray = [];

function checkCoordinate(x, y) {
  // console.log({ x, y });
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
  // console.log(req.body);
  const { xCoordinate, yCoordinate } = req.body;
  // console.log({ xCoordinate, yCoordinate });
  const character = checkCoordinate(xCoordinate, yCoordinate);
  // console.log(character);
  // res.stat(character)
  return res.status(200).json(character);
}

async function getTimes(req, res) {
  const { time, name } = req.body;
  timesArray.push(time);
  if (timesArray.length === 2) {
    secondsPassed = Math.floor(
      (new Date(timesArray[1]) - new Date(timesArray[0])) / 1000
    );

    // console.log("seconds pass", secondsPassed);
    // console.log("start", timesArray);
    timesArray = [];
    console.log("end", timesArray);
  }
  if (name) {
    await prisma.leaderboard.create({
      data: {
        time: secondsPassed,
        name,
      },
    });
    // console.log({ name, secondsPassed });
  }
}

async function createPost(req, res) {
  const { title, body, authorId, status } = req.body;
  await prisma.post.create({
    data: {
      title,
      body,
      authorId: +authorId,
      status: Boolean(status),
    },
  });
  res.json(req.body);
}

async function getScores(req, res) {
  

}

module.exports = { validateCoordinate, getTimes, getScores };
