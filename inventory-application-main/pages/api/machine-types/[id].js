import { NextApiRequest, NextApiResponse } from "next";

import MachineryType from "../../../models/MachineryType";
import connectDB from "../../../middleware/mongodb";
import { Machine } from "@/models";

/** 
* @param {NextApiRequest} req
* @param {NextApiResponse} res
*/
const handler = async (req, res ) => {
  console.log(req.method);
  switch (req.method) {
    case "PUT":
      const { name } = req.body;
      await MachineryType.findByIdAndUpdate(
        req.query.id,
        { name: name },
        (err, result) => {
          res.json(result);
          res.redirect("/machine-types")
        }
      );
      break;
    case "GET":
      MachineryType.findById(req.query.id, (err, result) => {
        console.log(result);
        res.json(result);
      });
      break;
    case "DELETE":
      const machine = await Machine.findOne({machine_type: req.query.id})
      if (machine) {
        console.log("Found one");
        break;
      }
      await MachineryType.findByIdAndDelete(req.query.id, (err, result) => {
        res.json(result)
      })
      break;
    default:
      break;
  }
};

export default connectDB(handler);
