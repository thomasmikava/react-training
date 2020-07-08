import React, { useState, useCallback, useMemo } from "react";
import { TodoGroupsContainer } from "app/todo/container";
import { AContext, IconContext } from "./context";
import { ReactComponent as Tick2 } from "../../icons/tick2.svg";
import { ReactComponent as Tick } from "../../icons/tick.svg";

export function ContextApp(props) {
	const [todoIcon, setTodoIcon] = useState(() => Tick2);
	const handleIconChange = useCallback(() => {
		setTodoIcon(todoIcon => {
			if (todoIcon === Tick2) {
				return Tick;
			} else {
				return Tick2;
			}
		});
	}, []);

	const iconProviderValue = useMemo(
		() => ({ Icon: todoIcon, changeIcon: handleIconChange }),
		[todoIcon, handleIconChange]
	);

	return (
		<div className="App">
			<AContext.Provider value="ნიკა">
				<IconContext.Provider value={iconProviderValue}>
					<TodoGroupsContainer />
				</IconContext.Provider>
			</AContext.Provider>
			<AContext.Provider value="ანმ,ა">
				<TodoGroupsContainer />
			</AContext.Provider>
		</div>
	);
}
