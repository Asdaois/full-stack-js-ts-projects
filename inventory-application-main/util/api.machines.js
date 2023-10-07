import { Machine, MachineType } from "../models/index"
/**
 * @description Handle Machine POST
 * @async
 * @param {{status: String, machine_type: String, serial: String, details: String, prize: String}} body
 * @returns {void}
 */
export const post = async (body) => {
  try {
    const prize = parseInt(body.prize)
    const machineType = await MachineType.findOne({name: body.machine_type})
    const doc = new Machine({ ...body, prize, machine_type: machineType._id });
    const docSaved = await doc.save();
  } catch (err) {
    console.log({ err });
  }
};
