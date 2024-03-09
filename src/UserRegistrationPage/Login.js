import { useState } from "react";
import * as RegIcons from "react-icons/fa6";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { BiSolidShow } from "react-icons/bi";

export default function Login({ submitLogin }) {
  const [showPass, setShowpass] = useState(false);
  return (
    <div className="loging--page">
      <form action="#" method="post" onSubmit={submitLogin}>
        <ul>
          <li>
            <h1>Login</h1>
          </li>
          <li>
            <label htmlFor="user-name">
              <RegIcons.FaUser />
            </label>
            <input
              type="text"
              placeholder="Username"
              name="user name"
              id="user-name"
            />
          </li>
          <li>
            <label htmlFor="user--password">
              <RegIcons.FaLock />
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="User Password"
              id="user--password"
              autoComplete="Off"
              required
              minLength={8}
            />
            <div
              className="show-hide-password"
              onClick={() => {
                showPass === false ? setShowpass(true) : setShowpass(false);
              }}>
              {showPass ? <AiTwotoneEyeInvisible /> : <BiSolidShow />}
            </div>
          </li>
          <li></li>
          <li>
            <div>
              <span>
                <input type="checkbox" name="remember--me" id="remember--me" />
                <p>Remember Me</p>
              </span>
              <p>
                Forgot <em>Password?</em>
              </p>
            </div>
          </li>
          <li>
            <input type="submit" value="Submit" />
          </li>
          <li className="signin-option">
            <p>Login with</p>
          </li>
          <li>
            <button type="button">Google</button>
          </li>
        </ul>
      </form>
    </div>
  );
}
