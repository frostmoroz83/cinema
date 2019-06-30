import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/create'>Добавить фильм</NavLink></li>
            <li><NavLink to='/create'>Профиль</NavLink></li>
            <li><NavLink to='/'>Выйти</NavLink></li>
        </ul>
    )
}

export default SignedInLinks