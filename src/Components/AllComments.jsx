import React from "react";
import CommentCard from "./CommentCard";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import CommentForm from "./CommentForm";
import { useState } from "react";
import "./Style/AllComments.css";

function AllComments({ comments, fetchProduct }) {
  const { isLoggedIn } = useContext(AuthContext);
  const [selectedComment, setSelectedComment] = useState(null);

  return (
    <div comment>
      {/* 
      Get the isLoggedin from context 
       - conditional rendering, display a from or not
      */}
      {isLoggedIn && (
        <CommentForm
          selectedComment={selectedComment}
          fetchProduct={fetchProduct}
          setSelectedComment={setSelectedComment}
        />
      )}

      <h4>Comments:</h4>
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
