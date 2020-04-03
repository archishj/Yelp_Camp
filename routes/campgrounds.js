const express = require("express");
const router = express.Router();
const Campground = require("../models/campground");
const middleware = require("../middleware");

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
router.post("/", middleware.isLoggedIn, (req, res) => {
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
            req.flash("success", "Successfully created campground");
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form routw
router.get("/new", middleware.isLoggedIn, (req, res) => {
    res.render("campgrounds/new");
});

//SHOWS details about one campgroun
router.get("/:id", (req, res) => {
    Campground.findById(req.params.id)
        .populate("comments")
        .exec((err, foundCampground) => {
            if (err || !foundCampground) {
                req.flash("error", "Campground not found");
                res.redirect("back");
            } else {
                res.render("campgrounds/show", { campground: foundCampground });
            }
        });
});

//EDIT
router.get("/:id/edit", middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        res.render("campgrounds/edit", { campground: foundCampground });
    });
});

//UPDATE
router.put("/:id", middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findByIdAndUpdate(
        req.params.id,
        req.body.campground,
        (err, updatedCampground) => {
            if (err) {
                console.log(err);
            } else {
                req.flash("success", "Campground successfully updated");
                res.redirect("/campgrounds/" + req.params.id);
            }
        }
    );
});

//DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findByIdAndRemove(req.params.id, err => {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            req.flash("success", "Comment successfully deleted");
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;
