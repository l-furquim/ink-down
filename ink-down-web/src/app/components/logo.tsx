import Image from "next/image";

interface LogoProps {
	type: "light" | "dark";
}

export const Logo: React.FC<LogoProps> = ({ type }) => {
	return (
		<Image
			src={`${type === "light" ? "logo-light.svg" : "logo.svg"}`}
			width={200}
			height={200}
			alt="Ink down logo"
		/>
	);
};
