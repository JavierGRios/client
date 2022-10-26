import React from 'react';



function NavBar(){

    return(
        <nav className="navbar navbar-expand navbar-light bg-black  topbar mb-4 static-top shadow">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">DHouse Dashboard</h1>
            </div>
					
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>

        
        <ul className="navbar-nav ml-auto">

           
            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                    <i className="fas fa-bell fa-fw"></i>
                    
                    <span className="badge badge-danger badge-counter">143+</span>
                </a>
            </li>

            
            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                    <i className="fas fa-envelope fa-fw"></i>
                    
                    <span className="badge badge-danger badge-counter">14</span>
                </a>
            </li>

            <div className="topbar-divider d-none d-sm-block"></div>

            
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">El Diez</span>
                    <img className="img-profile rounded-circle" src="/assets/images/messi.jpg" alt='' width="60"/>
                </a>
            </li>

        </ul>

    </nav>
    )

}

export default NavBar;