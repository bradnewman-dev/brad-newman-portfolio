import type { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <header>
        <h3>User Management</h3>
      </header>

      <main>{children}</main>
    </div>
  );
}
