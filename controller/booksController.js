const { Books, sequelize } = require("../models");
const { Op } = require("sequelize");
const BookController = {};

BookController.createNewBook = async (req, res) => {
  try {
    const newBook = req.body;
    console.log("newBook", newBook);
    const saveBook = await Books.create(newBook);
    console.log("savebook", saveBook);
    return res.redirect("/");
    // return res.status(201).send({ status: "success", data: saveBook });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error });
  }
};

BookController.updateBook = async (req, res) => {
  try {
    const bookId = req.body.bookId;
    console.log("bookid", bookId);
    const updateBook = req.body;
    const saveUpdate = await Books.update(updateBook, {
      where: {
        id: bookId,
      },
    });
    return res.status(200).redirect("/");

    // return res.status(201).send({ status: "success", data: saveUpdate });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error });
  }
};

BookController.allBooks = async (req, res) => {
  try {
    const allBook = await Books.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.render("allBooks", { allBook: allBook });
    // return res.status(200).send({ status: "success", data: allBook });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error });
  }
};

BookController.findBooks = async (req, res) => {
  try {
    const searchTitle = req.body.search;
    const findBook = await Books.findAll({
      where: { title: { [Op.iLike]: `%${searchTitle}%` } },
      order: [["createdAt", "DESC"]],
    });
    return res.render("allBooks", { allBook: findBook });

    // return res.status(200).send({ status: "success", data: findBook });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error });
  }
};

BookController.deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    console.log("deleteid", bookId);
    await Books.destroy({
      where: {
        id: bookId,
      },
    });
    return res.redirect("/");
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error });
  }
};

module.exports = BookController;
