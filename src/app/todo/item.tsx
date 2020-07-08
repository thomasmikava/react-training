import React, { useContext } from "react";
import { TodoItem } from "./interfaces";
import styles from "./styles/index.module.scss";
import { AContext, IconContext } from "app/context/context";

export const Item = React.memo(
	({
		item,
		onChange,
	}: {
		item: TodoItem;
		onChange: (newItem: TodoItem) => void;
	}) => {
		const name = useContext(AContext);
		const { Icon } = useContext(IconContext);

		const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const name = e.target.value;
			onChange({ ...item, name });
		};
		const onToggle = () => {
			onChange({ ...item, isDone: !item.isDone });
		};

		return (
			<div className={styles.item}>
				{name}
				<div
					className={
						item.isDone ? styles.itemDoneBullet : styles.itemBullet
					}
					onClick={onToggle}
				>
					{item.isDone && <Icon style={{ width: 20, height: 20 }} />}
				</div>
				<div className={styles.itemName}>
					<input value={item.name} onChange={onNameChange} />
				</div>
			</div>
		);
	}
);
