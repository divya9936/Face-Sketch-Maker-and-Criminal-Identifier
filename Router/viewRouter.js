const express = require('express');
const viewRouter = express.Router();
const {getLandingpage,getStartPage,getDocumentsPage,getSignIn,getSignUp} = require('../Controller/viewController');


viewRouter.route("/").get(getLandingpage);
viewRouter.route("/start").get(getStartPage);
viewRouter.route("/document").get(getDocumentsPage);
viewRouter.route("/signIn").get(getSignIn);
viewRouter.route("/signUp").get(getSignUp);
module.exports.viewRouter = viewRouter;