import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Users from "./components/Users";
import { AppContext } from "./context/AppContext";

function App() {
  const [users, setUsers] = useState([])
  const [showUsers, setShowUsers] = useState([])
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setShowUsers(users)
  }, [users])

  return (
    <AppContext.Provider value={{ users, setUsers, showUsers, setShowUsers, loading, setLoading, currentUser, setCurrentUser }}>
      <Navbar />
      <Users />
      {currentUser !== undefined ? <Profile user={currentUser} /> : null}
      <footer className="text-center">Assignment by Harwinder Singh</footer>
    </AppContext.Provider>
  );
}

export default App;
