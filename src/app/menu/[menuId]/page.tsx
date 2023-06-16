import { prisma } from "@/app/db";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface pageProps {
  params: {
    menuId: string;
  };
}

// const getMenu = async () => {
//   const res = await prisma.menu.findUnique({
//     where: {
//       id: params.menuId,
//     },
//   });
//   return res;
// };

const Page = async ({ params }: pageProps) => {
  console.log(params);

  const getMenu = async () => {
    const res = await prisma.menu.findUnique({
      where: {
        id: parseInt(params.menuId),
      },
    });
    return res;
  };
  const menu = await getMenu();

  return (
    <div>
      <form className="flex gap-2 flex-col">
        <label>Type : {menu?.type}</label>
        <input
          type="text"
          name="type"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label>Name : {menu?.name}</label>
        <input
          type="text"
          name="name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label>Price : {menu?.price}</label>
        <input
          type="text"
          name="price"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label>Calorie: {menu?.calorie}</label>
        <input
          type="text"
          name="calorie"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label>Fat: {menu?.fat}</label>
        <input
          type="text"
          name="fat"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label>Ingredient: {menu?.ingredient.toString()}</label>
        <input
          type="text"
          name="ingredient"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label>Description: {menu?.description}</label>
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
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
