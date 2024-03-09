import React from "react";
import { useState } from "react";
import * as RegIcons from "react-icons/fa6";
import * as Regicon from "react-icons/md";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { BiSolidShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

export default function Registeration({ submitRegistration }) {
  const [registrationDetails, setRegistrationDetails] = useState({
    fullName: "",
    userName: "",
    userMail: "",
    passWord: "",
    confirmPassword: "",
  });
  const [userPass, setUserPass] = useState(false);
  const [userConfirmPass, setUserConfirmPass] = useState(false);
  function viewPass() {
    userPass === false ? setUserPass(true) : setUserPass(false);
  }

  function confirmPass() {
    userConfirmPass === false
      ? setUserConfirmPass(true)
      : setUserConfirmPass(false);
  }

  return (
    <div className="registration-form">
      <form action="#" method="post" onSubmit={submitRegistration}>
        <ul>
          <li>
            <h1>Provide User Details</h1>
          </li>
          <li>
            <label htmlFor="fullName">
              <RegIcons.FaUser />
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter Full Name"
              autoComplete="on"
              autoCapitalize="on"
              required
              value={registrationDetails.fullName}
              onChange={(e) => {
                setRegistrationDetails(e.target.value);
              }}
            />
          </li>
          <li>
            <label htmlFor="user--name">
              <RegIcons.FaUser />
            </label>
            <input
              type="text"
              name="Username"
              placeholder="Create User Name"
              id="user--name"
              required
              autoComplete="off"
              value={registrationDetails.userName}
              onChange={(e) => {
                setRegistrationDetails(e.target.value);
              }}
            />
          </li>
          <li>
            <label htmlFor="user--mail">
              <Regicon.MdEmail />
            </label>
            <input
              type="email"
              name="User Mail"
              placeholder="User@email.com"
              id="user--mail"
              required
              autoComplete="on"
              value={registrationDetails.userMail}
              onChange={(e) => {
                setRegistrationDetails(e.target.value);
              }}
            />
          </li>
          <li>
            <label htmlFor="user--password">
              <RegIcons.FaLock />
            </label>
            <input
              type="password"
              name="User Password"
              placeholder="Create Password"
              id="user--password"
              autoComplete="Off"
              required
              minLength={8}
              value={registrationDetails.passWord}
              onChange={(e) => {
                setRegistrationDetails(e.target.value);
              }}
            />
            <div className="show-hide-confirmPass" onClick={viewPass}>
              {userPass ? <AiTwotoneEyeInvisible /> : <BiSolidShow />}
            </div>
          </li>
          <li>
            <label htmlFor="user-confirm-password">
              <RegIcons.FaLock />
            </label>
            <input
              type="password"
              name="Confirm Password"
              placeholder="Confirm Password"
              id="confirm--password"
              autoComplete="Off"
              required
              minLength={8}
              value={registrationDetails.confirmPassword}
              onChange={(e) => {
                setRegistrationDetails(e.target.value);
              }}
            />
            <div className="show-hide-confirmPass" onClick={confirmPass}>
              {userConfirmPass ? <AiTwotoneEyeInvisible /> : <BiSolidShow />}
            </div>
          </li>
          <li>{/* <p>passwords do not match</p> */}</li>
          <li>
            <input type="submit" value="Submit" />
          </li>
          <li className="signin-option">
            <p>or Register with google</p>
          </li>
          <li>
            <button type="button">
              <FcGoogle />
              Google
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
