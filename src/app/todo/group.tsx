import { TodoGroup, TodoItem } from "./interfaces";
import React, { useContext } from "react";
import { Item } from "./item";
import styles from "./styles/index.module.scss";
import { IconContext } from "app/context/context";

export const Group = React.memo(
	({
		group,
		onChange,
	}: {
		group: TodoGroup;
		onChange: (newGroup: TodoGroup) => void;
	}) => {
		const { changeIcon } = useContext(IconContext);
		const handleItemChange = (item: TodoItem) => {
			onChange({
				...group,
				items: group.items.map(each =>
					each.id !== item.id ? each : item
				),
			});
		};

		return (
			<div className={styles.group}>
				<div onClick={changeIcon}>{group.name}</div>
				<div>
					{group.items.map(item => (
						<Item
							item={item}
							key={item.id}
							onChange={handleItemChange}
						/>
					))}
				</div>
			</div>
		);
	}
);
