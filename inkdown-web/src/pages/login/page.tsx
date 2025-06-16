import { Icon } from "@/components/icon";
import { Link } from "react-router-dom";
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
	return (
		<div className="w-full h-full overflow-hidden text-zinc-800 flex flex-col items-center justify-center">
			<div className="w-full flex justify-start items-center h-fit pl-10">
				<Link to={"/"}>
					<Icon />
				</Link>
			</div>
			<LoginForm/>
		</div>
	);
}
