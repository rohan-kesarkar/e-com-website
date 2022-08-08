import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { removeFromCart } from '../actions/action';

const Cart = () => {
  const dispatch = useDispatch()
    const {list} = useSelector((state)=>state.shop)

    // console.log("this is data",list)
    const priceArr = []
   list.map((elem)=>{
            priceArr.push(elem.data.price)
    })
    const sum = priceArr.reduce((accum, curVal)=>{
        return accum+ curVal
    })

  return (
    <>
    <header> <h1 style={{color:"green"}} >Enjoy your shopping...</h1>  </header>
    <br/>
    <Row xs={1} md={3} className="g-4">
      {list.map((elem) => (
        <Col key={elem.data.id}>
          <Card>
            <Card.Img variant="top" src={elem.data.image} style={{height:"200px", width:"200px"}}  />
            <Card.Body>
              <Card.Title style={{width:"300px"}}>{elem.data.title}</Card.Title>
              <Card.Text>
                Price: ${elem.data.price}
              </Card.Text>
              <Button variant="secondary" style={{float:"right"}} onClick={()=>dispatch(removeFromCart(elem.id))} >Remove From Cart</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <footer>
        <br/>
       
        <h2>Total Price : ${sum}</h2>
       

        <Button variant="success" style={{float:"right"}} >Proceed To Buy</Button>{' '}
        
        </footer>
    </>
  )
}

export default Cart