import React, { useEffect } from "react";
import * as ST from "shared/resizer/components/styled";
import { useResizeDetector } from "react-resize-detector";
import { useAppDispatch } from "redux/hooks";
import { setSize } from "shared/resizer/redux/resizer.slice";

export const Resizer = () => {
	const { width, ref, height } = useResizeDetector();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setSize({ width, height }));
	}, [width, height]);
	return <ST.Resizer ref={ref} />;
};
