import React, { useState } from 'react';

const App = () => {
  const [transformation, setTransformation] = useState('Kaioken');

  const toggleTransformation = () => {
    setTransformation((currentTransformation) =>
      currentTransformation === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
    );
  };

  return (
    <div>
      <h1>Goku's Transformation: {transformation}</h1>
      <button onClick={toggleTransformation}>Toggle Transformation</button>
    </div>
  );
};

export default App;
