const routes = require("express").Router();
const user = require("./user-routes");
const thoughts = require ("./thought-routes");


routes.use("/thoughts", thoughts);
routes.use ("/user", user);

module.export = routes;
