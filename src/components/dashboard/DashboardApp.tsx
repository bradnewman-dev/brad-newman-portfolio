import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import DashboardFilters from "./DashboardFilters";
import UserTable from "./UserTable";

export type UserStatus = "all" | "active" | "inactive" | "pending";

export default function DashboardApp() {
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<UserStatus>("all");
  const [sortBy, setSortBy] = useState<"name" | "email">("name");

  return (
    <DashboardLayout>
      <DashboardFilters
        search={search}
        status={status}
        sortBy={sortBy}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onSortChange={setSortBy}
      />
      <UserTable search={search} status={status} sortBy={sortBy} />
    </DashboardLayout>
  );
}
