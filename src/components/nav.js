import React from 'react'

function MyNav(props){
    return (
        <nav className="navbar navbar-expand-sm navbar-dark shadow">
        <div className="container">
          <a href="index.html" handleClick={props.handleClick} className="navbar-brand text-nav"><i className="fa fa-search"></i> Search Engine</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggle-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="SearchBar.html" className="nav-link text-nav"><i className="fa fa-info-circle"></i> About us</a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link"><i className="fa fa-address-card"></i> Contact</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
)}

export default MyNav