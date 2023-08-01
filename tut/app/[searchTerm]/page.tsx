import getSearchResults from "@lib/getSearchResults";
import { notFound } from "next/navigation";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const searchItem = await getSearchResults(searchTerm);
  if (!searchItem?.pageid) {
    return {
      title: "No Match",
    };
  }
  return {
    title: searchItem?.title,
  };
}

const SearchResult = async ({ params: { searchTerm } }: Props) => {
  const result = await getSearchResults(searchTerm);
  if (!result) return notFound();

  return (
    <main>
      <h1>{result.title}</h1>
      <img src={result.thumbnail.source} alt="sss" height={250} width={250} loading="lazy" />
      <p className="mt-3">{result.extract}</p>
    </main>
  );
};

export default SearchResult;
