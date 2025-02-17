import React from 'react';
import { Container,Button } from 'react-bootstrap';
import './Aboutme.css';

const Aboutme = () => {
  return (
    <body className='nikhil'>
    <div className='index-20'>
      <Button variant="outline-warning">About me</Button>
      <Button variant="outline-primary">Skills</Button>
      <Button variant="outline-secondary">Projects</Button>
      <Button variant="outline-success">Contacts</Button>
      </div>
    <Container>
      <div className='index-20'>
      
      </div>
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br />
      <br />
      
      <br />
      <div className='index3'>
      <div className='index2'>
      <h3 className='index4'>My Name is Nikhil P</h3>
      <h5 className='index1'>"As a passionate full-stack web developer, I specialize in building dynamic, user-friendly websites and web applications.
       With a strong foundation in both front-end and back-end technologies, I work with HTML, CSS, JavaScript,
        and frameworks like React and Angular for seamless, interactive user interfaces.
        On the back end, I am proficient in working with Node.js,
         Express, and databases like MongoDB and SQL, ensuring data management is both secure and efficient.
          My experience extends to integrating APIs and optimizing web applications for performance and scalability.
        I am committed to delivering clean, maintainable code and creating web solutions that meet both user and business needs.
         Continuously learning and adapting to new technologies,
       I aim to provide innovative and practical solutions to every project I work on."</h5></div></div>
    </Container>
    </body>
  );
};

export default Aboutme;
