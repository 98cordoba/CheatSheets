/* SHOW ALL DATABASES */
show dbs
/* SHOW CURRENT DATABASE */
db
/* CREATE OR SWITCH DATABASE */
use acme
/* DROP */
db.dropDatabase()
/* CREATE COLLECTION */
db.createCollection('posts')
/* SHOW COLLECTIONS */
show collections
/* GET ALL ROWS */
db.posts.find()
/*  GET ALL ROWS FORMATTED */
db.posts.find().pretty()
/* FIND ROWS */
db.posts.find({category:'News'})
/* SORT ROWS */
db.posts.find().sort({title: 1}).pretty()// ASC
db.posts.find().sort({title: -1}).pretty()// DESC
/* COUNT ROWS */
db.posts.find.count()
db.posts.find({category:'news'}).count()
/*  INSERT ROW */
db.posts.insert({
    title:      'Post One',
    body:       'Body of post one',
    category:   'News',
    tags:       ['news','events'],
    user : {
        name:   'Joseph',
        status: 'author',
    },
    date: Date()
})
/* INSERT MULTIPLE ROWS */
db.posts.insertMany([
    {
    title:      'Post Two',
    body:       'Body of post Two',
    category:   'TI',
    date: Date()
    },
    {
    title:      'Post Three',
    body:       'Body of post Three',
    category:   'News',
    date: Date()
    },
    {
    title:      'Post Four',
    body:       'Body of post Four',
    category:   'Sports',
    date: Date()
    }
])
/*  FIND BY ELEMENT IN ARRAY */
db.posts.find({
    comments: {
        $elementMatch: {
            user: 'Mary williams'
        }
    }
})
/* ADD INDEX */
db.posts.createIndex({title:'text'})
/*TEXT SEARCH */
db.posts.find({
    $text : {
        $search: "\"Post 0\"" 
    }
})
/* GREATER AND LESS THAN */
db.posts.find({views:{$gt : 2}})
db.posts.find({views:{$gte : 7}})
db.posts.find({views:{$lt : 7}})
db.posts.find({views:{$lte : 7}})
/*  RENAME FIELD */
db.posts.update({ title:'Post two'},{
    $rename: {
        likes: 'views'
    }
})
/* DELETE ROW   */
db.posts.remove({title:'Post four'})
/* SUB-DOCUMENTS*/
db.posts.update({title:'Post one'},{
    $set: {
        comments: [
            {
                body: 'Comment One',
                user: 'Joseph',
                date: Date()
            },
            {
                body: 'Comment Two',
                user: 'Fabian',
                date: Date()
            }
        ]
    }
})
/*  UPDATE ROW */
db.posts.update({title:'Post Two'},
    {
        title: 'Post Two',
        body: 'New body for Post Two',
        date: Date()
    },{
        upsert: true
    })
/*  UPDATE SPECIFIC FIELD */
db.posts.update({title:'Post Two'},{
    $set: {
                body: 'Body for post two',
                category: 'TI'
    }
})
/*  INCREMENT FIELD ($inc) */
db.posts.update({title:'Post Two'},{
    $inc: {
                likes: 5
    }
})
/* LIMIT ROWS */
db.posts.fin().limit(2).pretty()
/* CHAINING */
db.posts.fin().limit(2).sort({title: 1}).pretty()
/* FIND ONE ROW */
db.posts.findOne({category:'News'})
/* FOREACH*/
db.posts.find().forEach(function(doc){
    print("Blog Post: "+ doc.title )
});
/* FIND SPECIFIC FIELDS */
db.posts.find({title: 'Post One'},{
    title: 1,
    author: 1
})