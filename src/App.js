// import logo from './logo.svg';
import './App.css';
import './style/Global.css'
import StanImage from './Images/stan.jpg'
import BuildingImage from './Images/first-div.jpg'
import PowerP from './Images/powerp.png'
import Excel from './Images/excel.png'
import Word from './Images/word.png'
import SQLs from './Images/sql.png'
import Java from './Images/java.png'
import Python from './Images/pyth.png'
import VisualB from './Images/vb.png'
import C from './Images/c#.png'
import Research from './Images/research.png'
import HTMLs from './Images/html.png'
import WhatsAPP from './Images/whatsapp.png'
import Twitter from './Images/twitter.png'
import Instagram from './Images/inster.png'
import FaceBook from './Images/facebook.png'
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { useInView } from 'react-intersection-observer';




function App() {


  // Contact page Transition
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [contactRef, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });

  useEffect(() => {
    // Set the visibility to trigger the fade-in effect when in view
    if (inView) {
      setIsContactVisible(true);
    }
  }, [inView]);


  // contact-page button
  const [isContactVisibleButton, setIsContactVisibleButton] = useState(false);


  const handleContactButtonClick = () => {
    setIsContactVisibleButton(!isContactVisibleButton);
  };
  


//  Fonts
  const contactSectionStyle = {
    fontFamily: 'Algerian, sans-serif',
    // Add other styles as needed
  };



  // Experience Cards
  const [cards, setCards] = useState([

    {
      id: 1,
      title: 'Agriculture Seminar Management(1-day event)',
      subtitle: 'Ncabande Investment Group - 2019',
      details: [
        'Program Director',
        'Marketing material and campaign creation',
      ],
      showDetails: false,
    },
    {
      id: 2,
      title: 'Project Manager job shadowing',
      subtitle: 'eThekwini Municipality Department of Information Technology - 2016',
      details: ['N/A'],
      showDetails: false,
    },
    {
      id: 3,
      title: 'Introduction to Computing Tutor',
      subtitle: 'University of Zululand - 2023',
      details: [
        'Lesson planning for computer literacy lessons',
        'Compiling understandable presentations',
        'Simplifying complex computing concepts for effective dissemination',
        'Granulation of programming concepts',
        'Creating of learning material for basics to computer literacy',
        'Collaboration with other tutors for lesson preparation and conducting',
      ],
      showDetails: false,
    },
    // Add more cards as needed
  ]);

  const handleButtonClick = (cardId) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId
          ? { ...card, showDetails: !card.showDetails }
          : card
      )
    );
  };



  return (
    <div className="App">

    {/**/}
    {/**/}




      <header className="App-header">

      <div className="stan-image mb-5" id='home'>
        <img className="background-image" src={BuildingImage} alt="Stan" />
        <div className="overlay-text">
          <h1>Xolo Kgotso Cornelius Sibaya</h1>
        </div>
      </div>


      {/* About */}
      <div className='row' id='about'>
      <div className='col-lg-6 p-5'>
        <img src={StanImage} alt="Description of the image" className="about-image" style={{ height: 'auto', width: '100%', borderRadius:'8px' }} />
      </div>
      <div className='col-lg-6 p-5'>
        <div className='position-relative'>
          <h1 style={{ fontSize: '5.5em', color: '#696969', fontWeight: 'bold' }}>ABOUT</h1>
          
        </div>
        <p>I am a final-year BCom Management Information Systems student at the University of Zululand who believes in making lasting,
          measurable change even in the face of setbacks and obstacles. The core tenets of learning and growing within my life philosophy
          are connecting, organising and problem-solving. I enjoy expanding the limits of my capabilities through collaboration and am
          always happy to have my skillset and knowledge leveraged by those who need it.</p>
      </div>
    </div>
    

    {/* Education */}
      <div className='mt-5 mb-5' id='education'>
        {/* Additional content */}
        <h3 style={{ fontSize: '3em', color: '#696969', fontWeight: 'bold' }} className='mt-5 mb-5'>EDUCATION</h3>

            <div>
              <div className='row'>
                <div className='col-sm-4 col-lg-4'>
                  <h4>2013-2017</h4>
                </div>  

                <div className='col-sm-4 col-lg-4'>
                <h4>National Senior Certificate</h4>
                </div>  
                
                <div className='col-sm-4 col-lg-4'>
                  <h4>Grantleigh College</h4>
                </div>  
              </div>  
              <hr/>

              <div>
              <div className='row'>
                <div className='col-sm-4 col-lg-4'>
                  <h4>2018-2021</h4>
                </div>  

                <div className='col-sm-4 col-lg-4'>
                <h4>BCom Information Systems</h4>
                </div>  
                
                <div className='col-sm-4 col-lg-4'>
                  <h4>University of Pretoria</h4>
                </div>  
              </div>  
              <hr/>

              <div>
              <div className='row'>
                <div className='col-sm-4 col-lg-4'>
                  <h4>2022-2023</h4>
                </div>  

                <div className='col-sm-4 col-lg-4'>
                <h4>BCom Management Information Systems</h4>
                </div>  
                
                <div className='col-sm-4 col-lg-4'>
                  <h4>University of Zululand</h4>
                </div>  
              </div>  
              <hr/>

            </div>
          </div>

        </div>
      </div>


      


      {/* SKILLS*/}
      <div>
        <h3 style={{ fontSize: '3em', color: '#696969', fontWeight: 'bold' }} className='mt-5 mb-5'>Skills</h3>


        <div className="skills-container">
        {/* Slide Animation */}
          <div className="slide-container">
            <img src={PowerP} alt="PowerPoint" />
            <img src={Excel} alt="Excel" />
            <img src={Word} alt="Word" />
            <img src={SQLs} alt="SQL" />
            <img src={Java} alt="Java" />
            <img src={Python} alt="Python" />
            <img src={VisualB} alt="Visual Basic" />
            <img src={C} alt="C#" />
            <img src={Research} alt="Research" />
            <img src={HTMLs} alt="HTML" />
          </div>
        </div>


      </div>


      {/* WORK EXPERIENCE */}
      <div className="mt-5 mb-5" id='work'>
        <h3 style={{ fontSize: '3em', color: '#696969', fontWeight: 'bold' }} className='mt-5 mb-5'>WORK EXPERIENCE</h3>

        <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-sm-12 col-lg-6 mt-5 mb-5">
            <Card className="custom-card" style={{ backgroundColor:'#98AFC7'}}>
              <Card.Body>
                <Card.Title>
                  <h1 style={{ fontSize: '2em', color: '#F5FEFD', fontWeight: 'bold' }} >{card.title}</h1>
                </Card.Title>
                <Card.Text>{card.subtitle}</Card.Text>
                <Button variant="primary" onClick={() => handleButtonClick(card.id)}>
                  {card.showDetails ? 'Hide Details' : 'Show Details'}
                </Button>
                {card.showDetails && (
                  <div>
                    <h5>Responsibilities:</h5>
                    <ul>
                      {card.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>




      {/* Contact Section */}
      <div className='mt-5 mb-5 contact-message' id='contact'>
        <h3 style={{ fontSize: '3em', color: '#696969', fontWeight: 'bold' }} className='mt-5 mb-5'>CONTACT</h3>   
        
        <div className={`contact-section ${isContactVisible ? 'fade-in active' : ''}`} ref={contactRef}>
         <h1 style={{ fontSize: '2.4em', color: 'white', fontWeight: 'bold' }}>Let's Create Something Meaningful Together</h1>

         <button className='contact-message-button' onClick={handleContactButtonClick}>Contact</button>
        </div>


        {isContactVisibleButton && (
        <div className=' row contact-info mt-5 mb-5 justify-content-center align-items-center'>

          <div className='col-sm-3 col-lg-3'>
            <img src={FaceBook} alt="HTML" style={{width:'50px', height:'auto'}} className='contact-icon mb-5'/>
          </div>          

          <div className='col-sm-3 col-lg-3'>
            <img src={Twitter} alt="HTML" style={{width:'50px', height:'auto'}} className='contact-icon mb-5'/>
          </div>   

          <div className='col-sm-3 col-lg-3'>
            <img src={Instagram} alt="HTML" style={{width:'50px', height:'auto'}} className='contact-icon mb-5'/>
          </div>   

          <div className='col-sm-3 col-lg-3'>
            <img src={WhatsAPP} alt="HTML" style={{width:'50px', height:'auto'}} className='contact-icon mb-5'/>
          </div>  
          
          <div className='col-sm-12 col-lg-12 mt-5 mb-5'>
            <h3>Stan@email.com</h3>
          </div>  
        </div>
        )}


      </div>
    


      </div>
      </header>
    </div>




    
  );
}

export default App;
