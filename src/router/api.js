import express from "express";
import "express-async-errors";
import usersRouter from "./users.js";
import housesRouter from "./houses.js";
import reservationsRouter from "./reservations.js";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/houses", housesRouter);
router.use("/reservations", reservationsRouter);

export default router;
