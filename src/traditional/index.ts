import { makeApp } from "../app";
import yargs from "yargs";

export interface InitializeConfiguration {
  port: number;
}

export const initialize = async (configuration: InitializeConfiguration) => {
  const app = await makeApp({ context: {} });
  app.use(async (ctx) => {
    ctx.body = "Hello, world!";
  });
  app.listen(configuration.port, () => {
    console.log(`Traditional server running on port ${configuration.port}.`);
  });
};

const argv = yargs(process.argv).argv;

const port = (argv.port as number) || 4175;
initialize({ port });
