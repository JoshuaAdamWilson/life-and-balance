import React, { useContext } from 'react'
import './NavBar.css'
import DragonFly from '../images/dragonfly.png'
import LifeTitle from '../images/life.png'
import { Link } from 'react-router-dom'
import { Button, Menu, MenuItem } from '@material-ui/core'
import { Context } from '../../context/Context'

const NavBar = () => {
  const { user, dispatch } = useContext(Context)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }

  const closeNavBar = () => {
    const checkBox = document.getElementById("hamburger");
    checkBox.defaultChecked.value = 2;
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="logo-link" onClick={closeNavBar}>
          <img src={DragonFly} alt="dragonfly" className="logo"/>
          <img src={LifeTitle} alt="dragonfly" className="life-title"/>
        </Link>
      </div>
      {user ? (
        <div className="middle">
          Hello, {user.username.split(" ").slice(0, 1)}!
        </div>
      ) : (
        <></>
      )}
      <div id="hamnav" className="right">
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />

        <div id="hamitems">
          <Link to="/" className='link only-home-link'onClick={closeNavBar}>
            <Button className="link-button" onClick={closeNavBar}>
              Home
            </Button>
          </Link>
          <Link to="/blog" className='link home-link blog-link' onClick={closeNavBar}>
            <Button className="link-button" onClick={closeNavBar}>
              Blog
            </Button>
          </Link>

          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Resources
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/resources" className='link' onClick={closeNavBar}>Resources</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/education" className='link' onClick={closeNavBar}>Education</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/yoga" className='link' onClick={closeNavBar}>Yoga</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/spirituality" className='link' onClick={closeNavBar}>Spirituality</Link>
            </MenuItem>
          </Menu>

          <Link to="/events" className='link home-link' onClick={closeNavBar}>
            <Button className="link-button" onClick={handleClose}>
              Events
            </Button>
          </Link>
          <Link to="/about" className='link home-link' onClick={closeNavBar}>
            <Button className="link-button" onClick={handleClose}>
              About
            </Button>
          </Link>
          <Link to="/contact" className='link home-link' onClick={closeNavBar}>
            <Button className="link-button" onClick={handleClose}>
              Contact
            </Button>
          </Link>
          {user ? (
            <>
              <Link to="/admin" className='link home-link' onClick={closeNavBar}>
                <Button className="link-button" onClick={handleClose}>
                  Admin
                </Button>
              </Link>
              <Link to="/" className='link home-link' onClick={closeNavBar}>
                <Button className="link-button" onClick={handleLogout}>
                  Logout
                </Button>
              </Link>
            </>
          ) : ( 
            <>
              <Link to="/access" className='link home-link blog-link' onClick={closeNavBar}>
                <Button className="link-button" onClick={closeNavBar}>
                  Login
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
