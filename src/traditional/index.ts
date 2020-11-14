import { makeApp } from '../app';
import yargs from 'yargs';
import { Dynatron } from 'dynatron';

export interface InitializeConfiguration {
  port: number;
}

export const initialize = async (configuration: InitializeConfiguration) => {
  const app = await makeApp({
    context: {
      dbFor: (table) => {
        return new Dynatron({
          table,
          clientConfigs: {
            mode: 'local',
            port: 8000,
            accessKeyId: 'localhost',
            secretAccessKey: 'localhost',
          },
        });
      },
    },
  });
  app.listen(configuration.port, () => {
    console.log(`Traditional server running on port ${configuration.port}.`);
  });
};

const argv = yargs(process.argv).argv;

const port = (argv.port as number) || 4175;
initialize({ port });
