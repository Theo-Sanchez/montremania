export interface UserInterface {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    address?: string;
}

export interface LoginInterface {
    username: string;
    password: string;
}