import React, { useState } from 'react';

const App = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <button onClick={toggleMessage}>
        {showMessage ? 'Hide Message' : 'Show Message'}
      </button>
      {showMessage && <p>Hi! How are You!!!</p>}
    </div>
  );
};

export default App;
