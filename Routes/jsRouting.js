//variable statements

const fs =require ("fs");
var data =JSON.parse(fs.readFileSync(".db/db.json", utf8));

module.exports = function(app){
    app.get("/api.notes",function(req, res){
        res.json(data);
    });

    app.post("/api/notes", function (req,res){
        let NewNote =req.body;
        let uniqueID = (data.length).toString();
        console.log(uniqueID);
        NewNote.id = uniqueID;
        data.push(NewNote);

        fs.writeFileSync("./db/db.json", JSON.stringfy(data), function(err){
            if (err) throw (err);
        });
        res.json(data);
    });

    app.get("/api/notes",function(req,res){
        res.json(data[Number(req.params.id)]);
    });

    //the user needs to be able to delete their note as well

    app.delete("/api/notes/:id", function*req,res
}