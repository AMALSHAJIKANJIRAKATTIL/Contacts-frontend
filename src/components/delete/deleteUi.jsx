import {React,useState} from 'react';
import './delete.css';
import deleteIcon from './delete.svg';
import cancelBtn from './cancelBtn.svg';
import completed from './tickMark.svg'
import axios from 'axios';


function DeleteUI(props) {
  const [apiCallMade, setApiCallMade] = useState(false);
  const [dlt, setDelete] = useState(false) ;
  const url=process.env.REACT_APP_API;
  const array=props.array;
  //localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzU5NjAzMTgsImRhdGEiOiI2M2UyOWFlNmFlZTkwNjEyNjZmMWFlOTAiLCJpYXQiOjE2NzU4NzM5MTh9.lUlBoaXT2qQfGGU4xqK0GZKZjy8a-pa_rM1bCQUzuuA");

// console.log(apiCallMade,dlt,url,array);

  const deleteCall=async ()=>{
    
    //
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("token"),
        "ids": array
      }
    };
    try {
      if (!apiCallMade) {
      await axios.delete(`${url}/contacts/delete`,config) .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      setDelete(!dlt);
      setApiCallMade(true);

     /////////////////////
     setTimeout(() => {
            
      setDelete(false);
    }, 1500);
    /////////////////////
  

      }
      //console.log(response);
    } catch (error) {
      setDelete(!dlt);
      console.error(error);

      /////////////////////
      setTimeout(() => {
            
        setDelete(false);
      }, 1500);
      /////////////////////
  
    }
  };

    
  

  return (

    <div className='overlay'>
{!dlt ?
<div className='popup'>

<img src={deleteIcon} alt="delete icon" className='icon'/>
<div className='btns'> 
<img src={cancelBtn} alt="cancel button" className='cancelBtn'/>
<button className='delete' onClick={deleteCall}>Ok</button>
</div>

</div>
:
<div className='popup'>

<img src={completed} alt="completed icon" className='icon'/>


</div>
}
</div>
  )
}

export default DeleteUI
