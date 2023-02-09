import React from 'react'
import { useState } from 'react'
import './table.css'
import side from './side.svg'
import logout from './logout.svg'
import topbar from './topbar.svg'
import filter from './filter.svg'

import searchIcon from './search.svg'
import deleteBtn from './deleteBtn.svg'
import importBtn from './importBtn.svg'
import exportBtn from './exportBtn.svg'
import userImage from './user.svg'

import Delete from '../delete/deleteUi'
import ImportUI from '../import/import'

function Table() {

/////////////////// should get from backend
  const contacts=["abc","cfg","abc","cfg","abc","cfg","abc","cfg"];
////////////////



  const [deleteVisible,setDltvisible]=useState(false);
  const [importVisible,setImportvisible]=useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  // console.log(localStorage.getItem('user').split('@')[0])

  
  const deleteClick=()=>{
    setDltvisible(!deleteVisible)
  }
  const importClick=()=>{
    setImportvisible(!importVisible)
  }

 
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = contacts.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  const cancelDropDown=()=>{
    setFilteredData([]);
    setWordEntered("");
  }
  return (
<>
    {
      deleteVisible && 
      <div><Delete setDltvisible={setDltvisible} deleteVisible={deleteVisible}></Delete></div>
    }
    {
      importVisible && 
      <div>
    <ImportUI setImportvisible={setImportvisible} importVisible={importVisible}></ImportUI>
      </div>
    }
    <div className='parent'>




    <div className='container'>
        <div ><img src={side} className='logo'  alt='icon'></img></div>
        
        {/*Logout button click logic need to be implemented here */}
        
        <div className='logout'>
            <img src={logout}  alt='icon'></img>
            </div>
    </div>
<div className='leftcontainer'>
    <div className='userBar'>
      <div className='mainIcon'>
        <img src={topbar}></img>
      </div>
      <div className='searchBar'>
        <div className='searchDrop'>
        <img src={searchIcon} alt='search icon'></img>

        <input type={"email"} className='input-area' placeholder='Search by Email id...' onChange={handleFilter} onBlur={cancelDropDown}></input> 
        
     
      </div>
      
        {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem">
                <p>{value} </p>
              </a>
            );
          })}
          
        </div>
      )}
      
      </div>

<div className='userDetails'>

<div className='userImage'>
    <img src={userImage} alt='user icon'></img>
  </div>
<div className='userName'>

  <h5>{localStorage.getItem('user').split('@')[0]}</h5>

  
  <p>user</p></div>
      </div>
    </div>


    





    <div className='filter'>
    <img src={filter} className='filterimgstick' alt='icon'></img>
    {/* {Individual buttons} */}
    <div className='individualBtndiv'>
    <img src={deleteBtn} className='filterimg' alt='icon' onClick={deleteClick}></img>
    <img src={importBtn} className='filterimg' alt='icon' onClick={importClick}></img>
    <img src={exportBtn} className='filterimg' alt='icon'></img>
    </div>

    
    </div>
    
    
    {/* Write in this div the table view code */}


    </div>


    </div>
    </>
  )
}

export default Table