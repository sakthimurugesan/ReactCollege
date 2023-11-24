import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState("Hello dear one learning React");

  useEffect(() => {
    console.log('useEffect hook called');

    const timeoutId = setTimeout(() => {
      setMessage("Great. This is the time to learn about HOOKS");
    }, 2000);

    return () => {
      // Cleanup function to clear the timeout if the component unmounts
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  const resetMessage = () => {
    setMessage("Hello dear one learning React");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={resetMessage}>Reset Message</button>
    </div>
  );
};

export default App;