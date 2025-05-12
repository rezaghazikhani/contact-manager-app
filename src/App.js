//Components
import Navbar from "./components/Navbar";
import Contacts from "./components/contact/Contacts";
//react
import { useState } from "react";
//css
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={getContacts} loading={loading}/>
    </div>
  );
};

export default App;
