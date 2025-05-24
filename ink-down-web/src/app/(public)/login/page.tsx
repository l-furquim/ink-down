import { GithubButton } from "@/app/components/github-button";
import { GoogleButton } from "@/app/components/google-button";
import { Icon } from "@/app/components/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full h-full overflow-hidden text-zinc-800 flex flex-col items-center justify-center">
      <div className="w-full flex justify-start items-center h-fit pl-10">
        <Link href={"/"}>
          <Icon/>
        </Link>
      </div>
      <form className="w-120 flex flex-col items-center justify-start pt-10 h-150 border-[1px] border-muted-foreground rounded-md p-5">
        <span className="flex space-x-4 items-center">
          <h1 className="font-bold text-3xl">
            Entrar
          </h1>
        </span>
        <p className="pt-4">
          Entre com a suas redes socias ou sua conta Ink down
        </p>
        <span className="flex space-x-5 items-center pt-12">
          <GithubButton />
          <GoogleButton />
        </span>
        <div className="flex w-full pt-4 items-center gap-4">
          <hr className="flex-grow border-zinc-800" />
          <span className="text-zinc-800 text-sm">ou</span>
          <hr className="flex-grow border-zinc-800" />
        </div>
        <label
          className=" w-80 pt-10"
          htmlFor="emailInput">
          Email
        </label>
        <Input
          className="w-80 border-muted-foreground focus-visible:ring-indigo-600"
          id="emailInput" />
        <label
          className=" w-80 pt-8"
          htmlFor="emailInput">
          Senha
        </label>
        <Input
          className="w-80 border-muted-foreground focus-visible:ring-indigo-600"
          id="emailInput" />
        <span className="pt-10">
          <Button
            className="w-80 bg-indigo-700 hover:bg-indigo-800 hover:cursor-pointer text-zinc-200 font-bold"
            type="submit">
            Entrar
          </Button>
        </span>
        <span className="w-80 pt-5 flex space-x-1 items-center text-sm text-muted-foreground">
          Não possui uma conta ?
          <Link href={"/cadastro"} className="text-indigo-700">
            criar
          </Link>
        </span>
      </form>
    </div>
  )
}