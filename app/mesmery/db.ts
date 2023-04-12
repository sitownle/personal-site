// packages/core/db.ts
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { connect } from "@planetscale/database";
import { sets, terms } from "./schema";

import { eq } from "drizzle-orm/expressions";
//import { sql } from "drizzle-orm/sql";

const connection = connect({
  host: process.env.PSCALE_HOST,
  username: process.env.PSCALE_USERNAME,
  password: process.env.PSCALE_PASSWORD
});

export const db = drizzle(connection);

export async function getSets(name: string) {
  const result = await db
    .select()
    .from(sets)
    .where(eq(sets.owner, name));

  if (result.length < 1) {
    throw new Error(`No results found for counter ${name}`);
  }

  return result[0];
}

export async function getTerms(setName: string) {
  const result = await db
    .select()
    .from(terms)
    .where(eq(terms.name, setName));

  if (result.length < 1) {
    throw new Error(`No results found for set ${setName}`);
  }

  return result;
}

// export async function increaseCounter(name: string) {
//   await db
//     .update(counters)
//     .set({
//       tally: sql`${counters.tally}
//             + 1`
//     })
//     .where(eq(counters.counter, name));
// }
