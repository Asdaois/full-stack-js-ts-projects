import { NextApiRequest, NextApiResponse } from "next";

import { User } from "@/models";
import connectDB from "../../../middleware/mongodb";

/** 
* @param {NextApiRequest} req
* @param {NextApiResponse} res
*/
const handler = async (req, res) => {
  try {
    switch (req.method) {
      case "POST": {
        const user = new User({
          ...req.body,
          phone_number: parseInt(req.body.phone_number),
        });
        const docs = await user.save();
        res.redirect("/users");
        break;
      }
      case "GET": {
        const docs = await User.find({});
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
