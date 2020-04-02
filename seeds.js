const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");

var data = [
    {
        name: "Cloud Rest",
        image:
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
        description:
            "Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent or a recreational vehicle. Typically participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities. Camping can be enjoyed through all four seasons."
    },
    {
        name: "Cloud Rest",
        image:
            "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
        description:
            "Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent or a recreational vehicle. Typically participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities. Camping can be enjoyed through all four seasons."
    },
    {
        name: "Cloud Rest",
        image:
            "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description:
            "Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent or a recreational vehicle. Typically participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities. Camping can be enjoyed through all four seasons.t"
    }
];

function seedDB() {
    Campground.remove({}, err => {
        // if (err) {
        //     console.log(err);
        // }
        // console.log("removed campgrounds");
        // data.forEach(seed => {
        //     Campground.create(seed, (err, campground) => {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             console.log("added a campground");
        //             //create a comemtn
        //             Comment.create(
        //                 {
        //                     text: "This place is great",
        //                     author: "Homer"
        //                 },
        //                 (err, comment) => {
        //                     // console.log(comment);
        //                     if (err) {
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("comment created");
        //                     }
        //                 }
        //             );
        //         }
        //     });
        // });
    });
}

module.exports = seedDB;
