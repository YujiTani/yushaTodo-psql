const router = express.Router();
let { users } = require("../TestData/users");
app.use(express.json());

// ユーザー一覧取得
router.get("/", (req, res) => {
  res.send(users);
});

// IDの一致するユーザー取得
router.get("/:id", (req, res) => {
  const user = users.find((user) => {
    return user.id === parseInt(req.params.id)
  })
  res.send(user);
});

// ユーザー登録
router.post("/", (req, res) => {
  const user = {
    id: users.length + 1,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
    password: req.body.password,
  };

  users.push(user);
  res.send(user);
});

// ユーザー情報更新
router.put("/:id", (req, res) => {
  const user = users.find((user) => {
    return user.id === parseInt(req.params.id);
  });

  user.lastName = req.body.lastName
  user.firstName = req.body.firstName

  res.send(user);
});

// ユーザー削除
router.delete("/:id", (req, res) => {
  users = users.filter((user) => {
    return user.id !== parseInt(req.params.id);
  });

  res.send(`ユーザーID ${req.params.id}を削除しました。`);
});

module.exports = router;