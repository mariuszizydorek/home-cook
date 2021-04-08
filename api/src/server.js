var express = require('express');
const mongoose = require('mongoose');

var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);


//mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://b1llyb0b:test@dev.rxdeo.mongodb.net/food?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once("open", () => console.log("mongo connected"))
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

//b1llyb0b
//L.fghM@JS!CFa8q

//L.fghM%40JS%21CFa8q