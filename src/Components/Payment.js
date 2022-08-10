import React from 'react'
import { useSelector } from "react-redux";
import { BsCheckCircleFill } from "react-icons/bs";
import Table from 'react-bootstrap/Table';

const Payment = () => {
  const {address} = useSelector((state) => state.shop)
  console.log(address)
  return (
    
    <div className='App'  style={{paddingTop:'250px'}}>
        <h1><header>Thanks for shopping with us 😊😊😊</header></h1>
      
        
      <h1 style = {{fontSize : "70px"}}>Payment Done</h1>  
<h1 ><BsCheckCircleFill  style={{color:"green", height:"400px", width:"400px"}}/></h1>
<h2>We will deliver your order at:</h2>
      {
        address.map((elem)=>{
          return(
             <Table striped bordered hover>
            <thead>
              
            </thead>
            <tbody>
              <tr>
               
                <td>Name</td>
                <td>{elem.address.fname}</td>
            
              </tr>
              <tr>
                
                <td>Contact</td>
                <td>{elem.address.contact}</td>
               
              </tr>
              <tr>
              
                <td >Address</td>
                <td>{elem.address.address}</td>
              </tr>
              <tr>
               
                <td >Address2</td>
                <td>{elem.address.address2}</td>
              </tr>
              <tr>
                
                <td >City</td>
                <td>{elem.address.city}</td>
              </tr>
              <tr>
              
                <td >State</td>
                <td>{elem.address.state}</td>
              </tr>
              <tr>
             
                <td >Zip</td>
                <td>{elem.address.zip}</td>
              </tr>
            </tbody>
          </Table>
          )
        })
      }
      
    </div>
  )
}

export default Payment