export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
}
export interface Role {
    id: string;
    name: string;
    permissions: string[]; // Adjust to your use case
}