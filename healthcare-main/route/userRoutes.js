const { register, login } = require("../controllers/usercontroller");
const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);

router.get("*", (req, res) => {
    res.redirect("/healthcare/login");
});

module.exports = router;
