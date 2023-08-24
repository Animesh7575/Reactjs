function App() {
    const { hasNewMail, unreadCount } = useSelector((state) => state);
  
    return (
      <Provider store={store}>
        <div className="App">
          <div className="sidebar">
            <button onClick={() => <EmailList sent={false} />}>Inbox</button>
            <button onClick={() => <EmailList sent={true} />}>Sent</button>
          </div>
          <EmailList sent={false} />
          {hasNewMail && <p>● {unreadCount} Unread</p>}
        </div>
      </Provider>
    );
  }
  