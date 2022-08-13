const Task = require("../Models/Task");

const getAll = async (req, res) => {
  try {
    const allTask = await Task.find({});
    res.status(200).json(allTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

const get = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id).exec();
    if (!task) {
      res.status(404).json(`ID:${id}は存在しません`);
    }

    res.status(200).json(task);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json(`不正なIDを検出しました`);
    }
    res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const updateTask = await Task.findByIdAndUpdate(id, req.body);

    if (!updateTask) {
      res.status(404).json(`ID:${id}は存在しません`);
    }

    res.status(200).json(updateTask);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json(`不正なIDを検出しました`);
    }
    res.status(500).json(error);
  }
};

const deleteSingle = async (req, res) => {
  try {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);

    res.status(200).json(`ID:${id}は正常に削除されました`);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json(`不正なIDを検出しました`);
    }
    res.status(500).json(error);
  }
};

module.exports = {
  getAll,
  get,
  create,
  update,
  deleteSingle,
};