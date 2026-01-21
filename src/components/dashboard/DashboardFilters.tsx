import type { ChangeEvent } from "react";
import type { UserStatus } from "./DashboardApp";
import styles from "./DashboardFilters.module.css";

type DashboardFiltersProps = {
  search: string;
  status: UserStatus;
  sortBy: "name" | "email";
  onSearchChange: (value: string) => void;
  onStatusChange: (value: UserStatus) => void;
  onSortChange: (value: "name" | "email") => void;
};

export default function DashboardFilters({
  search,
  status,
  sortBy,
  onSearchChange,
  onStatusChange,
  onSortChange,
}: DashboardFiltersProps) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(e.target.value as UserStatus);
  };

  return (
    <form aria-label="User filters" className={styles.container}>
      <fieldset className={styles.filters}>
        <legend>Filters</legend>

        <div className={styles.control}>
          <label htmlFor="search">
            Search
            <input
              id="search"
              type="text"
              value={search}
              onChange={handleSearchChange}
            />
          </label>
        </div>

        <div className={styles.control}>
          <label htmlFor="status">
            Status
            <select id="status" value={status} onChange={handleStatusChange}>
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
              onChange={(e) => onSortChange(e.target.value as "name" | "email")}
            >
              <option value="name">Name</option>
              <option value="email">Email</option>
            </select>
          </label>
        </div>
      </fieldset>
    </form>
  );
}
