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
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import { useHistory } from "react-router-dom";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  //For demoing badge notification
  const history = useHistory();
  var pathName = history.location.pathname.split('/').slice(-1)[0]

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img
            alt="..."
            src={require("../../assets/1x/logosolo-06.png")}
            style={{ width: "50px" }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{ paddingRight: '30px' }}>
              <NavLink href="/milestones">Milestones</NavLink>
            </NavItem>

            <NavItem style={{ paddingRight: '30px' }}>
              {/* For demoing badge alert */}
              {(pathName == "thread-challenge-1" || pathName == 'claim-rewards') &&
                <Badge style={{ paddingRight: '0px' }} anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }} badgeContent={2} color='primary'>
                  <NavLink href="/claim-rewards">My Rewards</NavLink>
                </Badge>
              }
              {(pathName != "thread-challenge-1" && pathName != 'claim-rewards') &&
                  <NavLink href="/claim-rewards">My Rewards</NavLink>
              }


            </NavItem>

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

              </DropdownMenu>
              <Box pt={1}></Box>
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