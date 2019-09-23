import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";

const Header: React.FC<any> = () => {
  return (
    <header>
      <Link to="/">
        <div className="icon">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/sco/a/a6/Major_League_Baseball_logo.svg"
              alt=""
            />
          </div>
          <div className="appName">MLB Stats Viewer</div>
        </div>
      </Link>
    </header>
  );
};

export default Header;
