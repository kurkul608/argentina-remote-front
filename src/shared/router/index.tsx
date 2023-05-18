import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "shared/router/private/private-route";
import { chatRoute } from "shared/chat/router";
import { Routes } from "./route.enum";
import { postRoute } from "shared/post/router";
import { authRouter } from "shared/auth/router";
export { Routes } from "./route.enum";

const NotFound = () => {
	return <div>Page not found</div>;
};

export const router = createBrowserRouter([
	{
		path: Routes.admin,
		element: <PrivateRoute />,
		errorElement: <NotFound />,
		children: [
			{
				element: <></>,
				index: true,
			},
			chatRoute,
			postRoute,
		],
	},
	authRouter,
]);
