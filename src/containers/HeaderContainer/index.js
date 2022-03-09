import React, { useState } from "react";
import { Container, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '@styles/components/HeaderContainer.css'

const HeaderContainer = () => {
  return (
    <>
      <Navbar  className='navMain' expand="lg">
        <Container fluid>
            <Link to="/home">
          <Navbar.Brand href="#" >
            <svg
              width="87"
              height="31"
              viewBox="0 0 87 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0105 3.344V7.18H5.00252V11.324H10.9945V15.048H5.00252V23H0.214516V3.344H13.0105ZM17.935 5.752C17.095 5.752 16.4043 5.50933 15.863 5.024C15.3403 4.52 15.079 3.904 15.079 3.176C15.079 2.42933 15.3403 1.81333 15.863 1.328C16.4043 0.823998 17.095 0.571998 17.935 0.571998C18.7563 0.571998 19.4283 0.823998 19.951 1.328C20.4923 1.81333 20.763 2.42933 20.763 3.176C20.763 3.904 20.4923 4.52 19.951 5.024C19.4283 5.50933 18.7563 5.752 17.935 5.752ZM20.315 7.376V23H15.527V7.376H20.315ZM33.3048 7.208C35.1342 7.208 36.5902 7.80533 37.6728 9C38.7742 10.176 39.3248 11.8 39.3248 13.872V23H34.5648V14.516C34.5648 13.4707 34.2942 12.6587 33.7528 12.08C33.2115 11.5013 32.4835 11.212 31.5688 11.212C30.6542 11.212 29.9262 11.5013 29.3848 12.08C28.8435 12.6587 28.5728 13.4707 28.5728 14.516V23H23.7848V7.376H28.5728V9.448C29.0582 8.75733 29.7115 8.216 30.5328 7.824C31.3542 7.41333 32.2782 7.208 33.3048 7.208ZM50.016 3.344C52.088 3.344 53.8987 3.75467 55.448 4.576C56.9974 5.39733 58.192 6.55467 59.032 8.048C59.8907 9.52267 60.32 11.2307 60.32 13.172C60.32 15.0947 59.8907 16.8027 59.032 18.296C58.192 19.7893 56.988 20.9467 55.42 21.768C53.8707 22.5893 52.0693 23 50.016 23H42.652V3.344H50.016ZM49.708 18.856C51.5187 18.856 52.928 18.3613 53.936 17.372C54.944 16.3827 55.448 14.9827 55.448 13.172C55.448 11.3613 54.944 9.952 53.936 8.944C52.928 7.936 51.5187 7.432 49.708 7.432H47.44V18.856H49.708ZM65.4038 5.752C64.5638 5.752 63.8731 5.50933 63.3318 5.024C62.8091 4.52 62.5478 3.904 62.5478 3.176C62.5478 2.42933 62.8091 1.81333 63.3318 1.328C63.8731 0.823998 64.5638 0.571998 65.4038 0.571998C66.2251 0.571998 66.8971 0.823998 67.4198 1.328C67.9611 1.81333 68.2318 2.42933 68.2318 3.176C68.2318 3.904 67.9611 4.52 67.4198 5.024C66.8971 5.50933 66.2251 5.752 65.4038 5.752ZM67.7838 7.376V23H62.9958V7.376H67.7838ZM77.1896 7.152C78.2909 7.152 79.2522 7.376 80.0736 7.824C80.9136 8.272 81.5576 8.86 82.0056 9.588V7.376H86.7936V22.972C86.7936 24.4093 86.5042 25.7067 85.9256 26.864C85.3656 28.04 84.4976 28.9733 83.3216 29.664C82.1642 30.3547 80.7176 30.7 78.9816 30.7C76.6669 30.7 74.7909 30.1493 73.3536 29.048C71.9162 27.9653 71.0949 26.4907 70.8896 24.624H75.6216C75.7709 25.2213 76.1256 25.688 76.6856 26.024C77.2456 26.3787 77.9362 26.556 78.7576 26.556C79.7469 26.556 80.5309 26.2667 81.1096 25.688C81.7069 25.128 82.0056 24.2227 82.0056 22.972V20.76C81.5389 21.488 80.8949 22.0853 80.0736 22.552C79.2522 23 78.2909 23.224 77.1896 23.224C75.9016 23.224 74.7349 22.8973 73.6896 22.244C72.6442 21.572 71.8136 20.6293 71.1976 19.416C70.6002 18.184 70.3016 16.7653 70.3016 15.16C70.3016 13.5547 70.6002 12.1453 71.1976 10.932C71.8136 9.71867 72.6442 8.78533 73.6896 8.132C74.7349 7.47867 75.9016 7.152 77.1896 7.152ZM82.0056 15.188C82.0056 13.9933 81.6696 13.0507 80.9976 12.36C80.3442 11.6693 79.5416 11.324 78.5896 11.324C77.6376 11.324 76.8256 11.6693 76.1536 12.36C75.5002 13.032 75.1736 13.9653 75.1736 15.16C75.1736 16.3547 75.5002 17.3067 76.1536 18.016C76.8256 18.7067 77.6376 19.052 78.5896 19.052C79.5416 19.052 80.3442 18.7067 80.9976 18.016C81.6696 17.3253 82.0056 16.3827 82.0056 15.188Z"
                fill="#484848"
              />
            </svg>
          </Navbar.Brand>
            </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              
            >
             <Link className='text-decoration-none' to='/companies'> <Nav.Link href="#action2" className='ms-5 text-dark no-bold'>Companies</Nav.Link></Link>
              <Link className='text-decoration-none' to='/blog'><Nav.Link href="#action1" className='ms-5 text-dark no-bold'>Blog</Nav.Link></Link>
                <Link className='text-decoration-none' to='/search'><Nav.Link href="#action1" className='ms-5 text-dark no-bold'>Search</Nav.Link></Link>
                <Link className='text-decoration-none' to='/contacts'> <Nav.Link href="#action2" className='ms-5 text-dark no-bold'>Contact us</Nav.Link></Link>
            </Nav>
            <Nav className="ml-auto mob-flex">
              <Button className='btn-login'>Login</Button>
              <NavDropdown title="Eng" id="navbarScrollingDropdown" className='dropdown-lang text-dark no-bold ms-3'>
                <NavDropdown.Item href="#action3">Eng</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderContainer;
