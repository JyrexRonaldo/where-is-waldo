const { Router } = require("express");
const gameRouter = Router();
const gameController = require("../controllers/gameController");

gameRouter.route("/validate").post(gameController.validateCoordinate);
gameRouter
  .route("/best")
  .post(gameController.getTimes)
  .get(gameController.getScores);

module.exports = gameRouter;
