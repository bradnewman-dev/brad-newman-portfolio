export type UserStatus = "active" | "inactive" | "pending";

export type User = {
    id: number;
    name: string;
    email: string;
    status: UserStatus;
};

export const users: User[] = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: "inactive" },
    { id: 3, name: "Carol Lee", email: "carol@example.com", status: "pending" },
];