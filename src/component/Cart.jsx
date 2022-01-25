import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {delItem} from '../redux/action/index'

const Cart = () => {
  const state = useSelector((state) => state.addItem)
  const dispatch = useDispatch()

  const handleClose = (product) => {
    dispatch(delItem(product))
  }

  const cartProducts = (cartProducts) => {
  return (
    <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
      <div className="container py-4">
        <button onClick={()=>handleClose(cartProduct)} className="btn-close float-end" aria-label="Close"></button>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={product.image} alt={product.title} height="200px" width="180px" />
          </div>
          <div className="col-md-4">
            <h3>{cartItem.title}</h3>
            <p className="lead fw-bold">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProducts