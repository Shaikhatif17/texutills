import React from "react";

function NavBar(props) {
  return (
    <div>
      <nav className={`"navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand " href="/" >
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </li>
             
              
            </ul>
            {/* <form className="d-flex">
              
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className={`"form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                class="form-check-input"
                onClick={props.toggleMode}
                
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
               />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.defaultProps = {
  title: "textUtilsS",
  aboutText: "text",
};

export default NavBar;
