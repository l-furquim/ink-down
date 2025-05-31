"use client";

import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  codeBlockPlugin,
  linkPlugin,
  markdownShortcutPlugin,
  toolbarPlugin,
  MDXEditor,
  MDXEditorMethods,
  diffSourcePlugin
} from "@mdxeditor/editor";

import { useEffect, useRef, useState } from "react";


interface EditorProps {
  markdown: string,
};

const Editor = ({ markdown }: EditorProps) => {
  const [md, setMd] = useState(markdown);
  const ref = useRef<MDXEditorMethods>(null);

  useEffect(() => {
  
    if (ref.current) {
      ref.current.setMarkdown(md);
    };

    console.log(md);
  }, [md])

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
        toolbarPlugin(),
        diffSourcePlugin()
      ]}
    />
  );
};

export default Editor;