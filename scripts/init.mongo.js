/* 
Create database by:
$ mongo bookworm scripts/init.mongo.js 
*/

db.users.remove({});
db.books.remove({});
db.orders.remove({});
db.reviews.remove({});


const usersDB = [
    {name: 'Ruby', email:'aaa@111.com', phone:'11111111', password:'1dheroho',purchase:2,sell:1},
    {name: 'Cassie', email:'bbb@222.com', phone:'22222222', password:'2segsougo',purchase:1,sell:2},
];

const booksDB = [
    {id:4,title:"Intro to Computer Science",author:"Reed, David",price:10.99,
    description:"A Balanced Introduction to Computer Science, This book is ideal for Introduction to Computing and the Web courses in departments of Math and Computer Science. This thoughtfully written text uses the Internet as a central theme, studying its history, technology, and current use. Experimental problems use Web-based tools, enabling students to learn programming fundamentals by developing their own interactive Web pages with HTML and JavaScript. Integrating breadth-based and depth-based chapters,Reed covers a broad range of topics balanced with programming depth in a hands-on, tutorial style.",
    category:"Computer Science",course:"CS1010",photo:"images/book4.jpeg",sellerid:"1"},
    {id:1,title:"Number Theory",author:"cat",price:12.12,description:"a good book!",category:"Maths",course:"MA3203",photo:"images/book1.jpeg",sellerid:"1"},
    {id:2,title:"Waves and Acoustics",author:"dog",price:15.60,description:"a good book too!",category:"Physics",course:"PH2110",photo:"images/book2.jpeg",sellerid:"2"},
    // {id:3,title:"Introduction to Computer Science",author:"rabbit",price:9.99,description:"a good book too!",category:"CS",course:"CS1010",photo:"images/book3.jpeg",sellerid:"2"},
    // {id:3,title:"Introduction to Computer Science",author:"rabbit",price:9.99,description:"a good book too!",category:"CS",course:"CS1010",photo:"images/book3.jpeg",sellerid:"2"},
    // {id:3,title:"Introduction to Computer Science",author:"rabbit",price:9.99,description:"a good book too!",category:"CS",course:"CS1010",photo:"images/book3.jpeg",sellerid:"2"},
];

db.users.insertMany(usersDB);
db.books.insertMany(booksDB);
const count = db.users.count();
print('Inserted', count, 'users');

db.counters.remove({ _id: 'books' });
db.counters.insert({ _id: 'books', current: count });

// db.users.createIndex({ id: 1 }, { unique: true });
// db.users.createIndex({ name: 1 });
// db.users.createIndex({ seat: 1 }, { unique: true });
// db.users.createIndex({ created: 1 });