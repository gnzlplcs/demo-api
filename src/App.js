import "./App.css";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

function App() {
  const url = `https://jsonplaceholder.typicode.com/users`;

  const [users, setUsers] = useState();
  const [modal, setModal] = useState(false)

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setUsers(responseJson);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleModal = (e) => {
    setModal(prev => !prev)
  }

  return (
    <div className="App">
      <h1>🧔🏻 Contacts</h1>
      <div className="container">
        {!users
          ? "Loading..."
          : users.map((user, index) => (
              <>
                <Contact
                  key={index}
                  name={user.name}
                  email={user.email}
                  phone={user.phone}
                  openModal={handleModal}
                />
                {modal && <Modal />}
              </>

            ))}
      </div>
    </div>
  );
}

export default App;
