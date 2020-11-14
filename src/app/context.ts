import { Dynatron } from 'dynatron';

export interface AppContext {
  dbFor: (tableName: string) => Dynatron;
}
