import { useEffect, useState } from 'react';
import { firestore } from './firebaseConfig';

const useFetchSentEmails = () => {
  const [sentEmails, setSentEmails] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('emails').where('sender', '==', 'user@example.com')
      .onSnapshot((snapshot) => {
        const fetchedEmails = [];
        snapshot.forEach((doc) => {
          fetchedEmails.push({ id: doc.id, ...doc.data() });
        });
        setSentEmails(fetchedEmails);
      });

    return () => unsubscribe();
  }, []);

  return { sentEmails };
};

export default useFetchSentEmails;
