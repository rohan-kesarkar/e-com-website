import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'



const LoginForm = () => {

 const navigate = useNavigate()
   
    const initialValues = {email:"", password:""}
    const [formValues, setFormValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

const handleChange = (e)=>{
    const {name, value} = e.target
    setFormValues({ ...formValues, [name]:value })

}

const handleSubmit =(e)=>{
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
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!values.email){
        err.email = "Email is required"
    }else if(!regex.test(values.email)){
        err.email = "This is not valid"
    }else if(!values.password){
        err.password = "Password is required"
    }else if(values.password.length < 4){
        err.password = "Password should be more than 4 character"
    }else if(values.password.length > 10){
        err.password = "Password should be less than 10 character"
     }else{
         navigate('/product')
    }
    return err

}


  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name="email" placeholder="Enter email" value={formValues.email} onChange={handleChange} />
      <p style={{color:"red"}}>{errors.email}</p>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password"  name="password" placeholder="Password" value={formValues.password}  onChange={handleChange}/>
    </Form.Group>
    <p style={{color:"red"}}>{errors.password}</p>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default LoginForm