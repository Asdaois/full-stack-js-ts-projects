import { NextApiRequest, NextApiResponse } from "next";

import User from "models/User";
import connectDB from "../../../middleware/mongodb";

/** 
* @param {NextApiRequest} req
* @param {NextApiResponse} res
*/
const handler = async (req, res ) => {
  try {
    switch (req.method) {
      case "POST": {
        // TODO: This is a update? This is wrong but axios don't work
        const doc = await User.findByIdAndUpdate(req.query.id, {...req.body})
        res.redirect("/users/")
        break;
      }
      case "GET": {
        const doc = await User.findById(req.query.id)
        res.json(doc);
        break;
      }
      case "DELETE": {
        await User.findByIdAndDelete(req.query.id);
        res.redirect("/users/")
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
