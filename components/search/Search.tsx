import Form from "next/form";
import SearchReset from "./SearchReset";
import { Search as SearchIcon } from "lucide-react";
interface Props {
  query?: string;
}

const Search = ({ query }: Props) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        placeholder="Search for startups, ideas, or entrepreneurs..."
        className="search-input"
      />
      <div className="flex gap-2">
        {query && <SearchReset />}
        <button type="submit" className="search-btn text-white">
          <SearchIcon className="size-50" />
        </button>
      </div>
    </Form>
  );
};

export default Search;
