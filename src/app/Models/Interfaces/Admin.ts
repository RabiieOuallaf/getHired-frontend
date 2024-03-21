import { Role } from "../Enum/Role";
export interface Admin {
    id?: number;
    email: string;
    password: string;
    role: Role;
    accessToken?: string;
    refreshToken?: string;
  }