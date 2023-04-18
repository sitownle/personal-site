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
//export type TestTerm = { term: string; definition: string; set_id?: number };

export const db = drizzle(connection);

export async function insertSet(set: NewSet, terms: NewTerm[]) {
  const inserted = await db.insert(sets).values(set);
  console.log("INSERTED!!", inserted.insertId);
  for (let i = 0; i < terms.length; i++) {
    terms[i].set_id = inserted.insertId;
  }
  console.log("SET ID TEST:", terms[0].set_id);
  //const insertedTerms = await db.insert(terms).values(terms);
  return inserted;
}

export async function deleteSet(setID: number) {
  const deleted = await db.delete(sets).where(eq(sets.id, setID));
  const deletedTerms = await db.delete(terms).where(eq(terms.setID, setID));
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

// export async function insertTerms(terms: Term[]) {
//   return db.insert(terms).values(terms);
// }

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
