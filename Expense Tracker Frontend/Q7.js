import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = () => {
    setLoading(true);
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        setLoading(false);
        setResetSent(true);
      })
      .catch(error => {
        setLoading(false);
        console.error('Error sending password reset email:', error);
      });
  };

  return (
    <div>
      {resetSent ? (
        <p>Check your email for the password reset link.</p>
      ) : (
        <div>
          <p>Enter your email to reset your password:</p>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading || resetSent}
          />
          <button onClick={handleResetPassword} disabled={loading || resetSent}>
            {loading ? 'Sending...' : 'Send Reset Email'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
