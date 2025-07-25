import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>Chai and full stack</h3>
      {jokes.map((joke,index) => (
        <div key={joke.id}> 
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
