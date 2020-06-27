const express = require('express');
const bodyParser = require('body-parser');

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./modules/typeDefs');
const resolvers = require('./modules/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
)
