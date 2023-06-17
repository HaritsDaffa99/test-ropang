import Link from "next/link";
import { prisma } from "../db";

const getOrder = async () => {
  const res = await prisma.userOrderTest.findMany({
    select: {
      id: true,
      mID: true,
      menuQuantity: true,
      menu: true,
    },
  });
  return res;
};

const Menu = async () => {
  const order = await getOrder();

  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Menu name</th>
            <th>Type</th>
            <th>Price</th>

            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {order.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.menu.name}</td>
              <td>{order.menuQuantity}</td>

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
