//variable statements

const fs =require ("fs");
var data =JSON.parse(fs.readFileSync(".db/db.json", utf8));

module.exports = function(app){
    app.get("/api.notes",function(req, res){
        res.json(data);
    });

    app.post("/api/notes", function (req,res){
        let NewNote =req.body;
        let NewID = (data.length).toString();
        console.log(NewID);
        NewNote.id = NewID;
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

    app.delete("/api/notes/:id", function(req,res){
        let NoteID=req.params.id;
        let UniqueID=0;
        console.log(`Currently delete note with the id as follows: ${NoteID}`);
        data=data.filter(CurrentNote =>{
            return CurrentNote.id != NoteID;
        });
        for (CurrentNote of data){
            CurrentNote.id = UniqueID.toString();
            UniqueID ++;
        }
        fs.writeFileSync("./db/db.json", JSON.stringify());
        newID ++;
    });
}
        