const { user, book } = require('../orm/models');

const findUserAndBookByIdService = async (id) =>
  await user.findOne({
    where: { id },
    include: [{ model: book, as: 'books', through: { attributes: [] } }],
  });

module.exports = {
  findUserAndBookByIdService,
};
