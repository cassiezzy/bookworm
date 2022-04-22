/* 
Create database by:
$ mongo bookworm scripts/init.mongo.js 
*/

db.users.remove({});
db.books.remove({});
db.orders.remove({});
db.reviews.remove({});


const usersDB = [
    {id: 1, name: 'Ruby', email:'aaa@111.com', phone:'11111111', password:'1dheroho',purchase:2,sell:1},
    {id: 2, name: 'Cassie', email:'bbb@222.com', phone:'22222222', password:'2segsougo',purchase:1,sell:2},
];
const booksDB = [
    {id:1,name:"B1",edition:"1",author:"cat",year:"2021",price:12.12,description:"a good book!",category:"cs",course:"IT5007",sellerid:"1"},
    {id:2,name:"B2",edition:"2",author:"dog",year:"2021",price:6.6,description:"a good book too!",category:"cs",course:"IT5007",sellerid:"2"},
];

db.users.insertMany(usersDB);
db.books.insertMany(booksDB);
const count = db.users.count();
print('Inserted', count, 'users');

// db.counters.remove({ _id: 'users' });
// db.counters.insert({ _id: 'users', current: count });

// db.users.createIndex({ id: 1 }, { unique: true });
// db.users.createIndex({ name: 1 });
// db.users.createIndex({ seat: 1 }, { unique: true });
// db.users.createIndex({ created: 1 });