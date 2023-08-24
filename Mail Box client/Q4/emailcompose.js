import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { firestore } from './firebaseConfig';

const EmailCompose = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const handleSend = async () => {
    if (!recipient || !subject || !content) {
      alert('Please fill all fields');
      return;
    }

    try {
      const email = {
        recipient,
        subject,
        content,
        timestamp: new Date(),
      };

      await firestore.collection('emails').add(email);
      alert('Email sent successfully');
      setRecipient('');
      setSubject('');
      setContent('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email');
    }
  };

  return (
    <div>
      <h2>Compose Email</h2>
      <input
        type="email"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <ReactQuill
        value={content}
        onChange={setContent}
        placeholder="Compose your email..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default EmailCompose;
