import React from "react";
import Login from "./Login";

const isLoggedin = false;
const isRegistered = true;

function App() {
  return (
    <div className="container">
      {isLoggedin ? (
        <h1>Hello</h1>
      ) : (
        <Login btnLabel={isRegistered ? "Login" : "Register"} />
      )}
    </div>
  );
}

export default App;
