import { post } from "services/api";

export type checkAuthType = boolean;

export const checkAuth = (token: string) =>
	post<checkAuthType>("auth/check", { authToken: token });
