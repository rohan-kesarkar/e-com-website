import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const baseURL="https://fakestoreapi.com/products"

const ProductDetails = () => {
  const {productId}= useParams()

   
    

  const [post, setPost] = React.useState([]);

  useEffect(() => {
    axios.get(baseURL+'/'+productId).then((response) => {
      setPost(response.data);
    });
  },[productId]);


  


  return (
    <>
    {/* <h1>title : {title}</h1> */}
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={post?.image} />
      <Card.Body>
        <Card.Title>{post?.title}</Card.Title>
        <Card.Text>
        {post.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: ${post?.price}</ListGroup.Item>
        <ListGroup.Item>Category: {post?.category}</ListGroup.Item>
        <ListGroup.Item>Rating: {post?.rating?.rate}</ListGroup.Item>
        <ListGroup.Item>Only {post?.rating?.count} pieces left</ListGroup.Item>
      </ListGroup>
     
    </Card>
 
    </>
  )
}
export default ProductDetails
