import {React,useState} from 'react';
import './delete.css';
import deleteIcon from './delete.svg';
import cancelBtn from './cancelBtn.svg';
import completed from './tickMark.svg'

function DeleteUI() {

  const [dlt, setDelete] = useState(false) ;

  const deleteCall=()=>{
    console.log("hi",dlt);
    setDelete(!dlt);
    /////////////////////
    setTimeout(() => {
      setDelete(false);
    }, 1500);
    /////////////////////
  }

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