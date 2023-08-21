import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state) => state.ui.notification);

  if (!notification) {
    return null;
  }

  let notificationClass = '';
  if (notification.type === 'loading') {
    notificationClass = 'loading';
  } else if (notification.type === 'success') {
    notificationClass = 'success';
  } else if (notification.type === 'error') {
    notificationClass = 'error';
  }

  return (
    <div className={`notification ${notificationClass}`}>
      {notification.message}
    </div>
  );
};

export default Notification;
