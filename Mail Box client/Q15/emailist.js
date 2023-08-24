import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firestore } from './firebaseConfig';

const EmailList = ({ sent }) => {
 

  useEffect(() => {
    const unsubscribe = firestore.collection('emails').onSnapshot((snapshot) => {
      const fetchedEmails = [];
      let newUnreadCount = 0;
      snapshot.forEach((doc) => {
        const email = doc.data();
        if (!email.read) {
          newUnreadCount += 1;
        }
        fetchedEmails.push({ id: doc.id, ...email });
      });

      dispatch({ type: 'SET_EMAILS', payload: fetchedEmails });
      dispatch({ type: 'SET_UNREAD_COUNT', payload: newUnreadCount });

      if (newUnreadCount > unreadCount) {
        dispatch({ type: 'SET_HAS_NEW_MAIL', payload: true });
      }
    });

    return () => unsubscribe(); 
  }, [dispatch, sent]);

  .
};
