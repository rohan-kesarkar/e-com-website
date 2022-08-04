import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ProductDetails = () => {
    const prodId = useParams()

    const [item, setItem] = useState([])
    
    const getProduct = async ()=>{
        const responce = await fetch("https://fakestoreapi.com/products")
        setItem(await responce.json())
    }
   useEffect(()=>{
    getProduct()
   },[])
    console.log("This is ", item)

    const currentProduct = item.find(record=>record.id === parseInt(prodId.id))


  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={currentProduct.image} />
      <Card.Body>
        <Card.Title>{currentProduct.title}</Card.Title>
        <Card.Text>
        {currentProduct.deccription}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </>
  )
}
export default ProductDetails
