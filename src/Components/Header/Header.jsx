import React, { PureComponent } from "react";

import "./header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <a href="https://www.amnuz.com" target="https://www.amnuz.com">
          <img className="header-logo" src="https://www.amnuz.com/favicon.svg" alt="logo" />
        </a>
      </div>
    );
  }
}
