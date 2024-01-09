import React from 'react'
import './basic.css'
import './pages.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const Footer = () => {
  return (
    <div className='move2'>
      <div className='oval'></div>
      <div className='bgfoot'>
        <div className='container' id='komp'>
          <div className='row foot'>
            <div className='col-4'>
              <p className='first'>
                <FooterLink className='text-footer' to="/">Home</FooterLink>
              </p>
              <p >
                <FooterLink className='text-footer' to="/adopt">Adopt</FooterLink>
              </p>
              <p>
                <FooterLink to="/about" className='text-footer'>About us</FooterLink>
              </p>
              <p className='last'>
                <FooterLink className='text-footer' to="/contact">Contact</FooterLink>
              </p>
            </div>
            <div className='col-4'>
              <p className='first text-footer'>
                Contact
              </p>

              <p className='text-footer2'>
                Tel: <a href="d" alt="">+1 123 456 7890</a>
              </p>
              <p className='text-footer2'>
                Email: <a href='d'>info@adoptfosters.us</a>
              </p>
              <p className='text-footer2'>
                Address: Company Street 23
              </p>
            </div>
            <div className='col-4'>
              <p className='text-footer2 first'>
                Socials
              </p>

              <p className='text-footer2'>
                Instagram: <a href="d">@adoptfostersus</a>
              </p>

              <p className='text-footer2'>
                Facebook: <a href="d">@adoptfostersus</a>
              </p>

              <p className='text-footer2'>
                YouTube: <a href="d">@adoptfostersus</a>
              </p>
            </div>
          </div>
        </div>

        <div className='container tri' id='mob'>
          <div className='foot'>
            <h2 className='contact'>
              Contact
            </h2>

            <div className='d-flex ikone'>
              <a href="#social">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>

              <a href="#social">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>

              <a href="#social">
                <FontAwesomeIcon icon={faYoutube}/>
              </a>

              <a href="#social">
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
            </div>

            <hr className='hrContact'/>
          </div>

          <p className='copyright'>
            © Copyright - All rights reserved. 2023
          </p>

        </div>
      </div>
      
    </div>
  )
}


function FooterLink({to, children, ...props}){
  // const path = window.location.pathname;
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
      <li className={isActive === to ? "active" : ""}>
          <Link to={to} {...props}>
              {children}
          </Link>
      </li>
  )
}

export default FooterLink