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

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Green App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/milestones">Milestones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/claim-rewards">My Rewards</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My Environment
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/activity-generation'>
                  My Activities
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href='/goal-setter-with-buddy'>
                  My Goals
                </DropdownItem>

                <DropdownItem href='/certificate-generation'>
                  My Certificates
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Community Threads
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/community-page'>
                  Our Community
                </DropdownItem>
                {/* <DropdownItem href='/community-page'>
                Our Shared Activities
                </DropdownItem> */}
                <DropdownItem divider />
                <DropdownItem href='/accountability-buddy-chat'>
                  Buddy Chat
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Button className="mr-1" color="primary">Sign Up</Button>{' '}
          <Button color="primary" href='/login-page'>Log In</Button>{' '}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;