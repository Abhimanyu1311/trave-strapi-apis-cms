import { UserRole } from "src/database/models/user.model";


export class AuthResponseDto {
  accessToken: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: UserRole;
  };
}
