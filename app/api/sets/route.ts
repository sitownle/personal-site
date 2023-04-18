import { NextResponse } from "next/server";
import { insertSet, deleteSet, updateSet } from "../../mesmery/db";

export async function POST(request: Request) {
  const req = await request.json();
  const res = await insertSet(req[0], req[1]);
  req[0].id = res.insertId;
  console.log(req[0]);
  return NextResponse.json(req[0]);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id: number = Number(searchParams.get("id"));
  await deleteSet(id);
  return NextResponse.json({ deleted: true });
}

export async function PATCH(request: Request) {
  console.log(request);
  const res = await updateSet(
    { name: "new", owner: "user_2OG1NXtj80rddXV3GRBpjkzl8ev" },
    "updatedName"
  );
  const data = await res.json();
  return NextResponse.json(data);
}
