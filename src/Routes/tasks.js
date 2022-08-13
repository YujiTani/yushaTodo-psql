const express = require("express");
const router = express.Router();
const {    
  getAll,
  get,
  create,
  update,
  deleteSingle
} = require('../Controllers/tasks');

// タスク一覧取得
router.get("/", getAll)

// タスク取得
router.get("/:id", get)

// 新規タスク作成
router.post("/", create)

// タスク更新
router.put("/:id", update)

// タスク削除
router.delete("/:id", deleteSingle)

module.exports = router;