/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getMigrator } from './get-migrator';
import * as fs from 'fs';
import * as path from 'path';
import { QuerySqlToken } from 'slonik';

// Utility function to run a migration
export const seed = async (query: QuerySqlToken, file: string) => {
  console.log(`executing migration: ${file} ...`);
  const { pool, migrator } = await getMigrator();
  await migrator.up();
  await pool.query(query);
  console.log(`${file} migration executed`);
};

const directoryPath = path.join(import.meta.dir, 'seeds');
async function runAll() {
  fs.readdir(directoryPath, async function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    for (const file of files) {
      const data = fs.readFileSync(path.resolve(directoryPath, file), {
        encoding: 'utf8',
        flag: 'r',
      });
      // @ts-ignore
      await seed({ sql: data, values: [], type: 'SLONIK_TOKEN_SQL' }, file); // SLONIK_TOKEN_QUERY?
    }
    console.log('done');
    process.exit(0);
  });
}

runAll();
