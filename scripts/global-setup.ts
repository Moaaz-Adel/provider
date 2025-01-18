import { truncateTables } from './truncate-tables'

export default async function globalSetup(): Promise<void> {
  console.log('Run global setup once before everything  ...')
  await truncateTables()
}
