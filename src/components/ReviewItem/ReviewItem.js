import React from 'react';
  import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product, handleReviewItem}) => {
  const { name, price, quantity, img, id } = product;

  // console.log(product);
  return (
    <div className='style-reviewItem'>
    <div>
        <img src={img} alt="" />
    </div>
    <div className='review-details-container'>
        <div className='review-details'>
            <p>{name}</p>
            <p><small>Price: ${price}</small></p>
            <p><small>Quantity: {quantity}</small></p>
        </div>
        <div className='delete-container'>
            <button  onClick={() =>  handleReviewItem (id)} className='delete-btn'>
                 <FontAwesomeIcon    ></FontAwesomeIcon>
            </button>
        </div>
    </div>
</div>
  );
};

export default ReviewItem;