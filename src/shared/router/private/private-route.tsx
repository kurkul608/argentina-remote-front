import { useAppDispatch, useAppSelector } from "redux/hooks";
import React, { lazy, Suspense, useEffect } from "react";
import {
	localStorageServiceGet,
	localStorageServiceRemove,
} from "services/local-storage.service";
import { checkAuthAsync } from "shared/auth/redux/auth.slice";
import { redirectToUi } from "services/redirect.service";
const Layout = lazy(() =>
	import("shared/layout").then((module) => ({ default: module.Layout }))
);
export const PrivateRoute = () => {
	const dispatch = useAppDispatch();
	const { token, isExpired } = useAppSelector((state) => state.auth);
	const localStorageToken = localStorageServiceGet("auth");
	useEffect(() => {
		if (localStorageToken) {
			dispatch(checkAuthAsync(localStorageToken));
		}
	}, [localStorageToken]);
	useEffect(() => {
		if (isExpired) {
			localStorageServiceRemove("auth");
		}
	}, [isExpired]);
	if ((token || localStorageToken) && !isExpired) {
		return (
			<Suspense fallback={<>...</>}>
				<Layout />
			</Suspense>
		);
	} else {
		redirectToUi(
			process.env.REACT_APP_UI_ENDPOINT ? process.env.REACT_APP_UI_ENDPOINT : ""
		);
		return null;
	}
};
