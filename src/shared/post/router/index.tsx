import { RouteObject } from "react-router-dom";
import { PostMainPage } from "pages/post/main";
import { PostMain } from "shared/post/components/main";
import { PostDraftPage } from "pages/post/draft";
import { PostDraft } from "shared/post/components/draft";
import React from "react";
import { PostRoutes } from "shared/post/router/post.enum";

export const postRoute: RouteObject = {
	path: PostRoutes.post,
	element: <PostMainPage />,
	children: [
		{
			index: true,
			element: <PostMain />,
		},
		{
			path: PostRoutes.draft,
			element: <PostDraftPage />,
			children: [
				{
					index: true,
					element: <PostDraft />,
				},
			],
		},
		{
			path: PostRoutes.planned,
			element: <PostDraftPage />,
			children: [
				{
					index: true,
					element: <PostDraft />,
				},
			],
		},
		{
			path: PostRoutes.published,
			element: <PostDraftPage />,
			children: [
				{
					index: true,
					element: <PostDraft />,
				},
			],
		},
		{
			path: PostRoutes.contentPlan,
			element: <PostDraftPage />,
			children: [
				{
					index: true,
					element: <PostDraft />,
				},
			],
		},
	],
};
