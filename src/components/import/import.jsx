import {React,useState} from 'react';
import axios from 'axios';
import './import.css';

import importIcon from './import.svg'
import tickMark from './tickmark.svg'

function ImportUI() {
    const [file, setFile] = useState(false) ;
    const [csv,setCsv]=useState(null);


const fileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await axios.post("/server/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file.type === "text/csv") {
          setCsv(file);
          setFile(true);

          fileUpload(csv);
          /////////////////////
          setTimeout(() => {
            setFile(false);
          }, 1500);
          /////////////////////
        }
      };
    
      const handleDragOver = (event) => {
        event.preventDefault();
      };

  return (
    <div className='overlay'>
        
        {!file ? <div className='popup' onDrop={handleDrop}
      onDragOver={handleDragOver}> 
        <img src={importIcon} alt="import icon" className='importIcon'/>
        <button className='cancelBtn'>Cancel</button>
        </div>: <div className='popup' >

        <img src={tickMark} alt="import icon" className='tickMark'/>
    
            </div>}
        


        
    </div>
  )
}

export default ImportUI