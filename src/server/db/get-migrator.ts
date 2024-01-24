/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { SlonikMigrator } from '@slonik/migrator';
import * as path from 'path';
import createSlonikPool from './connection';

export async function getMigrator() {
  const pool = await createSlonikPool();

  const migrator = new SlonikMigrator({
    migrationsPath: path.resolve(import.meta.dir, 'migrations'),
    migrationTableName: 'migration',
    slonik: pool,
  } as any);

  return { pool, migrator };
}
