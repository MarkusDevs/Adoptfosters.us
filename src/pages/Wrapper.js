import React from 'react'
import './basic.css'
import './pages.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


export const Wrapper = () => {
  return (
    <div className='sticky-top' >
        <nav className="navigationbar">
            <div className='flexy'>
                <h2>
                    {/* Adoptfosters.us */}
                    <Link className='navtext' to="/">Adoptfosters.us</Link>
                </h2>

                <button className='hamburger'>
                    <span className='hamburger-icon'></span>
                </button>
            </div>

        </nav>
        <div className='dropdown'>
            <ul className='dropdown-list'>
                <CustomLink to="/">Home</CustomLink>

                <CustomLink to="/adopt">Adopt</CustomLink>

                <CustomLink to="/about">About us</CustomLink>

                <CustomLink to="/contact">Contact</CustomLink>

                <CustomLink to="/account" className="account">Account</CustomLink>
            </ul>
        </div>

        <script src='./Script.js'></script>
    </div>
  )
}


function CustomLink({to, children, ...props}){
    // const path = window.location.pathname;
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props} id='navLink'>
                {children}
            </Link>
            <hr/>
        </li>
    )
}


// const toggleNav = document.querySelector(".hamburger");
// const navLink = document.querySelectorAll("#navLink");

// toggleNav.addEventListener('click', () => {
//     document.body.classList.add('hamburger-open');
//     // document.body.classList.remove('hamburger-open');
    
// })

// navLink.forEach(link => {
//     if(link){
//         link.addEventListener('click', () => {
//             document.body.classList.remove('hamburger-open');
//         })
//     }
// })
