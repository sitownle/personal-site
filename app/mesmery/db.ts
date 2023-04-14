// packages/core/db.ts
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { InferModel } from "drizzle-orm";
import { connect } from "@planetscale/database";
import { sets, terms } from "./schema";

import { eq } from "drizzle-orm/expressions";
//import { sql } from "drizzle-orm/sql";

const connection = connect({
  host: process.env.PSCALE_HOST,
  username: process.env.PSCALE_USERNAME,
  password: process.env.PSCALE_PASSWORD
});

export type Set = InferModel<typeof sets>; // return type when queried
export type NewSet = InferModel<typeof sets, "insert">; // insert type
export type Term = InferModel<typeof terms>; // return type when queried
export type NewTerm = InferModel<typeof terms, "insert">; // insert type

export const db = drizzle(connection);

export async function insertSet(set: NewSet) {
  const inserted = await db.insert(sets).values(set);
  return inserted;
}

export async function deleteSet(setID: number) {
  const deleted = await db.delete(sets).where(eq(sets.id, setID));
  return deleted;
}

export async function updateSet(set: Set, newName: string) {
  const updated = await db
    .update(sets)
    .set({ name: newName })
    .where(eq(sets.id, set));
  return updated;
}

export async function getSets(id: string) {
  const result = await db
    .select()
    .from(sets)
    .where(eq(sets.owner, id));

  if (result.length < 1) {
    return [];
    //throw new Error(`No sets found for user ${id}`);
  }
  return result;
}

export async function insertTerms(terms: Term[]) {
  return db.insert(terms).values(terms);
}

export async function getTerms(setID: string) {
  const result = await db
    .select()
    .from(terms)
    .where(eq(terms.setID, setID));

  if (result.length < 1) {
    throw new Error(`No results found for set ${setID}`);
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
