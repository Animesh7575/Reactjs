import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firestore } from './firebaseConfig';

const EmailList = () => {
  const dispatch = useDispatch();
  const { emails, unreadCount } = useSelector((state) => state);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const querySnapshot = await firestore.collection('emails').get();
        const emails = [];
        let newUnreadCount = 0;

        querySnapshot.forEach((doc) => {
          const email = doc.data();
          if (!email.read) {
            newUnreadCount += 1;
          }
          emails.push({ id: doc.id, ...email });
        });

        dispatch({ type: 'SET_EMAILS', payload: emails });
        dispatch({ type: 'SET_UNREAD_COUNT', payload: newUnreadCount });
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchEmails();
  }, [dispatch]);

  const markAsRead = (emailId) => {
    firestore.collection('emails').doc(emailId).update({ read: true });
    dispatch({ type: 'SET_UNREAD_COUNT', payload: unreadCount - 1 });
  };

  return (
    <div>
      <h2>Emails</h2>
      <p>Unread: {unreadCount}</p>
      {emails.map((email) => (
        <div key={email.id} onClick={() => markAsRead(email.id)}>
          {email.read ? (
            <p>{email.subject}</p>
          ) : (
            <p>
              <span style={{ color: 'blue', marginRight: '5px' }}>●</span>
              {email.subject}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmailList;
