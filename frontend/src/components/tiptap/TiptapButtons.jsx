import React from "react";
import { FaBold, FaItalic } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { GoListOrdered } from "react-icons/go";
const TiptapButtons = ({ editor }) => {
  return (
    <div style={{ marginBottom: "10px" }} className="flex items-center gap-5">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        style={{ padding: "5px 10px", fontWeight: "bold" }}
        className={`${
          editor.isActive("bold") ? "bg-black text-white" : ""
        } w-10 h-10 rounded-md flex items-center justify-center text-[1rem]`}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        style={{ padding: "5px 10px", fontStyle: "italic" }}
        className={`${
          editor.isActive("italic") ? "bg-black text-white" : ""
        } w-10 h-10 rounded-md flex items-center justify-center text-[1rem]`}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        style={{ padding: "5px 10px" }}
        className={`${
          editor.isActive("bulletList") ? "bg-black text-white" : ""
        } w-10 h-10 rounded-md flex items-center justify-center text-[1rem]`}
      >
        <MdFormatListBulleted />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        style={{ padding: "5px 10px" }}
        className={`${
          editor.isActive("orderedList") ? "bg-black text-white" : ""
        } w-10 h-10 rounded-md flex items-center justify-center text-[1rem]`}
      >
        <GoListOrdered />
      </button>
    </div>
  );
};

export default TiptapButtons;
