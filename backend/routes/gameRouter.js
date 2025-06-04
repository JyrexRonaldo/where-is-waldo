const { Router } = require("express");
const gameRouter = Router();
const gameController = require("../controllers/gameController");

// gameRouter
//   .route()
//   .post();

gameRouter.route("/validate").post(gameController.validateCoordinate);

// gameRouter
//   .route("/test-auth")
//   .get(authController.authenticateUser, authController.testMiddleware);
// gameRouter.route("/test-auth2").get(authController.testMiddleware);

module.exports = gameRouter;
