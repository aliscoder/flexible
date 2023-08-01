import { getUsers } from "@lib/getUsers";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "you can see users here",
};

const Users = async () => {
  const users = await getUsers();

  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {users?.map((user) => (
        <Link href={`/users/${user.id}`} className="w-full bg-gray-400 rounded-sm p-3" key={user.id}>
          <h2 className="text-slate-800">{user.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Users;
