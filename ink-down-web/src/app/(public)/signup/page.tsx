import { DefaultInput } from "@/app/components/default-input";
import { GithubButton } from "@/app/components/github-button";
import { GoogleButton } from "@/app/components/google-button";
import { Icon } from "@/app/components/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

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
				<span className="flex space-x-5 items-center w-full justify-center pt-12">
					<GithubButton />
					<GoogleButton />
				</span>
				<form action="" className="flex flex-col space-y-5">
					<div className="flex w-[full] pt-4 items-center gap-4">
						<hr className="flex-grow border-zinc-800" />
						<span className="text-zinc-800 text-sm">ou</span>
						<hr className="flex-grow border-zinc-800" />
					</div>
					<label className="text-sm" htmlFor="nameInput">
						Nome
					</label>
					<DefaultInput
						className="border-[1px] border-muted-foreground"
						id="nameInput"
					/>

					<label className="text-sm" htmlFor="emailInput">
						Email
					</label>
					<DefaultInput
						className="border-[1px] border-muted-foreground"
						id="emailInput"
					/>

					<div className="flex w-full justify-center items-center space-x-3">
						<span>
							<label className="text-sm" htmlFor="passwordInput">
								Senha
							</label>
							<DefaultInput
								className="w-50 border-[1px] border-muted-foreground"
								id="passwordInput"
								type="password"
							/>
						</span>

						<span>
							<label className="text-sm" htmlFor="confirmPasswordInput">
								Confirmar senha
							</label>
							<DefaultInput
								className="w-50 border-[1px] border-muted-foreground"
								id="confirmPasswordInput"
								type="password"
							/>
						</span>
					</div>
					<Button
						size={"lg"}
						type="submit"
						className="font-bold bg-indigo-600 hover:bg-indigo-800 hover:cursor-pointer"
					>
						Criar conta
					</Button>
					<span className="w-full pt-1 flex items-center text-sm text-muted-foreground">
						Ja possui uma conta ?
						<Link href={"/login"} className="text-indigo-700 pl-2">
							Entrar
						</Link>
					</span>
				</form>
			</div>
			<div className="w-[50%] h-full rounded bg-gradient-to-br from-zinc-300 via-zinc-300 to-indigo-600"></div>
		</div>
	);
}
