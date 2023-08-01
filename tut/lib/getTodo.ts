export const getTodo = async (todoId: string) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + todoId
  );

  // return undefiend because we want to handle not found error with notFound function
  if (!res.ok) return undefined;

  return res.json();
};
