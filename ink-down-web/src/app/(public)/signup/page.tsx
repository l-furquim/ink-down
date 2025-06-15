import { GithubButton } from "@/app/components/github-button";
import { GoogleButton } from "@/app/components/google-button";
import { Icon } from "@/app/components/icon";

import Link from "next/link";
import { SignUpForm } from "./compoenents/signup-form";

export default function SignUpPage() {
	return (
		<div className="w-full h-full overflow-hidden text-zinc-800 flex items-center justify-center p-5">
			<div className="w-[50%] flex flex-col h-full justify-start items-center space-y-3">
				<div className="w-full flex justify-start items-center h-fit pl-10">
					<Link href={"/"}>
						<Icon />
					</Link>
				</div>
				<h1 className="font-bold text-3xl">Comece agora</h1>
				<p className="pt-4">Entre com sua conta do google ou crie uma nova</p>
				<span className="flex space-x-5 items-center w-full justify-center pt-3">
					<GithubButton />
					<GoogleButton />
				</span>
				<SignUpForm />
			</div>
			<div className="w-[50%] not-md:hidden h-full rounded bg-gradient-to-br from-zinc-300 via-zinc-300 to-indigo-600"></div>
		</div>
	);
}
