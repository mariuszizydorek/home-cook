import "reflect-metadata";
import UserResolver from "./resolvers/security";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
const mongoose = require("mongoose");
import { Container } from "typedi";
const app: express.Application = express();
const path = "/admin/graphql";
const PORT = process.env.PORT || 4000;

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    container: Container,
    validate: true,
  });
  const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
  });

  server.applyMiddleware({
    app,
    path,
    cors: true,
    onHealthCheck: () =>
      // eslint-disable-next-line no-undef
      new Promise((resolve, reject) => {
        if (mongoose.connection.readyState > 0) {
          resolve(true);
        } else {
          reject();
        }
      }),
  });

  mongoose.connect(
    "mongodb+srv://b1llyb0b:test@dev.rxdeo.mongodb.net/food?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  mongoose.connection.once("open", () => console.log("mongo connected"));

  app.use((req, res) => {
    res.status(200);
    res.end();
  });

  const expressServer = app.listen(PORT, () => {
    console.log(`🚀 started http://localhost:${PORT}${path}`);
  });

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
      console.log("Module disposed. ");
      expressServer.close();
      server.stop();
      mongoose.disconnect();
      console.log(server, "stopped");
    });
  }
}

main()
  .then((_) => {})
  .catch((error) => console.log(error));
