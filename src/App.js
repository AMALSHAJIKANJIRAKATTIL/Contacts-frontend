import React from 'react';

import './App.css';
import   ImportUI  from "./components/import/import";
import DeleteUI from './components/delete/deleteUi';
import { ContextProvider } from './components/context/contacts';
import Table from './components/tableui/table';



function App() {
  
  return (
    <div className="App">
<Table></Table>
    </div>
  );
}

export default App;
