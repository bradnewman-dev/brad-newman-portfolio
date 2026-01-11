import { useEffect, useState } from "react";
import { items, type Item } from "./data";

export default function SearchFilterApp() {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // Simulate async data fetching
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData(items);
      setIsLoading(false);
    };

    loadData();
  }, []);

  const categories = Array.from(new Set(data.map((item) => item.category)));

  const filteredItems = data.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());

    const matchesCategory = category === "" || item.category === category;

    return matchesQuery && matchesCategory;
  });

  if (isLoading) {
    return <p>Loading items…</p>;
  }

  return (
    <div>
      <fieldset>
        <legend>Filter items</legend>

        <div>
          <label htmlFor="search">Search</label>

          <input
            id="search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>

            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <p aria-live="polite">
        {filteredItems.length} result
        {filteredItems.length !== 1 && "s"} found
      </p>

      {filteredItems.length === 0 ? (
        <p>No items match your current filters.</p>
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
