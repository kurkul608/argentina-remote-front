import BreakPoints from "constants/breakpoints";

export const getActualBreakPoint = (size?: number): BreakPoints => {
	if (size && size <= BreakPoints.SMALL_MOBILE) return BreakPoints.SMALL_MOBILE;
	if (size && size <= BreakPoints.MOBILE) return BreakPoints.MOBILE;
	if (size && size <= BreakPoints.TABLET) return BreakPoints.TABLET;

	return BreakPoints.DESKTOP;
};
