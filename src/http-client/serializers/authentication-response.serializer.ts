import {
  AuthenticationResponse,
  AuthenticationResponseRaw,
} from "../interfaces/authentication-response.interface.js";
import { deserializeUser } from "./user.serializer.js";

export const deserializeAuthenticationResponse = (
  authenticationResponse: AuthenticationResponseRaw
): AuthenticationResponse => {
  const { user, organization_id, access_token, refresh_token, ...rest } =
    authenticationResponse;

  return {
    user: deserializeUser(user),
    organizationId: organization_id,
    accessToken: access_token,
    refreshToken: refresh_token,
    ...rest,
  };
};
