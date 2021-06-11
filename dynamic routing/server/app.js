var express = require("express")

var app = express();

var PF = require('pathfinding');

var grid = new PF.Grid(5, 3); 
grid.setWalkableAt(0, 1, false);

var matrix = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
];
var grid = new PF.Grid(matrix);

var finder = new PF.AStarFinder({
    allowDiagonal: true
});
var path = finder.findPath(0, 0, 2, 2, grid);



app.get("/",(req,res) => {
    res.json({
        shortestpath:[...path]
    });
})

app.listen(3000,() => {
    console.log(`App started at port`)
})