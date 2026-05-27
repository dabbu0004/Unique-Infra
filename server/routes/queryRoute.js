import express from "express";
import {
  queryEmailController,
  queryPostController,
} from "../controllers/queryController.js";

const queryRoute = express.Router();

queryRoute.post("/querypost", queryPostController);
queryRoute.post("/email", queryEmailController);

export default queryRoute;
