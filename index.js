const { GraphQLServer } = require('graphql-yoga');
const Query = require('./src/resolvers/Query');

const resolvers = {
  Query,
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});
server.start({
  port: process.env.PORT || 4000,
}, () => console.log(`Server is running`));
