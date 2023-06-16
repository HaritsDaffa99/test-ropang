import { prisma } from "../../../../db";
import Link from "next/link"

async function createMenu(data: FormData) {
  "use server";

  const type = data.get("type")?.valueOf();
  if (typeof type !== "string" || type.length === 0) {
    throw new Error("Invalid type");
  }

  const name = data.get("name")?.valueOf();
  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Invalid name");
  }

  const price = data.get("price")?.valueOf();
  if (typeof price !== "string" || price.length === 0) {
    throw new Error("Invalid price");
  }

  const calorie = data.get("calorie")?.valueOf();
  if (typeof calorie !== "string" || calorie.length === 0) {
    throw new Error("Invalid calorie");
  }

  const fat = data.get("fat")?.valueOf();
  if (typeof fat !== "string" || fat.length === 0) {
    throw new Error("Invalid fat");
  }

  const ingredient = data.get("ingredient")?.valueOf();
  if (typeof ingredient !== "string" || ingredient.length === 0) {
    throw new Error("Invalid ingredient");
  }

  const description = data.get("description")?.valueOf();
  if (typeof description !== "string" || description.length === 0) {
    throw new Error("Invalid description");
  }

  await prisma.menu.create({
    data: {
      type,
      name,
      price: parseInt(price),
      calorie: parseInt(calorie),
      fat: parseInt(fat),
      ingredient: ingredient.split(","),
      description,
    },
  });
}

// async function createBotol(data: FormData) {
//   "use server";

//   const name = data.get("title")?.valueOf();
//   if (typeof name !== "string" || name.length === 0) {
//     throw new Error("Invalid Title");
//   }

//   await prisma.botol.create({ data: { name } });
//   redirect("/");
// }

const addMenu = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New Menu</h1>
      </header>
      <form action={createMenu} className="flex gap-2 flex-col">
        <label>Type</label>
        <input
          type="text"
          name="type"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label>Price</label>
        <input
          type="text"
          name="price"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label>Calorie</label>
        <input
          type="text"
          name="calorie"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label>Fat</label>
        <input
          type="text"
          name="fat"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label>Ingredient</label>
        <input
          type="text"
          name="ingredient"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />

        <div className="flex gap-1 justify-end">
        <Link
            href="/admin/menu"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Done
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default addMenu;
