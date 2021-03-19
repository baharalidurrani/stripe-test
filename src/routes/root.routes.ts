import express from "express";
import { homeController, getStripeController } from "../controllers";

export const Router = express.Router();

Router.get("/", homeController);
Router.get("/api/stripe", getStripeController);
