import React from "react";
import { ReactComponent as Tick } from "../../icons/tick.svg";

export const AContext = React.createContext("ნანა");

export const IconContext = React.createContext({
	Icon: Tick,
	changeIcon: () => {
		//
	},
});
