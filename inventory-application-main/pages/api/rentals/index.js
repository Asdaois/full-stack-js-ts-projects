import { NextApiRequest, NextApiResponse } from "next";

import { Rental } from "@/models";
import connectDB from "../../../middleware/mongodb";

/** 
* @param {NextApiRequest} req
* @param {NextApiResponse} res
*/
const handler = async (req, res ) => {
  try {
    switch (req.method) {
      case "POST": {
        const rental = new Rental({ ...req.body });
        await rental.save();
        res.json(rental);
        break;
      }
      case "GET": {
        const docs = await Rental.find({})
          .populate("user")
          .populate("machinery_rented");
        res.json(docs);
        break;
      }
      default:
        break;
    }
  } catch (err) {
    res.json(err);
  }
};

export default connectDB(handler);
