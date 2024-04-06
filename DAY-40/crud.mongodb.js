use("CRUD");

// Create
// db.createCollection("Courses");

db.Courses.insertOne({
    "name":"CODE WITH HARRY FREE COURSE",
    "price":"0",
    "Projects":"5"
})

db.Courses.insertMany([{
    "name":"CODE WITH HARRY FREE COURSE",
    "price":"0",
    "Projects":"7"
},
{
    "name":"CODE WITH HARRY FREE COURSE",
    "price":"0",
    "Projects":"8"
}])

// READ
let a=db.Courses.find({"Projects":"5"});
console.log(a.count());

let b=db.Courses.findOne({"Projects":"5"});
console.log(b);

// UPDATE
db.Courses.updateOne({"price":"0"},{$set:{"price":"1000"}})

db.Courses.update({"price":"0"},{$set:{"price":"1000"}})

db.Courses.updateMany({"price":"0"},{$set:{"price":"10000"}})

// DELETE
db.Courses.deleteOne({"price":"1000"});
db.Courses.deleteMany({"price":"1000"});