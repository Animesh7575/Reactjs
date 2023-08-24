import React, { useState, useEffect } from 'react';
import { firestore } from './firebaseConfig';

const Inbox = () => {
  const [inboxMails, setInboxMails] = useState([]);

  useEffect(() => {
    const fetchInboxMails = async () => {
      try {
        const querySnapshot = await firestore.collection('emails').where('recipient', '==', 'user@example.com').get();
        const mails = [];
        querySnapshot.forEach((doc) => {
          mails.push({ id: doc.id, ...doc.data() });
        });
        setInboxMails(mails);
      } catch (error) {
        console.error('Error fetching inbox mails:', error);
      }
    };
    fetchInboxMails();
  }, []);

  return (
    <div>
      <h2>Inbox</h2>
      {inboxMails.map((mail) => (
        <div key={mail.id}>
          <p>Subject: {mail.subject}</p>
          <p>Content: {mail.content}</p>
        </div>
      ))}
      <button onClick={() => /* Navigate to compose screen */}>Compose</button>
    </div>
  );
};

export default Inbox;
