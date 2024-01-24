import { DatabasePool, createPool } from 'slonik';
import { connectionString } from './constants';

const createSlonikPool: () => Promise<DatabasePool> = async () => {
  return createPool(connectionString);
};

export default createSlonikPool;
