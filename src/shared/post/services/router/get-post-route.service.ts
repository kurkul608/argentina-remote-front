import { PostRoutes } from "shared/post/router/post.enum";

export const getPostRouteService = (path?: PostRoutes) => [
	PostRoutes.post,
	...(path ? [path] : []),
];
