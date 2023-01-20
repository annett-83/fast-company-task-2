import React from "react";

const BookMark = ({ user, handeleToggleBookMark }) => {

  return (
    <>
      <button
        className="btn bg-transparent"
        onClick={() => handeleToggleBookMark(user._id)}
      >
        {user.bookmark ? (
          <i className="bi bi-heart-fill"></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}
      </button>
    </>
  );
};
export default BookMark;
