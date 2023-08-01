import { getUserTodos } from "@lib/getUserTodos";

const UserTodos = async ({ id }: { id: string }) => {
  const userTodos = await getUserTodos(id);
  return (
    <div className="mt-3">
      {userTodos?.map((todo) => (
        <h3>{todo.title}</h3>
      ))}
    </div>
  );
};

export default UserTodos;
