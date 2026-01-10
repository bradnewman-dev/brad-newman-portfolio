import { useEffect, useState } from "react";
import { items, type Item } from "./data";

export default function SearchFilterApp() {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <strong>{item.name}</strong> — {item.category}
        </li>
      ))}
    </ul>
  );
}
