import React, { Component } from 'react'

import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a href="https://www.amnuz.com" target="https://www.amnuz.com">
                    <span className="footer-typo">© {new Date().getFullYear()} | Developed by Amnuz Technologies</span>
                </a>
            </div>
        )
    }
}
