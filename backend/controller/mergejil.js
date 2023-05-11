import Mergejil from "../model/mergejil.js"
export const getAllMergejil = async (_req, res) => {
  try {
    const mergejil = await Mergejil.find({}).populate("microMergejil");
    res.status(200).send({
      success: true,
      data: mergejil,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createMergejil = async (req, res) => {
  try {
    const mergejil = await Mergejil.create(req.body);
    res.status(200).send({
      success: true,
      data: mergejil,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const getMergejil = async (req, res) => {
  try {
    const mergejil = await Mergejil.findById(req.params.id).populate("microMergejil");
    res.status(200).send({
      success: true,
      data: mergejil,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const updateMergejil = async (req, res) => {
  try {
    const updatedMergejil = { ...req.body };
    await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send({
      success: true,
      data: updatedMergejil,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const removeMergejil = async (req, res) => {
  try {
    // const { role } = req.body;
    // if (role == "admin") {
    const mergejil = await Mergejil.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({
      success: true,
    });
    // }
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
// export const getUserByObject = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({
//       email,
//     });
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(400).send({
//         success: false,
//         error: "Invaild password",
//       });
//     }
//     const token = jwt.sign(
//       {
//         email: req.body.email,
//         name: req.body.name,
//         password: req.body.password,
//       },
//       "secret",
//       { expiresIn: "1d" }
//     );

//     res.status(200).send({
//       success: true,
//       data: user,
//       token,
//     });
    // if (user) {
    //   if (user.password !== password) {
    //     throw new Error("Email or password wrong");
    //   }
    //   res.status(200).send({
    //     data: user,
    //     token: token,
    //   });
    // } else {
    //   res.status(404).send({
    //     data: "tiim user bhq bn",
    //   });
    // }
//   } catch (error) {
//     res.status(400).send({
//       success: false,
//       error: error.message,
//     });
//   }
// };