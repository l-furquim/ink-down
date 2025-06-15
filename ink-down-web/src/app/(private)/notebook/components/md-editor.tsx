"use client";

import {
	headingsPlugin,
	listsPlugin,
	quotePlugin,
	codeBlockPlugin,
	linkPlugin,
	markdownShortcutPlugin,
	MDXEditor,
	MDXEditorMethods,
	diffSourcePlugin,
} from "@mdxeditor/editor";

import { useEffect, useRef, useState } from "react";

interface EditorProps {
	markdown: string;
}

const Editor = ({ markdown }: EditorProps) => {
	const [md, setMd] = useState(markdown);
	const ref = useRef<MDXEditorMethods>(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.setMarkdown(md);
		}
	}, [md]);

	return (
		<MDXEditor
			onChange={(e) => setMd(e)}
			ref={ref}
			markdown={markdown}
			plugins={[
				headingsPlugin(),
				listsPlugin(),
				quotePlugin(),
				codeBlockPlugin(),
				linkPlugin(),
				markdownShortcutPlugin(),
				diffSourcePlugin(),
			]}
		/>
	);
};

export default Editor;
