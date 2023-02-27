import React from 'react';
import Dashboard from './Header';
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'> 
                   <div className='sidebar'>
                      <div className='topheader'>
                        <span><img src='logo.jpg' alt='logo' height="40px" width="40px" className='logo'></img></span>
                        <span className=' title pl-2 text-success font-weight-bold'> Voting Management</span><hr/>
                             <div id="sidebar-button">
                             <nav>
                             <p className='text-left ml-5'>Register</p>
                             <p className='text-left ml-5'>Check Eligibility</p>
                             <p className='text-left ml-5'>Find in Electoral Roll</p>
                             <p className='text-left ml-5'>Track Application</p>

                             </nav>
                             </div>
                      </div>
                    </div> 
            </div>
        </div>
    </div> 
    </>

  )
}

export default Sidebar;
