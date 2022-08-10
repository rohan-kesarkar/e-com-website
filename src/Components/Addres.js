import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const Addres = () => {
  const navigate = useNavigate()

    const initialValues = {fname:"", contact:"", address:"", address2:"", city:"",state:"", zip:""}
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
    }},[errors,isSubmit])
        

    const validate = (values)=>{
        const err = {};
        if(!values.fname){
            err.fname = "Name is required"
        }else if(!values.contact){
            err.contact = "Contact is required"
        }else if(!values.address){
          err.address = "Address is required"
        }else if(!values.address2){
          err.address2 = "Address2 is required"
        }else if(!values.city){
          err.city="City is rquired"
        }else if(!values.zip){
          err.zip = "Zip is required"
        }else if(!values.state){
          err.state = "state is required"
        }else{
          navigate('/cart/address/payment')
        }
       return err
    }
    console.log("This is address", formValues)

  return (
    <Form  onSubmit={handleSubmit}>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="fname" value={formValues.fname} placeholder="Enter your name" onChange={handleChange} />
        <p style={{color:"red"}}>{errors.fname}</p>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Contact No.</Form.Label>
        <Form.Control type="text" name="contact" value={formValues.contact} placeholder="contact number" onChange={handleChange}/>
        <p style={{color:"red"}}>{errors.contact}</p>
      </Form.Group>
    </Row>

    <Form.Group className="mb-3"  controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" name="address" value={formValues.address} onChange={handleChange}/>
      <p style={{color:"red"}}>{errors.address}</p>
    </Form.Group>

    <Form.Group className="mb-3"  controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" name="address2" value={formValues.address2} onChange={handleChange}/>
      <p style={{color:"red"}}>{errors.address2}</p>
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col}  controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control name="city" value={formValues.city}  onChange={handleChange}/>
        <p style={{color:"red"}}>{errors.city}</p>
      </Form.Group>

      <Form.Group as={Col}  controlId="formGridState" >
        <Form.Label>State</Form.Label>
        <Form.Control name="state" value={formValues.state} onChange={handleChange}/>
        <p style={{color:"red"}}>{errors.state}</p>
      </Form.Group>

      <Form.Group as={Col}  controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control name="zip" value={formValues.zip} onChange={handleChange}/>
        <p style={{color:"red"}}>{errors.zip}</p>
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Save for later" />
    </Form.Group>

    <Button variant="primary" type="submit">
     Checkout
    </Button>
  </Form>
  )
}

export default Addres