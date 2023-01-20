import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handeleDeleteUser = (id) => {
    const newArray = users.filter((user) => user._id !== id);
    setUsers(newArray);
  };
  const handeleToggleBookMark = (id) => {
    const newArray = [...users];
    const i = newArray.findIndex((user) => user._id === id);
    if (i >= 0) {
      newArray[i].bookmark = !newArray[i].bookmark;
    }
    setUsers(newArray);
  };
  return (
    <>
      <SearchStatus length={users.length} />
      <div>
        <Users {...{ users, handeleDeleteUser, handeleToggleBookMark }} />
      </div>
    </>
  );
}

export default App;
