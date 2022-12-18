const express = require("express");
const { Books, sequelize } = require("../models");
const router = express.Router();
const axios = require("axios");

const BookController = require("../controller/booksController");

router.get("/", BookController.allBooks);

router.post("/newbook", BookController.createNewBook);

router.post("/update", BookController.updateBook);

router.post("/delete/:id", BookController.deleteBook);

router.post("/search", BookController.findBooks);

// ejs routes

router.get("/newbook", (req, res) => {
  return res.render("addBook");
});

router.get("/update/:id", (req, res) => {
  return res.render("updateBook", { bookId: req.params.id });
});

module.exports = router;
