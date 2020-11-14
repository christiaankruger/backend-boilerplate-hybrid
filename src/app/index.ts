import Koa from "koa";
import { AppContext } from "./context";

export interface AppConfiguration {
  context: AppContext;
}

export const makeApp = async (configuration: AppConfiguration) => {
  const app = new Koa();
  return app;
};
