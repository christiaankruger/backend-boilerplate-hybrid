import Koa from 'koa';
import Router from 'koa-router';
import { AppContext } from './context';

export interface AppConfiguration {
  context: AppContext;
}

export const makeApp = async (configuration: AppConfiguration) => {
  const app = new Koa();
  const router = new Router();

  router.get('/v1/hello-world', (ctx) => {
    ctx.body = 'Hello, you!';
  });

  app.use(router.routes());
  app.use(router.allowedMethods());

  return app;
};
