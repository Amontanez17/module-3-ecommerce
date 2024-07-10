import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import service from "../service/api";

function CommentCard({ comment, fetchProduct, setSelectedComment }) {
  const { user } = useContext(AuthContext);
  async function handleDelete(id) {
    try {
      await service.delete(`/api/comments/${id}/delete`);
      fetchProduct();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <article id="comment-container">
      {/* Mapping over comments to display them */}
      <p>{comment.creator.name}</p>
      <p>
        {comment.text}{" "}
        {user?._id === comment.creator._id && (
          <>
            <span onClick={() => handleDelete(comment._id)}>🐉</span>
            <span onClick={() => setSelectedComment(comment)}>pen</span>
          </>
        )}
      </p>
      <p>Rating: {comment.rating}</p>
      {/* Display other comment details as needed */}
    </article>
  );
}

export default CommentCard;
