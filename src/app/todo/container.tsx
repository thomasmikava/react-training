import { useState } from "react";
import { TodoGroup } from "./interfaces";
import { Group } from "./group";
import { defaultGroups } from "./data";
import React from "react";
import { AContext } from "app/context/context";

export const TodoGroupsContainer = React.memo(() => {
	const [groups, setGroups] = useState(defaultGroups);

	const handleGroupChange = (group: TodoGroup) => {
		setGroups(groups =>
			groups!.map(each => (each.id !== group.id ? each : group))
		);
	};

	if (!groups) return null;

	return (
		<div>
			{groups.map(group => {
				return (
					<Group
						group={group}
						key={group.id}
						onChange={handleGroupChange}
					/>
				);
			})}
		</div>
	);
});
