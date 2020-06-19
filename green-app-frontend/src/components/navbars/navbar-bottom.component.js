import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-bottom justify-content-between px-5" color="dark" dark expand="md">
        <Nav>
          <NavbarText>NlPS</NavbarText>
        </Nav>
        <Nav>
          <FontAwesomeIcon className='mr-3' icon={faFacebook} style={{'color':'white'}}/>
          <FontAwesomeIcon icon={faTwitter} style={{'color':'white'}}/>
        </Nav>

      </Navbar>


    </div>
  );
}

export default Example;