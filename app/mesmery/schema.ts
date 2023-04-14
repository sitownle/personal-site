// schema.ts
import {
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  uniqueIndex,
  varchar
} from "drizzle-orm/mysql-core";

// declaring enum in database
export const sets = mysqlTable(
  "sets",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    owner: varchar("owner", { length: 256 })
  }
  //  , sets => ({
  //     idIndex: uniqueIndex("id_idx").on(sets.id)
  //   })
);

export const terms = mysqlTable("terms", {
  id: serial("id").primaryKey(),
  term: varchar("term", { length: 256 }),
  definition: varchar("definition", { length: 256 }),
  setId: int("set_id").references(() => sets.id)
});
