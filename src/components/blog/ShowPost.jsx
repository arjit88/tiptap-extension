import parse from "html-react-parser";

const ShowPost = ({ htmlContent }) => {
  return <div>{parse(htmlContent)}</div>;
};

export default ShowPost;
