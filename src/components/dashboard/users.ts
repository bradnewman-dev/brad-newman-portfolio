export type UserStatus = "active" | "inactive" | "pending";

export type User = {
    id: number;
    name: string;
    email: string;
    status: UserStatus;
};

export const users: User[] = [
    { id: 1, name: "Alice Johnson", email: "johnson.alice@example.com", status: "active" },
    { id: 2, name: "Bob Smith", email: "smith.bob@example.com", status: "inactive" },
    { id: 3, name: "Carol Lee", email: "lee.carol@example.com", status: "pending" },
    { id: 4, name: "David Kim", email: "kim.david@example.com", status: "active" },
    { id: 5, name: "Eva Brown", email: "brown.eva@example.com", status: "inactive" },
    { id: 6, name: "Frank Wilson", email: "wilson.frank@example.com", status: "pending" },
];