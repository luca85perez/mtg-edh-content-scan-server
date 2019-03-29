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
  port: 8081,
}, () => console.log(`Server is running on port 8081`));
