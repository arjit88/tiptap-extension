import parse from "html-react-parser";

const ShowPost = ({ htmlContent }) => {
  return (
    <div className="m-8 p-6 bg-white border border-gray-300 rounded-lg shadow-md max-w-3xl mx-auto">
      <div className="prose prose-lg max-w-none">{parse(htmlContent)}</div>
    </div>
  );
};

export default ShowPost;
