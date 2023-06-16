import { prisma } from "../../../db";
import Link from "next/link";

const getMenu = async () => {
  const res = await prisma.menu.findMany({
    select: {
      menuID: true,
      menuName: true,
      menuPrice: true,
      menuDescription: true,
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
            <th>Price</th>
            <th>Description</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((menu, index) => (
            <tr key={menu.menuID}>
              <td>{index + 1}</td>
              <td>{menu.menuName}</td>
              <td>{menu.menuPrice}</td>
              <td>{menu.menuDescription}</td>
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
      ><button className="btn">Add New</button></Link>
    </div>
  );
};

export default Menu;
