export const getUserTodos = async (userId: string) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?userId=" + userId
  );

  if (!res.ok) return undefined;

  const userTodos: Todo[] = await res.json();
  return userTodos;
};
