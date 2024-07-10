import React from "react";
import CommentCard from "./CommentCard";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import CommentForm from "./CommentForm";
import { useState } from "react";

function AllComments({ comments, fetchProduct }) {
  const { isLoggedIn } = useContext(AuthContext);
  const [selectedComment, setSelectedComment] = useState(null);

  return (
    <div>
      {/* 
      Get the isLoggedin from context 
       - conditional rendering, display a from or not
      */}
      <h4>Comments:</h4>
      {isLoggedIn && (
        <CommentForm
          selectedComment={selectedComment}
          fetchProduct={fetchProduct}
          setSelectedComment={setSelectedComment}
        />
      )}

      {comments.map((comment) => (
        <CommentCard
          comment={comment}
          key={comment._id}
          fetchProduct={fetchProduct}
          setSelectedComment={setSelectedComment}
        />
      ))}
    </div>
  );
}

export default AllComments;
