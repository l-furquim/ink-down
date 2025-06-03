"use client";

import type { TagsDataType } from "@/app/@types/note-types";
import { useTagsActions } from "@/hooks/use-tags";
import { PlusSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { COLORS } from "@/app/data";
import { useState } from "react";

interface NewTagButtonProps {
	handleNewTag: (name: string) => void;
}

export const NewTagButton = ({ handleNewTag }: NewTagButtonProps) => {
	const [colorSelected, setColorSelected] = useState("");
	const [error, setError] = useState(<></>);

	const submitTag = () => {
		if (colorSelected === "") {
			setError(<p className="text-red-600">Por favor selecione uma cor</p>);
			return;
		}

		handleNewTag(colorSelected);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<PlusSquare
					className="ml-auto z-[1000] hover:cursor-pointer"
					onClick={(e) => {
						e.stopPropagation();
					}}
				/>
			</DialogTrigger>
			<DialogContent
				className="sm:max-w-[425px]"
				onClick={(e) => e.stopPropagation()}
			>
				<DialogHeader>
					<DialogTitle>Criar uma nova tag</DialogTitle>
					<DialogDescription>
						De um nome a sua tag e a cor que mais acredita representa-la. Após a
						criação você poderá edita-las a qualquer momento
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-6">
					<div className="grid gap-3">
						<label htmlFor="name-1">Name</label>
						<Input id="name-1" name="name" defaultValue="Pedro Duarte" />
					</div>
					<label htmlFor="username-1">Cor</label>
					<div className="flex w-full justify-center items-center space-x-3">
						{COLORS.map((color) => (
							<div
								key={color}
								className="w-7 h-7 rounded-full cursor-pointer hover:scale-120 hover:cursor-pointer transition-transform"
								style={{ backgroundColor: color }}
								onClick={(e) => {
									e.stopPropagation();
									setColorSelected(color);
								}}
							/>
						))}
					</div>
					{error}
				</div>
				<DialogFooter className="pt-5">
					<DialogClose asChild>
						<Button variant="outline">Cancelar</Button>
					</DialogClose>
					<Button onClick={submitTag}>Criar tag</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
