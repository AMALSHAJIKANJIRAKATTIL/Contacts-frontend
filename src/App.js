import React from 'react';

import './App.css';
import   ImportUI  from "./components/import/import";
import DeleteUI from './components/delete/deleteUi';
import { ContextProvider } from './components/context/contacts';


function App() {
  
  return (
    <div className="App">
     
    {/* <ImportUI></ImportUI> */}
<DeleteUI array={["63e345adb84233e9a5d98e91"]}></DeleteUI>
    </div>
  );
}

export default App;
