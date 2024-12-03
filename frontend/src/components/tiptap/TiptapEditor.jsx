import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapButtons from "./TiptapButtons";
import "./tiptap.css";

const TiptapEditor = ({ content, setContent }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      // Trigger the parent callback with updated content
      setContent(editor.getHTML());
    },
  });

  // Update editor content if the `content` prop changes
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Always visible buttons for formatting */}
      <TiptapButtons editor={editor} />

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="bg-[#F6F6F6] shadow-sm dark:bg-[#27272A] dark:text-white text-[.9rem] rounded-md p-4"
      />
    </div>
  );
};

export default TiptapEditor;
