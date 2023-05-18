import { RouteObject } from "react-router-dom";
import { AuthPage } from "pages/auth";
import React from "react";
import { AuthRoutes } from "shared/auth/router/auth.enum";

export const authRouter: RouteObject = {
	path: AuthRoutes.auth,
	element: <AuthPage />,
};
