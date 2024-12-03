import React, { useEffect, useId, useState } from "react";
import { useSelector } from "react-redux";
import TiptapEditor from "../../components/tiptap/TiptapEditor";
import { useGetUserQuery, useUpdateAuthorBioMutation } from "../../api/apiUser";
import AuthorLinks from "./AuthorLinks";
import Loader from "../../components/Loader";
import AddNewLinkBtn from "./AddNewLinkBtn";
const UpdateAuthorBio = () => {
  const { name } = useSelector((store) => store.auth.userInfo);
  const { data: user, isLoading: userLoading } = useGetUserQuery();

  const [updateAuthorBio, { isLoading }] = useUpdateAuthorBioMutation();
  const [content, setContent] = useState("");
  const [linkArr, setLinkArr] = useState([]);

  // Load data into state when user query completes
  useEffect(() => {
    if (user && user.authorBio) {
      setContent(user.authorBio.bio || "");
      setLinkArr(user.authorBio.links || []);
    }
  }, [user]);

  const handleUpdateAuthorBio = async () => {
    if (linkArr.length === 0 && content === "") return;
    try {
      const res = await updateAuthorBio({
        bio: content,
        link: linkArr,
      }).unwrap();
      console.log(res);
    } catch (error) {
      alert(error.data.message);
    }
  };

  const handleLinkChange = (index, newLink) => {
    const updatedLinks = [...linkArr];
    updatedLinks[index] = newLink;
    setLinkArr(updatedLinks);
  };

  const handleAddNewLink = () => {
    setLinkArr([...linkArr, ""]);
  };

  if (userLoading) {
    return (
      <div className="flex justify-center items-center mt-10">
        Loading user data... <Loader />
      </div>
    );
  }

  return (
    <section className="flex items-start justify-center section-center section-x min-h-screen">
      {/* <div
        className="mt-6 w-full dark:text-white text-[.9rem]"
        dangerouslySetInnerHTML={{ __html: user.authorBio.bio }}
      /> */}
      <div className="flex flex-col items-start w-full">
        <p className="text-left w-full dark:text-white text-[.9rem] mb-10">
          Name: <span className="font-bold">{name}</span>
        </p>
        <TiptapEditor content={content} setContent={setContent} />

        <div className="mt-10 w-full">
          <h2 className="font-medium text-[.9rem] mb-4 dark:text-white">
            Social Links:
          </h2>
          {linkArr.map((link, index) => (
            <AuthorLinks
              key={index}
              index={index}
              link={link}
              handleLinkChange={handleLinkChange}
            />
          ))}
        <AddNewLinkBtn handleAddNewLink={handleAddNewLink} />
        </div>
        <button
          onClick={handleUpdateAuthorBio}
          type="button"
          className="btn btn-md text-[.8rem] mt-10 font-medium capitalize border-none bg-mediumGray dark:bg-[#27272A] dark:text-white"
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update Bio"}
        </button>
      </div>
    </section>
  );
};

export default UpdateAuthorBio;
