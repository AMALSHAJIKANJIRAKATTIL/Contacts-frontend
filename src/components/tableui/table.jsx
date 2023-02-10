import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../../helper/helper'
import './table.css'
import side from './side.svg'
import logout from './logout.svg'
import topbar from './topbar.svg'
import filter from './filter.svg'

import deleteBtn from './deleteBtn.svg'
import importBtn from './importBtn.svg'
import exportBtn from './exportBtn.svg'


function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const headings = ['Name', 'Designation', 'Company', 'Industry', 'Email', ' Phone number', 'Country', 'Action'];
  const token = isAuthenticated();
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/contacts", {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        Authorization: `${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        setData(res.data);
        setLoading(false);
        console.log(res);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='parent'>
      <div className='container3'>
        <div ><img src={side} className='logo1' alt='icon'></img></div>

        {/*Logout button click logic need to be implemented here */}

        <div className='logout1'>
          <img src={logout} alt='icon'></img>
        </div>
      </div>
      <div className='leftcontainer1'>

        <div className='topbar'>
          <img src={topbar} className='topimage' alt='icon'></img>

          {/* Search logic should be implemented here */}

          <input type={"email"} className='input-field' placeholder='Search by EmailId...'></input>
        </div>
        <div className='filter'>
          <img src={filter} className='filterimgstick' alt='icon'></img>
          {/* {Individual buttons} */}
          <div className='individualBtndiv'>
            <img src={deleteBtn} className='filterimg' alt='icon'></img>
            <img src={importBtn} className='filterimg' alt='icon'></img>
            <img src={exportBtn} className='filterimg' alt='icon'></img>
          </div>


        </div>

        <div className="Overflow">
          {
            loading ? (
              <div className="loadingContainer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"></img>
              </div>
            )  : (

          <table>
            <thead>
              <tr className='headings'>
                {
                  headings.map((heading, index) => {
                    return (
                     
                      heading === "Name" ? (
                       <td >
                        <div className="allCheck">
                         <input type="checkbox" />
                        <p className="nname">{heading}</p>
                        </div>
                       </td>
                      ) : (
                        <td>
                          {heading}
                        </td>
                      )
                     
                    )
                  })
                }
              </tr>
            </thead>
            <tbody >
                {
                  data.map((contact, index) => {
                    return (
                      <tr className={`${index % 2 === 0 ? "odd" : "even"}`}>
                        <td >
                          <div className='nameContainer'>
                            <input type="checkbox" />
                            <p className="name1">{contact.name}</p>
                          </div>
                        </td>
                        <td>{contact.designation}</td>
                        <td>{contact.company}</td>
                        <td>{contact.industry}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.country}</td>
                        <td>
                          <div className='buttonContainer1'>
                            {/* <button className='editbutton'>Edit</button> */}
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-2 h-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>


                            {/* <button className='deletebutton'>Delete</button> */}
                            <svg className="deleteIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                          </div>
                        </td>
              </tr>
                    )
                  })
                }
            
            </tbody>
          </table>
            )
          }

        </div>
      </div>


    </div>
  )
}

export default Table