import { users, type User } from "./users";
import type { UserStatus } from "./DashboardApp";

type UserTableProps = {
  search: string;
  status: UserStatus;
};

export default function UserTable({ search, status }: UserTableProps) {
  const normalizedSearch = search.toLowerCase();

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

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => (
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
