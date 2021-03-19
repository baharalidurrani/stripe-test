import axios from "axios";
import { Request, Response } from "express";
import { getStripeService } from "./../services";

export const getStripeController = (req: Request, res: Response) => {
  try {
    const result = getStripeService();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(503).send("Problem while fetching data from Stripe API!");
  }
};
