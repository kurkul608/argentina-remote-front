import { Pathname } from "react-router-dom";
import { RoutesType } from "shared/router/route.enum";

// export const routeBuilder = (routes: Array<Routes>): Pathname => {
// 	return routes.reduce((acc, route) => `${acc}/${route}`, "");
// };

export const routeBuilder = (
	routes: RoutesType | Array<RoutesType>
): Pathname => {
	const isArray = Array.isArray(routes);
	const url = isArray ? routes.join("/") : routes;

	return `/${url}`;
};

export const routeBuilderWithReplace = (
	routes: RoutesType | Array<RoutesType>,
	key: string,
	value: string | number
): Pathname => {
	const url = routeBuilder(routes);

	return url.replace(`:${key}`, value.toString());
};
