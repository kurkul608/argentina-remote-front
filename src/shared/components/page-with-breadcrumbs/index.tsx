import React from "react";
import Title from "shared/components/title";
import { CircularProgress } from "@mui/material";
import { Breadcrumbs, ICrumbsDecorator } from "shared/components/breadcrumbs";
import { useLocation } from "react-router-dom";

interface IOwnProps {
	title: React.ReactNode;
	isLoading?: boolean;
	children: React.ReactNode;
	topBar?: React.ReactNode;
	decorator?: ICrumbsDecorator;
}

const PageWithBreadcrumbs = ({
	isLoading,
	title,
	children,
	decorator,
	topBar,
}: IOwnProps) => {
	const location = useLocation();

	return (
		<>
			<Title>
				{isLoading ? (
					<CircularProgress />
				) : (
					<>
						{title}
						<Breadcrumbs link={location.pathname} decorateCrumbs={decorator} />
					</>
				)}
			</Title>
			{topBar}
			{children}
		</>
	);
};
export default PageWithBreadcrumbs;
