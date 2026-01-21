import type { ChangeEvent } from "react";
import type { UserStatus } from "./DashboardApp";

type DashboardFiltersProps = {
  search: string;
  status: UserStatus;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: UserStatus) => void;
};

export default function DashboardFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: DashboardFiltersProps) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(e.target.value as UserStatus);
  };

  return (
    <form>
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
    </form>
  );
}
