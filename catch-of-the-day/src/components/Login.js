import React from "react";
import PropTypes from "prop-types"
const Login = (props) => {
  return (
    <nav className="login">
      <h2>Inventory Login</h2>
      <p>Login to manage your store's inventory.</p>
      <button
        className="github"
        onClick={() => props.authenticate('Github')}
      > Login with Github</button>
      <button
        className="facebook"
        onClick={() => props.authenticate('Facebook')}
      > Login with Facebook</button>
    </nav>
  );
};

Login.propTypes = {
    authenticate : PropTypes.func.isRequired
}
export default Login;
