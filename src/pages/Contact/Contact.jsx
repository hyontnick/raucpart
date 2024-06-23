import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../utils/images/London-location.jpg';
import ManchesterLocationImg from '../../utils/images/Manchester-location.jpg';
import LiverpoolLocationImg from '../../utils/images/Liverpool-location.jpg';

function Contact() {
  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Contact</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae pariatur qui quos aspernatur, voluptatem autem possimus esse quo consequatur omnis, soluta consectetur ullam ipsum cum!</p>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form'>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control placeholder='Olivier' />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Prenom</Form.Label>
                        <Form.Control placeholder='Nana' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='nana@gmail.com' />
                    <Form.Text className='text-muted'>
                        Nous ne partageons votre mail avec personne.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder='14 Rue mokolo Yde' />
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Localisation</Form.Label>
                        <Form.Select defaultValue="Yde">
                            <option>Yaounde</option>
                            <option>Douala</option>
                            <option>Buea</option>
                        </Form.Select>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Address postal</Form.Label>
                        <Form.Control placeholder='2365' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Votre Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="danger btn-lg" type='submit'>Envoyer</Button>
            </Form>
        </div>

        <div className='bg-dark text-light p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'>Contact</h2>
                <div className='row g-4'>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={LondonLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Yaounde</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={ManchesterLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Douala</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={LiverpoolLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Buea</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;