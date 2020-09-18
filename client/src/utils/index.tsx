import React, { useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useParams } from "react-router-dom";

export const usePrefersNoMotion = () => useMediaQuery("(prefers-reduced-motion)");

export const noBreak = (input: string) => input.replace(/\s/, "\u00A0");

export const useIsMobile = () => useMediaQuery("(max-width: 900px)");

export const useScrollTo = (
	route: "about" | "portfolio",
	ref: React.MutableRefObject<HTMLElement>
) => {
	const { landing } = useParams() as { landing: typeof route };
	const noMotion = usePrefersNoMotion();
	useEffect(() => {
		if (landing === route) {
			const scroll = ref.current.getBoundingClientRect().y;
			window.scrollTo({
				top: scroll,
				behavior: noMotion ? "auto" : "smooth",
			});
		}
	}, [landing]);
};
