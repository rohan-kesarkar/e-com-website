import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/action';


const HomePage = () => {

    const navigate = useNavigate()
    const [item, setItem] = useState([])
    const dispatch = useDispatch()
    
    const getProduct = async ()=>{
        const responce = await fetch("https://fakestoreapi.com/products")
        setItem(await responce.json())
    }
   useEffect(()=>{
    getProduct()
   },[])
   console.log("This side is homepage", item)
  return (
    <>
     <Navbar item={item} setItem={setItem}/>
    <Row xs={1} md={3} className="g-4">
      {item.map((elem) => (
        <Col key={elem.id}>
          <Card>
            <Card.Img variant="top" src={elem.image} style={{height:"200px", width:"200px"}} />
            <Card.Body>
              <Card.Title style={{width:"300px"}}>{elem.title}</Card.Title>
              <Card.Text>
               Price: ${elem.price}
              </Card.Text>
              <Card.Text>
               Rating: {elem.rating.rate}
              </Card.Text>
              <Button variant="light"  onClick={()=>navigate(`/product/${elem.id}`)}>More Details</Button>
              <Button variant="primary" style={{float:"right"}} onClick={()=>dispatch(addToCart(elem))} >Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  
 </>
  )
}
export default HomePage