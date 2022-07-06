const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require ("./thought-routes");


routes.use("/thoughts", thoughtRoutes);
routes.use ("/user", userRoutes);

module.export = router;
