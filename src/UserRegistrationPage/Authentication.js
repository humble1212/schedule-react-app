import Login from "../UserRegistrationPage/Login";
import Registeration from "../UserRegistrationPage/Registeration";

export default function Authentication({
  submitLogin,
  loginState,
  setLoginState,
  submitRegistration,
}) {
  return (
    <section className="Authentication-box">
      <div className="box-one">
        <h3>Welcome!</h3>
        <h1>
          Manage your <br />
          daily activities <br />
          with dockris
        </h1>
        <div>
          <button
            type="button"
            className="Register"
            onClick={() => {
              setLoginState(false);
            }}>
            Register
          </button>
          <button
            type="button"
            className="Login"
            onClick={() => {
              setLoginState(true);
            }}>
            Login
          </button>
        </div>
      </div>
      <div className="box-two">
        <div className="User-form-container">
          {loginState ? (
            <Login submitLogin={submitLogin} />
          ) : (
            <Registeration submitRegistration={submitRegistration} />
          )}
        </div>
      </div>
    </section>
  );
}
