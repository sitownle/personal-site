"use client";
//import { deleteSet } from "./db";
export default function DeleteSetButton({ set }) {
  async function deleteSet() {
    const deletedSet = await fetch(`/api/sets?id=${set.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(set)
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Failed");
      })
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <button
      className="rounded-r-lg hover:bg-red-400 px-2 ml-auto"
      onClick={() => deleteSet(set)}
    >
      &#128465;
    </button>
  );
}
