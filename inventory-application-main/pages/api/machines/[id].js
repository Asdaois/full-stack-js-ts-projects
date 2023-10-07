import { NextApiRequest, NextApiResponse } from "next";
import MachineryType from "../../../models/MachineryType";
import Machinery from "../../../models/Machinery";
import connectDB from "../../../middleware/mongodb";
/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const handler = async (req, res) => {
  console.log(req.method);
  try {
    switch (req.method) {
      case "POST": {
        const machineType = await MachineryType.findOne({
          name: req.body.machine_type,
        });
        const machineUpdate = {
          ...req.body,
          ["machine_type"]: machineType._id,
        };
        console.log({ machineType, body: req.body, machineUpdate });
        const doc = await Machinery.findByIdAndUpdate(
          req.query.id,
          machineUpdate
        );
        res.redirect("/machines");
        break;
      }
      case "GET": {
        const doc = await Machinery.findById(req.query.id);
        await doc.populate("machine_type");
        res.json(doc);
        break;
      }
      case "DELETE": {
        const doc = await Machinery.findByIdAndDelete(req.query.id);
        res.json({ message: "deleted", doc });
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
