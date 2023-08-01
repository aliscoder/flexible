export const getUser = async (userId: string) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );

  if (!res.ok) return undefined;

  const user: User = await res.json();

  return user;
};
