import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {/* React will only render the component if the condition evaluates to true
      because && will not even bother to evaluate the second condition oterwise. */}
      {props.btnLabel === "Register" && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.btnLabel}</button>
    </form>
  );
}

export default Login;
