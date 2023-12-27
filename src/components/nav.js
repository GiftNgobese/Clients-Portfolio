

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import { Link, animateScroll as scroll } from 'react-scroll';

// const MyNavbar = () => {
//   const resumePdfLink = 'https://drive.google.com/file/d/1C50XM-qbfwAXYUAKQUTIxU5N9GK6jQiz/view?usp=drive_link';

//   return (
//     <Navbar expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">STAN</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarNav" />
//         <Navbar.Collapse id="navbarNav">
//           <Nav className="ms-auto">
//             <Nav.Link>
//               <Link
//                 activeClass="active"
//                 to="home"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Home
//               </Link>
//             </Nav.Link>
//             <Nav.Link>
//               <Link
//                 activeClass="active"
//                 to="about"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 About
//               </Link>
//             </Nav.Link>
//             <Nav.Link>
//               <Link
//                 activeClass="active"
//                 to="education"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Education
//               </Link>
//             </Nav.Link>
//             <Nav.Link>
//               <Link
//                 activeClass="active"
//                 to="work"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Work
//               </Link>
//             </Nav.Link>
//             <Nav.Link>
//               <Link
//                 activeClass="active"
//                 to="contact"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Contact
//               </Link>
//             </Nav.Link>
//             <Nav.Link>
//               <a
//                 href={resumePdfLink}
//                 target="_blank" // Opens the link in a new tab/window
//                 rel="noopener noreferrer" // Security best practice for external links
//               >
//                 Resume
//               </a>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default MyNavbar;



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';

const MyNavbar = () => {
  const resumePdfLink = 'https://drive.google.com/file/d/1C50XM-qbfwAXYUAKQUTIxU5N9GK6jQiz/view?usp=drive_link';

  const openResumeInNewTab = () => {
    window.open(resumePdfLink, '_blank');
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">STAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Education
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Work
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <a onClick={openResumeInNewTab} style={{ cursor: 'pointer' }}>
                Resume
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
