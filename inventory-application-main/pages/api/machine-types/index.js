import { NextApiRequest, NextApiResponse } from "next";

import { MachineType } from "@/models";
import connectDB from "../../../middleware/mongodb";

/** 
* @param {NextApiRequest} req
* @param {NextApiResponse} res
*/
const handler = async (req, res ) => {
  try {
    switch (req.method) {
      case "POST":
        if (!req.body.name) res.json({ error: "data invalid" });
        const newMachineryType = new MachineType({ name: req.body.name });
        newMachineryType.save((err, result) => {
          if (err) res.json({ error: "error" });

          res.redirect("/machine-types");
        });

        break;

      case "GET": {
        const docs = await MachineType.find({});
        res.json(docs);
        break;
      }
      default:
        break;
    }
  } catch (err) {}
};

export default connectDB(handler);
