import { getUser } from "@lib/getUser";
import { getUsers } from "@lib/getUsers";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC, Suspense } from "react";
import UserTodos from "./components/UserTodos";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const user = await getUser(userId);

  if (!user)
    return {
      title: "User not found",
    };
  return {
    title: user.name,
    description: "this is user " + user.name,
  };
}

const User: FC<Params> = async ({ params }) => {
  const user = await getUser(params.userId);

  return !user ? (
    notFound()
  ) : (
    <div>
      <h2>{user.name}</h2>
      <Suspense fallback={<p>Loading ... </p>}>
        <UserTodos id={params.userId} />
      </Suspense>
    </div>
  );
};

// ISR (incremental Static Strategy -- revalidate)
// SSG (static site generation)
// SSR (Server Side Rendering -- cache)

/*
this generation is an optimization for build 
it prefetches the individual users on the users list and statucly generate each user (SSG)
*/
export async function generateStaticParams() {
  const users = await getUsers();

  return users?.map((user) => ({
    userId: user.id.toString(),
  }));
}

export default User;
