import React, { createContext, useEffect, useState } from "react";

const AdminMainContext = createContext(null);
function AdminContext({ children }) {
  const [adminPresent, setAdminPresent] = useState(false);
  const [numberOfBooks, setNumberOfBooks] = useState(1);
  const [currentBookId, setCurrentBookId] = useState("");
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setAdminPresent(true);
    }
  }, []);
  return (
    <AdminMainContext.Provider
      value={{
        adminPresent,
        setAdminPresent,
        numberOfBooks,
        setNumberOfBooks,
        currentBookId,
        setCurrentBookId,
      }}
    >
      {children}
    </AdminMainContext.Provider>
  );
}

export { AdminContext, AdminMainContext };
