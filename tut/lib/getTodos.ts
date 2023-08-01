export const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) return undefined;

  return res.json();
};
