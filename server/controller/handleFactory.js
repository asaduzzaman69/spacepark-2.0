const catchAsync = require("../utils/catchAsync");

const getAll = (Model) =>
  catchAsync(async (req, res) => {
    let filter = {};
    if (req.params.userId) filter = { _id: req.params.userId };
    const data = await Model.find(filter);

    res.status(200).json({
      status: "success",
      data: {
        data,
      },
    });
  });

const createOne = (Model) =>
  catchAsync(async (req, res) => {
    const document = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: document,
      },
    });

});

module.exports = {
  getAll,
  createOne
};
