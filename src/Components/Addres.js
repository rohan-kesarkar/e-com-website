import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Addres = () => {

    const initialValues = {name:"", contact:"", address:"", address2:"", city:"", zip:""}
    const [formValues, setFormvalues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e)=>{
       const {name, value} = e.target
       setFormvalues({...formValues, [name]:value})

    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        setErrors(validate(formValues))
        setIsSubmit(true)
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmit){
            console.log(errors)
    }},[errors])
        

    const validate = (values)=>{
        const err = {};
        if(!values.name){
            err.name = "Name is required"
        }else if(!values.contact){
            err.contact = "Contact is required"
        }

    }

  return (
    <Form>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={formValues.name} placeholder="Enter your name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Contact No.</Form.Label>
        <Form.Control type="text" name="contact" value={formValues.contact} placeholder="contact number" />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" name="address" value={formValues.address} controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" />
    </Form.Group>

    <Form.Group className="mb-3" name="address2" value={formValues.address2} controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} name="city" value={formValues.city} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} name="state" value={formValues.state} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} name="zip" value={formValues.zip} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Save for later" />
    </Form.Group>

    <Button variant="primary" type="submit" onClick={handleSubmit}>
     Checkout
    </Button>
  </Form>
  )
}

export default Addres