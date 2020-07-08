import { TodoGroup } from "../interfaces";

export const defaultGroups: TodoGroup[] = [
	{
		id: 1,
		name: "საყიდლები",
		items: [
			{
				id: 1,
				name: "მარწყვი",
				isDone: false,
			},
			{
				id: 2,
				name: "ბანანი",
				isDone: false,
			},
			{
				id: 3,
				name: "სალფეთქი",
				isDone: true,
			},
		],
	},
	{
		id: 3,
		name: "თასქები",
		items: [
			{
				id: 5,
				name: "ღილაკის ამუშავება",
				isDone: true,
			},
			{
				id: 6,
				name: "ტესტის დაწერა",
				isDone: false,
			},
			{
				id: 3,
				name: "სალფეთქი",
				isDone: true,
			},
		],
	},
];
