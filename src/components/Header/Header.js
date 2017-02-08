import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar,Nav,NavItem,NavDropdown,MenuItem,ButtonToolbar,ButtonGroup,Button } from 'react-bootstrap';
import './Header.scss'

export const Header = () => (

  // <div>
  //   <Link to='/pattern' activeClassName='route--active'>
  //     Pattern
  //   </Link>
  //   {' · '}
  //   <Link to='/pianoroll' activeClassName='route--active'>
  //     Pianoroll
  //   </Link>
  //   {' · '}
  //   <Link to='/instrument' activeClassName='route--active'>
  //     Instrument
  //   </Link>
  //   {' · '}
  //   <Link to='/mixer' activeClassName='route--active'>
  //     Mixer
  //   </Link>
  // </div>
  
  <Navbar className="navbar navbar-default navbar-fixed-top">
    <Navbar.Brand>
      BentoBeats
    </Navbar.Brand>
    <Nav>
      <NavDropdown eventKey={3} title="File" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <ButtonToolbar className="navbar-btn">
        <ButtonGroup>
          <Button>Pattern</Button>
          <Button>Pianoroll</Button>
          <Button>Instrument</Button>
          <Button>Mixer</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>
            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Nav>
  </Navbar>
)

export default Header
