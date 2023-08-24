import { useEffect, useState } from 'react';
import { firestore } from './firebaseConfig';

const useFetchInboxEmails = () => {
  const [inboxEmails, setInboxEmails] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('emails').where('recipient', '==', 'user@example.com')
      .onSnapshot((snapshot) => {
        const fetchedEmails = [];
        snapshot.forEach((doc) => {
          fetchedEmails.push({ id: doc.id, ...doc.data() });
        });
        setInboxEmails(fetchedEmails);
      });

    return () => unsubscribe();
  }, []);

  return { inboxEmails };
};

export default useFetchInboxEmails;
