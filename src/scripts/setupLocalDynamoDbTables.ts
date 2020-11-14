/*
  Use this script to setup your local DynamoDb tables
  Replace the dummy info with whatever your requirements are.

  You can run this with:
  ts-node src/scripts/setupLocalDynamoDbTables.ts
*/

import { Dynatron } from 'dynatron';

const d = new Dynatron({
  table: 'dummy-table',
  clientConfigs: {
    mode: 'local',
    port: 8000,
    accessKeyId: 'localhost',
    secretAccessKey: 'localhost',
  },
});

d.Tables.create({
  TableName: 'dummy-table',
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  AttributeDefinitions: [{ AttributeName: 'name', AttributeType: 'S' }],
  KeySchema: [{ AttributeName: 'name', KeyType: 'HASH' }],
}).$execute();
