import { makeApp } from "../app";

export const initialize = async () => {
  const app = await makeApp({ context: {} });
  app.use(async (ctx) => {
    ctx.body = "Hello, world!";
  });
  app.listen(4175);
};

initialize();
