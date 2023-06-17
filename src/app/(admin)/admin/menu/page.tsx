import { prisma } from "../../../db";
import Link from "next/link";

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
              <Link
                href="/admin/menu/addMenu"
                className="flex flex-col max-w-sm p-6 items-center"
              >
                <button className="btn">Add to Cart</button>
              </Link>

              <td className="flex justify-center space-x-1">
                {/* <UpdateProduct brands={brands} product={product} />
                    <DeleteProduct product={product} /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        href="/admin/menu/addMenu"
        className="flex flex-col max-w-sm p-6 items-center"
      >
        <button className="btn">Add New</button>
      </Link>
    </div>
  );
};

export default Menu;
