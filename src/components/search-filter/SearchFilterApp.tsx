import { useEffect, useState } from "react";
import { items, type Item } from "./data";
import styles from "./SearchFilterApp.module.css";

export default function SearchFilterApp() {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState<"name" | "category">("name");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setQuery(params.get("q") ?? "");
    setCategory(params.get("category") ?? "");
    setSort(params.get("sort") === "category" ? "category" : "name");
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();

    if (query) params.set("q", query);
    if (category) params.set("category", category);
    if (sort !== "name") params.set("sort", sort);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [query, category, sort]);

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

  const filteredItems = data
    .filter((item) => {
      const matchesQuery = item.name
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesCategory = category === "" || item.category === category;

      return matchesQuery && matchesCategory;
    })
    .sort((a, b) => {
      return a[sort].localeCompare(b[sort]);
    });

  if (isLoading) {
    return <p>Loading items…</p>;
  }

  return (
    <div className={styles.container}>
      <fieldset>
        <legend>Filter items</legend>

        <div className={styles.control}>
          <label htmlFor="search">Search</label>

          <input
            id="search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className={styles.control}>
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

        <div className={styles.control}>
          <label htmlFor="sort">Sort by</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as "name" | "category")}
          >
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>
      </fieldset>

      <div className={styles.results}>
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
    </div>
  );
}
