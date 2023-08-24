import useFetchInboxEmails from './useFetchInboxEmails';
import useFetchSentEmails from './useFetchSentEmails';

const EmailList = ({ sent }) => {
  const { inboxEmails } = useFetchInboxEmails();
  const { sentEmails } = useFetchSentEmails();

  const emails = sent ? sentEmails : inboxEmails;


};
