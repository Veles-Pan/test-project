export interface User {
    id: string;
    username: string;
    role?: string;
}

export interface UserSchema {
    user?: User
}
