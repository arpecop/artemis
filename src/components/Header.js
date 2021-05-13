import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" style={{width:140}} /></span>
        <h1>Артемис</h1>
        <p> Недвижими имоти Варна/Добрич</p>
    </header>
)

export default Header
