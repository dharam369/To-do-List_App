const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];
let workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {

    let today = new Date();
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let day = today.toLocaleDateString("en-US", options);
    
    res.render("list", { listTitle: day, newListItems: items });

});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/Work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
})

app.get("/Work", function (req,res) {
    res.render("list", { listTitle: "Work", newListItems: workItems });
});


app.get("/about", function (req,res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
