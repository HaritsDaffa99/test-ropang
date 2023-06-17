import { prisma } from "../../../db";
import Link from "next/link";
import { TodoItem } from "@/components/create";

const getMenu = async () => {
  const res = await prisma.menu.findMany({
    select: {
      id: true,
      type: true,
      name: true,
      price: true,
      calorie: true,
      fat: true,
      ingredient: true,
      description: true,
    },
  });
  return res;
};

export async function addOrder(id: number) {
  "use server";

  await prisma.userOrderTest.create({ data: { menuQuantity: 1, mID: id } });
}

// export async function deleteOrder(id: number) {
//   "use server";

//   await prisma.todo.update({ where: { id }, data: { complete } });
// }

const Menu = async () => {
  const menu = await getMenu();

  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Menu name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Calorie</th>
            <th>Fat</th>
            <th>Total Ingredient</th>
            <th>Description</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((menu, index) => (
            <tr key={menu.id}>
              <td>{index + 1}</td>
              <td>{menu.name}</td>
              <td>{menu.type}</td>
              <td>{menu.price}</td>
              <td>{menu.calorie}</td>
              <td>{menu.fat}</td>
              <td>{menu.ingredient.length}</td>
              <td>{menu.description}</td>
              <td className="flex justify-center space-x-1">
                <TodoItem key={menu.id} {...menu} addOrder={addOrder} />

              </td>
              <td className="flex justify-center space-x-1">
                {/* <UpdateProduct brands={brands} product={product} />
                    <DeleteProduct product={product} /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
