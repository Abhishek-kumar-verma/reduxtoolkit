import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from '../store/cartSlice';
import { getProducts } from "../store/productSlice";
import { StatusCode } from "../utils/StatusCode";
import { Alert } from "bootstrap";
const Products = () => {
    const dispatch = useDispatch();

    const {data : products , status} = useSelector( state => state.products);
    console.log(products);
    
  useEffect(() => {
    // api calling by redux by dispaatch an action ( calling thunk function )
    dispatch( getProducts());
    


    // normal api calling in react
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));
  }, []);
  
  const addToCart = ( product) =>{
    // dispatch an add action
    
    dispatch(add(product));

  }

//   Api calling stages
  if( status === StatusCode.Loading){
    return <p>Loading...</p>
  }
  if( status === StatusCode.Error){
    return <Alert key="danger" variant="danger">Something went wrong!!!</Alert>
  }

  const Cards = products.map((product) => (
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
          
        </Card.Body>
        <Card.Footer style={{ backgroundColor : "white"}}>
          <Button variant="primary" onClick={() => addToCart(product)}>Add to Card</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <h1>Products Dashboard</h1>
      <div className="row" style={{ margin : "10px"}}>
        {Cards}
      </div>
    </>
  );
};

export default Products;
