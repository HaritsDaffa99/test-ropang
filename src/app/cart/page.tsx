import Link from "next/link";
import { prisma } from "../db";
import { OrderItem } from "@/components/delete";

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

export async function deleteOrder(id: number) {
  "use server";

  await prisma.userOrderTest.delete({ where: {
    id,
  }, });
}

const Menu = async () => {
  const order = await getOrder();

  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Menu name</th>
            <th>Quantity</th>

            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {order.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.menu.name}</td>
              <td>{order.menuQuantity}</td>
              <td className="flex justify-center space-x-1"><OrderItem key={order.id} {...order} deleteOrder={deleteOrder}/></td>
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
