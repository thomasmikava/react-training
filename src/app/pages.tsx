import React from "react";
import { useHistory } from "react-router-dom";

export const Pages = React.memo(() => {
	return (
		<div>
			<GotoButton path="context">Context</GotoButton>
		</div>
	);
});

export const GotoButton: React.FC<{ path: string }> = React.memo(
	({ path, children }) => {
		const history = useHistory();
		const goto = () => {
			history.push(path);
		};
		return <button onClick={goto}>{children}</button>;
	}
);
