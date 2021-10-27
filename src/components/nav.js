import React from 'react'
import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <div className="nav-banner">
            <div className="nav-wrapper">
                <NavLink exact to="/home">Trail Finder</NavLink>
                <NavLink to="/parks">Parks</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
            </div>
        </div>
    )
}