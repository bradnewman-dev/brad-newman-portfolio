import { users, type User } from "./users";
import type { UserStatus, SortBy } from "./DashboardApp";

type UserTableProps = {
  search: string;
  status: UserStatus;
  sortBy: SortBy;
};

export default function UserTable({ search, status, sortBy }: UserTableProps) {
  const normalizedSearch = search.toLowerCase();

  if (users.length === 0) {
    return <p>Loading users…</p>;
  }

  const filteredUsers: User[] = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(normalizedSearch) ||
      user.email.toLowerCase().includes(normalizedSearch);

    const matchesStatus = status === "all" || user.status === status;

    return matchesSearch && matchesStatus;
  });

  if (filteredUsers.length === 0) {
    return <p>No users match the current filters.</p>;
  }

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  });

  return (
    <table aria-label="User list">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
