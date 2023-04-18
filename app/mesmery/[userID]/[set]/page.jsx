import { getSets, getTerms } from "../../db";
import Cards from "./cards";

export default async function MesmeryData(context) {
  const { id, name, owner } = await getSets(context.params.set);
  const terms = await getTerms(id);
  return (
    <>
      <Cards title={name} terms={terms} />
    </>
  );
}
