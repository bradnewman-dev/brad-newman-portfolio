import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import DashboardFilters from "./DashboardFilters";
import UserTable from "./UserTable";

export type UserStatus = "all" | "active" | "inactive" | "pending";

export default function DashboardApp() {
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<UserStatus>("all");

  return (
    <DashboardLayout>
      <DashboardFilters
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />
      <UserTable search={search} status={status} />
    </DashboardLayout>
  );
}
