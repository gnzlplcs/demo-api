import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const url = `https://jsonplaceholder.typicode.com/users`;

  const [ users, setUsers ] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setUsers(responseJson);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      { !users ? 'Loading...' :
      users.map((user, index) => {
        return <li key={`${user.name}_${index}`}>{user.name}</li>
      })}
    </div>
  );
}

export default App;
