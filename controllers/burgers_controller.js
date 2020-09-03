var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", (req, res) => {
    burger.all(function(data) {
        var hbsObject = { burgers: data };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create( 
        ["name", "devoured"],
        [req.body.name, req.body.devoured],
        function(result) {
            res.json({ id: result.insertId })
        });
});

router.get("/api/burgers", (req, res) => {
    burger.all( (data) => {
        // console.log(data);
        return res.json(data);
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id=" + req.params.id;
    console.log("condition", condition);

    burger.update(
        { devoured: req.body.devoured },
        condition,
        function(result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } 
            else {
                res.status(200).end();
            }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    var condition = "id=" + req.params.id;
    
    burger.delete(condition, function(result) {
        if(result.affectedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
})

module.exports = router;