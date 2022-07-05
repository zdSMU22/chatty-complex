const routes = require("express").Router();
const user = require("./user");
const thoughts = require ("./thoughts");


routes.use("/thoughts", thoughts);
routes.use ("/user", user);

module.export = routes;
