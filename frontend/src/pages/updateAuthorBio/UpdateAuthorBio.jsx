import React from "react";
import { useSelector } from "react-redux";
import TiptapEditor from "../../components/tiptap/TiptapEditor";

const UpdateAuthorBio = () => {
  const { name } = useSelector((store) => store.auth.userInfo);
  return (
    <section className="flex items-center justify-center section-center section-x">
      <div className="flex flex-col items-start w-full">
        <p className="text-left w-full dark:text-white text-[.9rem] mb-10">
          Name: <span className="font-bold">{name}</span>
        </p>
        <TiptapEditor />
      </div>
    </section>
  );
};

export default UpdateAuthorBio;
