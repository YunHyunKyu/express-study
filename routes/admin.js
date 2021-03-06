const express = require("express");
const router = express.Router();

function testMiddleware(req, res, next) {
  console.log("첫번째 미들웨어");
  next();
}

function testMiddleware2(req, res, next) {
  console.log("두번째 미들웨어");
  next();
}

// function loginRequired(req, res, next) {
//   if( 로그인이 되어있지 않으면 ) {
//     res.redirect(로그인 창으로 이동)
//   } else {
//     next();
//   }
// }

// admin 이후 url
router.get("/", testMiddleware, testMiddleware2, (req, res) => {
  res.send("admin 이후 url");
});

// admin/products
router.get("/products", (req, res) => {
  // res.send("admin products");
  res.render("admin/products.html", {
    message: "hello222",
    online: "express",
  });
});

router.get("/products/write", (req, res) => {
  res.render("admin/write.html");
});

router.post("/products/write", (req, res) => {
  res.send(req.body);
});

module.exports = router;
