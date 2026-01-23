import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import DashboardFilters from "./DashboardFilters";
import UserTable from "./UserTable";

export type UserStatus = "all" | "active" | "inactive" | "pending";

export type SortBy = "name" | "email";

export type Filters = {
  search: string;
  status: UserStatus;
  sortBy: SortBy;
};

export default function DashboardApp() {
  const initialFilters: Filters = {
    search: "",
    status: "all",
    sortBy: "name",
  };
  const [filters, setFilters] = useState<Filters>(initialFilters);

  return (
    <DashboardLayout>
      <DashboardFilters
        initialFilters={initialFilters}
        onApply={setFilters}
        onReset={() => setFilters(initialFilters)}
      />
      <UserTable
        search={filters.search}
        status={filters.status}
        sortBy={filters.sortBy}
      />
    </DashboardLayout>
  );
}
