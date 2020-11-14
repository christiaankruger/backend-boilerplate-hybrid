import { APIGatewayEvent, Context } from 'aws-lambda';
import { Dynatron } from 'dynatron';
import ServerlessHttp from 'serverless-http';
import { makeApp } from '../app';

export async function main(event: APIGatewayEvent, context: Context) {
  const handler = ServerlessHttp(
    await makeApp({
      context: {
        dbFor: (table) => {
          return new Dynatron({ table });
        },
      },
    })
  );
  const result = await handler(event, context);
  return result;
}
