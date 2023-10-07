import { NextApiRequest, NextApiResponse } from "next";

import { Machine } from "@/models";
import connectDB from "../../../middleware/mongodb";
import { post } from "../../../util/api.machines";

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const handler = async (req, res) => {
  try {
    switch (req.method) {
      case "POST": {
        post(req.body);
        res.redirect("/")
        break;
      }
      case "GET": {
        const docs = await Machine.find({}).populate("machine_type");
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
