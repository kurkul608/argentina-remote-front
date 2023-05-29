import { Pathname } from "react-router-dom";
import { Routes } from "shared/router/route.enum";

export const routeFinder = (fullRoute: Pathname, route: string | undefined) => {
	const routes: Routes[] = fullRoute.split("/") as Routes[];
	for (const routeIndex in routes) {
		if (routes[routeIndex] === route) {
			return true;
		}
	}
	return false;
};
