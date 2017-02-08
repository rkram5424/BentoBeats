import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap'
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
  
  <div>
    <ButtonToolbar>
      <ButtonGroup>
        <Button>Pattern</Button>
        <Button>Pianoroll</Button>
        <Button>Instrument</Button>
        <Button>Mixer</Button>
      </ButtonGroup>
    </ButtonToolbar>
  </div>
)

export default Header
