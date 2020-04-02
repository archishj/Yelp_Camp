const express = require("express");
const router = express.Router();
const Campground = require("../models/campground");

//Index Route
router.get("/", (req, res) => {
    Campground.find({}, (err, allcampgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {
                campgrounds: allcampgrounds,
                currentUser: req.user
            });
        }
    });
});

//Create route
router.post("/", isLoggedIn, (req, res) => {
    const image = req.body.image;
    const name = req.body.name;
    const description = req.body.description;
    const author = {
        id: req.user._id,
        username: req.user.username
    };
    const newCampground = {
        name: name,
        image: image,
        description: description,
        author: author
    };
    Campground.create(newCampground, (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form routw
router.get("/new", isLoggedIn, (req, res) => {
    res.render("campgrounds/new");
});

//SHOWS details about one campgroun
router.get("/:id", (req, res) => {
    Campground.findById(req.params.id)
        .populate("comments")
        .exec((err, foundCampground) => {
            if (err) {
                console.log(err);
            } else {
                res.render("campgrounds/show", { campground: foundCampground });
            }
        });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
