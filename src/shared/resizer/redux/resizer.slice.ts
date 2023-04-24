import BreakPoints from "constants/breakpoints";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getActualBreakPoint } from "shared/resizer/services/getActualBreakPoint";

export interface IResizer {
	width?: number;
	height?: number;
	actualBreakpoint: BreakPoints;
}

export const resizerInitialState: IResizer = {
	actualBreakpoint: BreakPoints.DESKTOP,
};

const ResizeSlice = createSlice({
	name: "resizer",
	initialState: resizerInitialState,
	reducers: {
		setSize: (
			state,
			action: PayloadAction<{ width?: number; height?: number }>
		) => {
			const { height, width } = action.payload;
			state.width = width;
			state.height = height;
			state.actualBreakpoint = getActualBreakPoint(width);
		},
	},
});

export const { setSize } = ResizeSlice.actions;

export default ResizeSlice.reducer;
