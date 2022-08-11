import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { removeFromCart } from "../actions/action";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useSelector((state) => state.shop);

useEffect(()=>{
  localStorage.setItem('list', JSON.stringify(list))
},[list])

  // console.log("this is data",list)
  var Total = 0;
  // const priceArr = []
  list.map((elem) => {
    return (Total += elem.data.price);
  });
  // const sum = priceArr.reduce((accum, curVal)=>{
  //     return accum+ curVal
  // })

  return (
    <>
      <header>
        {" "}
        <h1 style={{ color: "green" }}>Enjoy your shopping...</h1>{" "}
      </header>
      <br />
      <Row xs={1} md={3} className="g-4">
        {list.map((elem) => (
          <Col key={elem.data.id}>
            <Card>
              <Card.Img
                variant="top"
                src={elem.data.image}
                style={{ height: "200px", width: "200px" }}
              />
              <Card.Body>
                <Card.Title style={{ width: "300px" }}>
                  {elem.data.title}
                </Card.Title>
                <Card.Text>Price: ${elem.data.price}</Card.Text>
                <Button
                  variant="secondary"
                  style={{ float: "right" }}
                  onClick={() => dispatch(removeFromCart(elem.data.id))}
                >
                  Remove From Cart
                </Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <footer>
        <br />
        <div>
        <h2>Total Price : $ {Total} </h2>
        </div>
        <Button
          variant="success"
          style={{ float: "right" }}
          onClick={() => navigate("/cart/address")}
        >
          Proceed To Buy
        </Button>{" "}
      </footer>
    </>
  );
};

export default Cart;
