const path = require("path");

module.exports = function (app) {
    app.get("/",function(req,res){    
        res.sendFile(path.join(__dirname,"../Public/index.html"));
    });
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../Public/exercise.html"));
    });
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../Public/stats.html"));
    });
}