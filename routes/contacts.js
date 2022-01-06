const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("contacts 이후 url");
});

router.get("/list", (req, res) => {
  //res.send("contacts list");
  res.render("contacts/list.html", {
    message: "hello",
    online: "contacts list",
  });
});

module.exports = router;
