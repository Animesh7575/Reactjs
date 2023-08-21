import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const VerifyEmail = () => {
  const [verificationSent, setVerificationSent] = useState(false);
  const user = firebase.auth().currentUser;

  const sendVerificationEmail = () => {
    user.sendEmailVerification()
      .then(() => {
        setVerificationSent(true);
      })
      .catch(error => {
        console.error('Error sending verification email:', error);
      });
  };

  return (
    <div>
      {user && !user.emailVerified && (
        <div>
          <p>Your email is not verified. Please check your email and verify it.</p>
          {!verificationSent ? (
            <button onClick={sendVerificationEmail}>Send Verification Email</button>
          ) : (
            <p>Verification email sent. Check your inbox.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
