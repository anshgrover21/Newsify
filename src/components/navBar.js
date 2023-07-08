import React from 'react'

import {
    Link
  } from "react-router-dom";

const navBar = ()=> {
    return (
                    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
         
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/us">US</Link>
                </li>
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="\">Something else here</a>
                    </div>
                </li> */}
               
                </ul>
               
            </div>
            </nav>
      
    )
  
}

export default navBar