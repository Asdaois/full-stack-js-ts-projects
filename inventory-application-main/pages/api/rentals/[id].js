import { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../middleware/mongodb";

/** 
* @param {NextApiRequest} req
* @param {NextApiResponse} res
*/
const handler = async (req, res ) => {
  try {
    switch (req.method) {
      case "PUT": {
        break;
      }
      case "GET": {
        break;
      }
      case "DELETE": {
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
