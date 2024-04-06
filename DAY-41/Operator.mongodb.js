use("CRUD");

// Operators

let a;

// ******** Comparison Operators ********

a=db.Courses.findOne({price:{$eq:"10000"}});
a=db.Courses.findOne({price:{$gt:"10000"}});
// a=db.Courses.findOne({price:{$gte:"10000"}});

a= db.Courses.find({price:{$in:["10000","15000"]}});

a=db.Courses.findOne({price:{$lt:"15000"}});
// a=db.Courses.findOne({price:{$lte:"10000"}});
// a=db.Courses.findOne({price:{$ne:"15000"}});
// a= db.Courses.find({price:{$nin:["10000","15000"]}});

// ******* Logical Operators ********

// a=db.Courses.find({$and:[{price:"10000"},{Projects:"7"}]})
// a=db.Courses.find({price:{$not:{$ne:"10000"}}});
// a=db.Courses.find({$nor:[{price:"15000"},{Projects:"8"}]});
a=db.Courses.find({$or:[{price:"15000"},{Projects:"7"}]});

// ******* Element Operator ********

// a=db.Courses.find({price:{$exists:"10000"}});
a=db.Courses.find({name:{$type:"string"}});

console.log(a);