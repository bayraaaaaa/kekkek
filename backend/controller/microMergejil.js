import MicroMergejil from "../model/microMergejil.js";

export const getAllMicroMergejil = async (req, res) => {
  try {
    const microMergejil = await MicroMergejil.find({});
    res.status(200).send({
      data: microMergejil,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createMicroMergejil = async (req, res) => {
  try {
    // const shortlink = nanoid(4); //=> "V1StGXR8_Z5jdHi6B-myT"
    const microMergejil = await MicroMergejil.create({ ...req.body });
    res.status(200).send({
      success: true,
      data: microMergejil,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deleteMicroMergejil = async (req, res) => {
  try {
    const { id } = req.params;
    const microMergejil = await MicroMergejil.findByIdAndRemove({ _id: id });
    console.log(microMergejil, "ahah");
    res.status(200).send({
      success: true,
      data: microMergejil,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const findMicroMergejil = async (req, res) => {
  try {
    const { params } = req.params;
    const microMergejil = await MicroMergejil.findOne({
      Shortlink: params,
    });
    res.status(200).send({
      success: true,
      data: microMergejil,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};