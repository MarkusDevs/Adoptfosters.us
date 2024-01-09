import React from 'react'
import './basic.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function ButtonLink({to, children, ...props}){
    // const path = window.location.pathname;
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <Link className={isActive === to ? "active" : ""} to={to} {...props}>
            {children}
        </Link>
       
    )
}

export default ButtonLink;