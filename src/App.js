import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import './App.css';

function App() {
  const url = `https://jsonplaceholder.typicode.com/users`;

  const [users, setUsers] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setUsers(responseJson);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App bg-secondary text-light p-2">
      <h1 className="display-1 text-center">🧔🏻 Contacts</h1>
      <div className="container-fluid">
        {!users
          ? "Loading..."
          : users.map((user, index) => (
              <>
                <Contact
                  key={index}
                  contact={user}
                />
              </>

            ))}
      </div>
    </div>
  );
}

export default App;
