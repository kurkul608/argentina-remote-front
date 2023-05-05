import { Routes } from "../index";
import { Pathname } from "react-router-dom";

export const routeExactMatch = (
	fullRoute: Pathname,
	route: Routes,
	depth = 1
): boolean => {
	const routes: Routes[] = fullRoute.split("/") as Routes[];
	const splitRoute = route.split("/");
	return routes[routes.length - depth].includes(
		splitRoute[splitRoute.length - depth]
	);
};

export const routeExactMatchV2 = (
	fullRoute: Pathname,
	route: string
): boolean => {
	const routes: Routes[] = fullRoute.split("/") as Routes[];
	const routeArray: Routes[] = route.split("/") as Routes[];
	for (const routeIndex in routeArray) {
		if (routes[routeIndex] !== routeArray[routeIndex]) {
			return false;
		}
	}
	return true;
};
