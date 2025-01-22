import { User, UserRaw } from "./user.interface.js";

export interface AuthenticationResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  organizationId?: string;
}

export type OnRefreshResponse = Omit<AuthenticationResponse, "refreshToken">;

export interface AuthenticationResponseRaw {
  user: UserRaw;
  access_token: string;
  refresh_token: string;
  organization_id?: string;
}
