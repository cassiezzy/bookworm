const express = require('express');
const { ApolloServer } = require('apollo-server-express');

let aboutMessage = "Bookworm API v1.0";

const typeDefs = `
  type Query {
    about: String!
  }
  type Mutation {
    setAboutMessage(message: String!): String
  }
`;

const resolvers = {
  Query: {
    about: () => aboutMessage,
  },
  Mutation: {
    setAboutMessage,
  },
};

function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });

app.listen(3000, function () {
  console.log('App started on port 3000');
});


// const fs = require('fs');
// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');

// let aboutMessage = "Bookworm API v1.0";

// const booksDB = [
//   {id:1,name:"B1",edition:"1",author:"cat",year:"2021",price:12.12,description:"a good book!",category:"cs",course:"IT5007",sellerid:"1"},
//   {id:2,name:"B2",edition:"2",author:"dog",year:"2021",price:6.6,description:"a good book too!",category:"cs",course:"IT5007",sellerid:"2"},
// ];


// const resolvers = {
//   Query: {
//     about: () => aboutMessage,
//     bookList,
//   },
//   Mutation: {
//     setAboutMessage,
//   },
// };

// function setAboutMessage(_, { message }) {
//   return aboutMessage = message;
// }


// function bookList() {
//   return booksDB;
// }

// const server = new ApolloServer({
//   typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
//   resolvers,
// });

// const app = express();

// app.use(express.static('public'));

// server.applyMiddleware({ app, path: '/graphql' });

// app.listen(3000, function () {
//   console.log('App started on port 3000');
// });