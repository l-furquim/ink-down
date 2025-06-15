export const ErrorSpan = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <span className="text-sm text-red-600">{children}</span>;
};
