import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export function Contact() {
  return (
    <>
      <h2 className='text-center mt-4'>Cuentanos, ¿en qué te podemos ayudar?</h2>

    <div className='container justify-content-center row m-auto'>

        <Form className='text-center col-5'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='mt-4 text-center'>Correo:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='text-center'>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="danger">Enviar</Button>{' '}
        </Form>
        
    </div>
    </>
  );
}