import { NavLink as NavBase, NavLinkProps } from "react-router-dom";
import React, { forwardRef } from "react";

export interface ICustomNavLinkProps extends NavLinkProps {
	activeClassName: (props: {
		isActive: boolean;
		isPending: boolean;
	}) => string | undefined;
	className?: string;
}

// eslint-disable-next-line react/display-name
export const NavLink = forwardRef<HTMLAnchorElement, ICustomNavLinkProps>(
	({ activeClassName, className, ...props }, ref) => (
		// <NavBase ref={ref} {...props} className={activeClassName} />
		<NavBase
			ref={ref}
			{...props}
			className={(props) =>
				`${activeClassName(props) ?? ""} ${className ?? ""}`
			}
		/>
	)
);
