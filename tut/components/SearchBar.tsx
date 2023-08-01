"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form onSubmit={handleSubmit} className="w-50 flex justify-center md:justify-between">
      <div className="bg-white w-96 flex flex-row">
        <input
          type="text"
          value={search}
          placeholder="looking for ... ?"
          onChange={(e) => setSearch(e.target.value)}
          className=" bg-transparent border-green-800 border-2 w-80 p-1 w-30 text-lg"
        />
        <button className="w-20 bg-green-800 text-white">Go</button>
      </div>
    </form>
  );
};

export default SearchBar;
