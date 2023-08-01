export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-cache", // no- cache and fetch on every request
    // cache: 'force-cache', // default (caches for ever)
    // next: { revalidate: 60 /* 60 seconds */ }, // revalidates the cache after 30 seconds
  });

  if (!res.ok) return undefined;

  const data: User[] = await res.json();
  return data;
};
