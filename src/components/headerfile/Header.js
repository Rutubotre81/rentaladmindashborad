import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({handleToggleSidebar}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
      <div className="d-flex align-items-center">
        <i
          className="fas fa-align-left primary-text fs-4 me-3"
          id="menu-toggle"
          onClick={handleToggleSidebar}
        ></i>
        <h2 className="fs-2 m-0">Dashboard</h2>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isDropdownOpen ? "show" : ""}`}
      >
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}>
            <a
              className="nav-link dropdown-toggle second-text fw-bold"
              href="#"
              id="navbarDropdown"
              onClick={toggleDropdown}
            >
              <i className="fas fa-user me-2"></i>John Doe
            </a>
            <ul
              className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link to='/profile' className="dropdown-item" href="profile" >
                  Profile
                </Link>
              </li>
              <li>
                <Link to='/changepassword' className="dropdown-item" href="changepassword">
                  Change Password
                </Link>
              </li>
              <li>
                <Link  to='/' className="dropdown-item" href="#">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
