/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getMigrator } from './get-migrator';

export async function run() {
  const { migrator } = await getMigrator();
  migrator.runAsCLI();
  console.log('Done');
}

run();
