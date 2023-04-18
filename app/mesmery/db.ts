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

export async function insertSet(set: NewSet, newterms: NewTerm[]) {
  const inserted = await db.insert(sets).values(set);
  for (let i = 0; i < newterms.length; i++)
    newterms[i].set_id = inserted.insertId;
  const insertedTerms = await db.insert(terms).values(newterms);
  return inserted;
}

export async function deleteSet(setID: number) {
  const deleted = await db.delete(sets).where(eq(sets.id, setID));
  const deletedTerms = await db.delete(terms).where(eq(terms.set_id, setID));
  //const temp = await db.delete(terms).where(eq(terms.set_id, 0));
  return deleted;
}

export async function updateSet(set: Set, newName: string) {
  const updated = await db
    .update(sets)
    .set({ name: newName })
    .where(eq(sets.id, set));
  return updated;
}

export async function getSets(user_id: string) {
  const result = await db
    .select()
    .from(sets)
    .where(eq(sets.owner, user_id));

  if (result.length < 1) {
    return [];
    //throw new Error(`No sets found for user ${id}`);
  }
  return result;
}

export async function getSet(id: string) {
  const result = await db
    .select()
    .from(sets)
    .where(eq(sets.id, id));

  if (result.length < 1) {
    return [];
    //throw new Error(`No sets found for user ${id}`);
  }
  return result[0];
}

// export async function insertTerms(newterms: NewTerm[]) {
//   return db.insert(terms).values(newterms);
// }

export async function getTerms(setID: number) {
  console.log(setID);
  const tempres = await db.select().from(terms);
  console.log(tempres);
  const result = await db
    .select()
    .from(terms)
    .where(eq(terms.set_id, setID));

  if (result.length < 1) {
    console.log("EMPTY RESULT");
    return [];
    //throw new Error(`No terms found for set ${setID}`);
  }

  return result;
}
