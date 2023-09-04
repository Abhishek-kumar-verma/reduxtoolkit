import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
const Cart = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector( state => state.cart);
    const removeFromCart = ( id) =>{
        // dispatch an delete action
        dispatch(remove(id));
    }
    const Cards = cartProducts.map((product) => (
        <div className="col-md-3" style={{ marginBottom:"10px"}}>
          <Card className="h-100" key={product.id}>
            <div className="text-center">
              <Card.Img variant="top" src={product.image} style={{ height:"130px" , width: "100px"}}/>
            </div>
            
            <Card.Body>
              <Card.Title>{product.title} </Card.Title>
              <Card.Text>
               INR : {product.price}
              </Card.Text>
              <Card.Text>Quantity : 0</Card.Text>
              
            </Card.Body>
            <Card.Footer style={{ backgroundColor : "white"}}>
              <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove From Cart</Button>
            </Card.Footer>
          </Card>
        </div>
      ));
  return (
    <div className='row'>
     {Cards}
    </div>
  )
}

export default Cart