import { getTodos } from "@lib/getTodos";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Todos",
  description: "you can see todos here",
};

const Todos = async () => {
  const data: Promise<Todo[]> = getTodos();
  const todos = await data;

  return (
    <div className="grid grid-cols-3 gap-4 mt-8 px-12">
      {todos.map((todo) => (
        <Link
          href={`/todos/${todo.id}`}
          className="w-full bg-gray-400 rounded-sm p-3"
          key={todo.id}
        >
          <h2 className="text-slate-800">{todo.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Todos;
