import { getTodo } from "@lib/getTodo";
import { FC } from "react";

type Params = {
  params: {
    todoId: string;
  };
};

const Todo: FC<Params> = async ({ params }) => {
  const data: Promise<Todo> = getTodo(params.todoId);

  const todo = await data;

  return <h2>{todo.title}</h2>;
};

export default Todo;
