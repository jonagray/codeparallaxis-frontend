import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
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
  DropdownItem
} from 'reactstrap';
import Search from './blog/Search';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      {process.browser && <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink style={{ cursor: 'pointer' }} className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <React.Fragment>

              {isAuth() && isAuth().role === 0 && (
                <NavItem>
                  <Link href="/user">
                    <NavLink style={{ cursor: 'pointer' }}>
                      {`${isAuth().name}'s Dashboard`}
                    </NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && isAuth().role === 1 && (
                <NavItem>
                  <Link href="/admin">
                    <NavLink style={{ cursor: 'pointer' }}>
                      {`${isAuth().name}'s Dashboard`}
                    </NavLink>
                  </Link>
                </NavItem>
              )}
              <NavItem>
                <Link href="/blogs">
                  <NavLink style={{ cursor: 'pointer' }}>Blogs</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/contact">
                  <NavLink style={{ cursor: 'pointer' }}>Contact</NavLink>
                </Link>
              </NavItem>

            </React.Fragment>

            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link a href="/signin">
                    <NavLink style={{ cursor: 'pointer' }}>Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link a href="/signup">
                    <NavLink style={{ cursor: 'pointer' }}>Signup</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}


            {isAuth() && (
              <NavItem>
                <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                  Signout
                </NavLink>
              </NavItem>
            )}

            <NavItem>
              <a href="/user/crud/blog" className="btn btn-primary text-light" style={{ cursor: 'pointer' }}>New Blog</a>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>}
      <Search />
    </React.Fragment>
  );
};

export default Header;