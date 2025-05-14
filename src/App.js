//Components
import {  Contacts, Navbar  , AddContact, EditContact, ViewContact} from "./components/index";
//react
import { useState } from "react";
import { Routes, Route , Navigate } from "react-router-dom";
//css
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} /> 
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/contacts/add" element={<AddContact/>}/>
        <Route path="/contacts/edit/:contactId" element={<EditContact/>}/>
        <Route path="/contacts/:contactId" element={<ViewContact/>}/>
      </Routes>
      {/* <Contacts contacts={getContacts} loading={loading}/> */}
    </div>
  );
};

export default App;
