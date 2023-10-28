import React from 'react'
import { Link } from 'react-router-dom'

const MyHeader = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/weeknamelist' className="nav-link">Week Name </Link>
            </li>
            <li className="nav-item">
              <Link to="/card" className="nav-link">Red Card</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )

}

export default MyHeader