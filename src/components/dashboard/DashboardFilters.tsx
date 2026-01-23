import { useState } from "react";
import type { UserStatus, Filters, SortBy } from "./DashboardApp";
import styles from "./DashboardFilters.module.css";

type DashboardFiltersProps = {
  initialFilters: Filters;
  onApply: (filters: Filters) => void;
  onReset: () => void;
};

export default function DashboardFilters({
  initialFilters,
  onApply,
  onReset,
}: DashboardFiltersProps) {
  const [search, setSearch] = useState<string>(initialFilters.search);
  const [status, setStatus] = useState<UserStatus>(initialFilters.status);
  const [sortBy, setSortBy] = useState<SortBy>(initialFilters.sortBy);

  const handleReset = () => {
    setSearch(initialFilters.search);
    setStatus(initialFilters.status);
    setSortBy(initialFilters.sortBy);
    onReset();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onApply({ search, status, sortBy });
  };

  return (
    <form
      aria-label="User filters"
      className={styles.container}
      onSubmit={handleSubmit}
    >
      <fieldset className={styles.filters}>
        <legend>Filters</legend>

        <div className={styles.control}>
          <label htmlFor="search">
            Search
            <input
              id="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>

        <div className={styles.control}>
          <label htmlFor="status">
            Status
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value as UserStatus)}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </label>
        </div>

        <div className={styles.control}>
          <label htmlFor="sort">
            Sort By
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "name" | "email")}
            >
              <option value="name">Name</option>
              <option value="email">Email</option>
            </select>
          </label>
        </div>

        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.resetButton}
            onClick={handleReset}
          >
            Reset
          </button>
          <button type="submit" className={styles.applyButton}>
            Apply
          </button>
        </div>
      </fieldset>
    </form>
  );
}
