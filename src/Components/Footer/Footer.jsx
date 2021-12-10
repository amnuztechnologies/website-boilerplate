import React, { PureComponent } from "react";

import "./footer.css";

export default class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        <a href={`https://www.amnuz.com/?utm=${window.location.hostname}`} target="_blank" rel="noreferrer">
          <span className="footer-typo">
            ©
            {" "}
            {new Date().getFullYear()}
            {" "}
            | This website is being developed by Amnuz Technologies
          </span>
        </a>
      </div>
    );
  }
}
