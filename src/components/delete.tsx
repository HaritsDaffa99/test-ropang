"use client";

type TodoItemProps = {
  id: number;
  deleteOrder: (id: number) => void;
};

export function OrderItem({id, deleteOrder }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={`${id}`}
        value="Delete"
        type="button"
        className="btn flex flex-col items-center"                 
        onClick={(e) => deleteOrder(id)}
      />
    </li>
  );
}
