import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firestore } from './firebaseConfig';

const EmailList = ({ sent }) => {
  const dispatch = useDispatch();
  const { emails, unreadCount } = useSelector((state) => state);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const querySnapshot = await firestore.collection('emails').get();
        const fetchedEmails = [];
        let newUnreadCount = 0;

        querySnapshot.forEach((doc) => {
          const email = doc.data();
          if (!email.read) {
            newUnreadCount += 1;
          }
          fetchedEmails.push({ id: doc.id, ...email });
        });

        dispatch({ type: 'SET_EMAILS', payload: fetchedEmails });
        dispatch({ type: 'SET_UNREAD_COUNT', payload: newUnreadCount });
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    if (sent) { 
      fetchEmails();
    } else { 
    }
  }, [dispatch, sent]);


};
