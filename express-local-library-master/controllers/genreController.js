const Genre = require("../models/genre");
const Book = require("../models/book");
const async = require("async");
// Display list of all Genre.
exports.list = (req, res) => {
  Genre.find().exec((err, list_genres) => {
    if (err) return next(err);

    res.render("genre/list", {
      title: "Genre list",
      genre_list: list_genres,
    });
  });
};

// Display detail page for a specific Genre.
exports.detail = (req, res, next) => {
  async.parallel(
    {
      genre: (callback) => {
        Genre.findById(req.params.id).exec(callback);
      },
      genre_books: (callback) => {
        Book.find({ genre: req.params.id }).exec(callback);
      },
    },
    (err, results) => {
      if (err) return next(err);

      if (results.genre === null) {
        const err = new Error("Genre not found");
        err.status = 404;
        return next(err);
      }

      res.render("genre/detail", {
        title: "Genre Detail",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    }
  );
};

// Display Genre create form on GET.
exports.create_get = (req, res) => {
  res.render("genre/form", { title: "Create Genre" });
};

const { body, validationResult } = require("express-validator");
// Handle Genre create on POST.
exports.create_post = [
  body("name", "Genre name required").trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req);

    const genre = new Genre({ name: req.body.name });

    if (!errors.isEmpty()) {
      // There are errors
      // Render the form again with sanitized values / error messages.
      res.render("genre/form", {
        title: "Create Genre",
        errors: errors.array(),
        genre,
      });
      return;
    }

    Genre.findOne({ name: req.body.name }).exec((err, found_genre) => {
      if (err) return next(err);

      if (found_genre) {
        res.redirect(found_genre.url);
      } else {
        genre.save((err) => {
          if (err) return next(err);
          res.redirect(genre.url);
        });
      }
    });
  },
];

// Display Genre delete form on GET.
exports.delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

// Handle Genre delete on POST.
exports.delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

// Display Genre update form on GET.
exports.update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

// Handle Genre update on POST.
exports.update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
