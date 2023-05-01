enum BreakPoints {
	SMALL_MOBILE = 359,
	MOBILE = 450,
	TABLET = 640,
	LAPTOP = 1024,
	DESKTOP,
}
export const BreakpointsValues = {
	xs: BreakPoints.SMALL_MOBILE,
	sm: BreakPoints.MOBILE,
	md: BreakPoints.TABLET,
	lg: BreakPoints.LAPTOP,
	xl: BreakPoints.DESKTOP,
};

export default BreakPoints;
