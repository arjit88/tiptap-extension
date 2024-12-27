import { useState } from "react";
import Tiptap from "../Tiptap";
import ShowPost from "./ShowPost";

const NewPost = () => {
  const [htmlContent, setHtmlContent] = useState("");

  // Functionality for saving the content
  const handleEventContentSave = (html) => {
    setHtmlContent(html);
  };

  return (
    <>
      <Tiptap handleEventContentSave={handleEventContentSave} />
      <ShowPost htmlContent={htmlContent} />
    </>
  );
};

export default NewPost;
