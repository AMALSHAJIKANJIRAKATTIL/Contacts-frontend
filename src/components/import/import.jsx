import {React,useState} from 'react';
import axios from 'axios';

import styles from './import.module.css'

import importIcon from './import.svg'
import tickMark from './tickmark.svg'

function ImportUI() {
  
    const [file, setFile] = useState(false) ;
    const [csv,setCsv]=useState(null);
    const [fileDraged,setDrag]=useState(false);

const fileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await axios.post("http://localhost:5000/contacts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


    const handleDrop = (event) => {
        event.preventDefault();
        
        const file = event.dataTransfer.files[0];
        if (file.type === "text/csv") {

          setDrag(false);

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
        setDrag(true);
        
      };

     
  return (
    <div className={styles.overlay} onDrop={handleDrop}
    onDragOver={handleDragOver}>
        
        {!file ? <div className={fileDraged ? styles.popuoOndrag : styles.popup}  onDrop={handleDrop}
    onDragOver={handleDragOver} > 
        <img src={importIcon} alt="import icon" className={styles.importIcon}/>
        <button className={styles.cancelBtn}>Cancel</button>
        </div>
        : 
        <div className={styles.popup} >

        <img src={tickMark} alt="import icon" className={styles.tickMark}/>
    
            </div>}
        


        
    </div>
  )
}

export default ImportUI