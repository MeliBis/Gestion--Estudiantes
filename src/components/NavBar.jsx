import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap"
            width={30}
            height={24}
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
