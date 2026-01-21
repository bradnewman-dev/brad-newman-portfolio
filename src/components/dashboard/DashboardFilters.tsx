import type { ChangeEvent } from "react";
import type { UserStatus } from "./DashboardApp";

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
    <form aria-label="User filters">
      <fieldset>
        <legend>Filters</legend>

        <label>
          Search
          <input type="text" value={search} onChange={handleSearchChange} />
        </label>

        <label>
          Status
          <select value={status} onChange={handleStatusChange}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </label>

        <label>
          Sort By
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as "name" | "email")}
          >
            <option value="name">Name</option>
            <option value="email">Email</option>
          </select>
        </label>
      </fieldset>
    </form>
  );
}
