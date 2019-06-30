import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/signin'>Регистрация</NavLink></li>
            <li><NavLink to='/signup'>Войти</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks