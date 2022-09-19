const { findUserAndBookByIdService } = require('../services/userService');

const findUserAndBookByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findUserAndBookByIdService(id);

    if (!result) {
      return res.status(400).json({ result });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  findUserAndBookByIdController,
};
