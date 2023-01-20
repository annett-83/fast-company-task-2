import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";
const User = ({ user, handeleDeleteUser, handeleToggleBookMark }) => {
  
  return (
    <>
      <tr>
        <td>{user.name}</td>
        <td> {user.profession.name}</td>
        <td className="character">
          {user.qualities.map((quality) => (
            <Qualitie key={quality._id} {...quality} />
          ))}
        </td>
        <td>{user.completedMeetings}</td>
        <td> {user.rate}</td>
        <td>
          <Bookmark user={user} handeleToggleBookMark={handeleToggleBookMark} />
        </td>
        <td>
          <button
            className="badge bg-danger"
            onClick={() => handeleDeleteUser(user._id)}
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
