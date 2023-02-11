import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import   ImportUI  from "./components/import/import";
import DeleteUI from './components/delete/deleteUi';
import Table from './components/Table/table';
import Contacts from './components/Contacts/Contacts';

function App() {
  
  return (
    <div className="App">
     
     <Table/>
     {/* <Contacts/> */}

    </div>
  );
}

export default App;
