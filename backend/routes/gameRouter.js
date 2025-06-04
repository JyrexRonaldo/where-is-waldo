const { Router } = require("express");
const gameRouter = Router();
const gameController = require("../controllers/gameController");

// gameRouter
//   .route()
//   .post();

// gameRouter.route("/log-in").post(authController.handleLogIn);

// gameRouter
//   .route("/test-auth")
//   .get(authController.authenticateUser, authController.testMiddleware);
// gameRouter.route("/test-auth2").get(authController.testMiddleware);

module.exports = gameRouter;
