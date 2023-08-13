import React, { useRef, useContext, useState } from "react";
import loginContext from "../store/login-context";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const loginCtx = useContext(loginContext);

  const newPasswordRef = useRef();

  const changePasswordHandler = async (event) => {
    event.preventDefault();

    const idToken = loginCtx.tokenId; // Get the token from the context
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=7e805eda-4755-495a-8b13-09d7ada97fd5"; 

    setIsLoading(true); 

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          password: newPasswordRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setIsLoading(false); // Stop loading

      if (res.ok) {
        alert("Password changed successfully");
        setNewPassword(""); // Clear the input field
      } else {
        const data = await res.json();
        throw new Error(data.error.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={changePasswordHandler}>
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          id="newPassword"
          ref={newPasswordRef}
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Changing Password..." : "Change Password"}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;