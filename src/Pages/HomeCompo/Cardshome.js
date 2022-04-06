import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import './Cardshome.css'
import s1 from '../../Images/ServicesHome/s1.jpg'
import s2 from '../../Images/ServicesHome/s2.jpg'
import s4 from '../../Images/ServicesHome/s3.jpg'
import s3 from '../../Images/ServicesHome/s4.jpg'

const Cardshome = () => {
    return (
        <div>
            <div className="my-5 pt-5">
                <h1 className="text-danger">-Our best services-</h1>
                <p>Stay Healthy stay healthy.</p>
            </div>
          
            <CardGroup className="p-5">
               
            <Card className="mx-2 shadow-lg">
                <Card.Img variant="top" className="h-75 w-100" src={s1} />
                <Card.Body>
                <Card.Title className="fw-bold text-secondary">Full-Body Strength</Card.Title>
                <Card.Text>
                Strength training is an essential aspect of any fitness program for both men and women of all ages.
                        </Card.Text>
                        <h5 className="text-danger">Montly fee : 55$</h5>
                </Card.Body>
                <Card.Footer>
                <small className="text-dark">enroll: 1330 People</small>
                </Card.Footer>
            </Card>
            <Card className="mx-2 shadow-lg">
                <Card.Img variant="top" className="h-75 w-100" src={s2} />
                <Card.Body>
                <Card.Title className="fw-bold text-secondary">Personal Trainers</Card.Title>
                <Card.Text>
                Strength training is an essential aspect of any fitness program for both men and women of all ages.
                        </Card.Text>
                        <h5 className="text-danger">Montly fee : 75$</h5>
                </Card.Body>
                <Card.Footer>
                <small className="text-dark">enroll: 1330 People</small>
                </Card.Footer>
            </Card>
            <Card className="mx-2 shadow-lg">
                <Card.Img variant="top" className="h-75 w-100" src={s3} />
                <Card.Body>
                <Card.Title className="fw-bold text-secondary">State-of-the-Art</Card.Title>
                <Card.Text>
                Strength training is an essential aspect of any fitness program for both men and women of all ages.
                        </Card.Text>
                        <h5 className="text-danger">Montly fee : 85$</h5>
                </Card.Body>
                <Card.Footer>
                <small className="text-dark">enroll: 1330 People</small>
                </Card.Footer>
            </Card>
            <Card className="mx-2 shadow-lg">
                <Card.Img variant="top" className="h-75 w-100" src={s4} />
                <Card.Body>
                <Card.Title className="fw-bold text-secondary">Dynamo Fitness</Card.Title>
                <Card.Text>
                Strength training is an essential aspect of any fitness program for both men and women of all ages.
                        </Card.Text>
                        <h5 className="text-danger">Montly fee : 60$</h5>
                </Card.Body>
                <Card.Footer>
                <small className="text-dark">enroll: 1330 People</small>
                </Card.Footer>
            </Card>
            </CardGroup>
        
        </div>
    );
};

export default Cardshome;