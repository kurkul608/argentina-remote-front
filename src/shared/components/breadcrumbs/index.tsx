import React from "react";
import { LinkParserService } from "./services/link-parser.service";
import { useNavigate } from "react-router";
import { LineDecorator } from "shared/components/breadcrumbs/services/line-decorator.service";
import Typography from "@mui/material/Typography";
import MUIBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export interface ICrumbsDecorator {
	[x: string]: string;
}

interface IBreadcrumbs {
	link: string;
	decorateCrumbs?: ICrumbsDecorator;
}

export const Breadcrumbs = ({ link, decorateCrumbs }: IBreadcrumbs) => {
	const navigate = useNavigate();
	const links = LinkParserService(link);

	const getLinks = (links: string[]) =>
		links.map((link, index) => {
			return index !== links.length - 1 ? (
				<Link
					sx={{ cursor: "pointer" }}
					underline="hover"
					color="inherit"
					onClick={() => navigate(link)}
					key={`beadcrumb-link--${link}`}
				>
					{decorateCrumbs
						? LineDecorator(link.split("/").pop() || "", decorateCrumbs)
						: link.split("/").pop()}
				</Link>
			) : (
				<Typography color="text.primary" key={`beadcrumb-link--${link}`}>
					{decorateCrumbs
						? LineDecorator(link.split("/").pop() || "", decorateCrumbs)
						: link.split("/").pop()}
				</Typography>
			);
		});
	return <MUIBreadcrumbs>{getLinks(links)}</MUIBreadcrumbs>;
};
