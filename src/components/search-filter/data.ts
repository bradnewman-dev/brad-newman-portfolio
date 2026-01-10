export interface Item {
    id: number;
    name: string;
    category: string;
}

export const items: Item[] = [
    { id: 1, name: "Accessible Button", category: "UI" },
    { id: 2, name: "Search Input", category: "Form" },
    { id: 3, name: "Modal Dialog", category: "UI" },
    { id: 4, name: "Pagination Controls", category: "Navigation" },
    { id: 5, name: "Dropdown Menu", category: "Form" },
];