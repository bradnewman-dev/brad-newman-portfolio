import { useEffect, useState } from "react";
import { items, type Item } from "./data";

export default function SearchFilterApp() {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Simulate async data fetching
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData(items);
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return <p>Loading items…</p>;
  }

  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredItems.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> — {item.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
