import React from 'react'
import { useDispatch } from 'react-redux'
import {BsChevronUp, BsChevronDown} from 'react-icons/bs'
import { decrease, increase, removeCard } from '../control/cardSlice'


const CourseItem = ({id,title,price,img,quantity}) => {
  const dispatch = useDispatch();

  return (
    <div className='flex'>
      <img src={img} alt="course-img" />
      <div className='text-right'>
        <h4>{title}</h4>
        <h4>{price} TL</h4>
        <div>
          <button className='cardQtyBtn' onClick={() => dispatch(increase(id))}>
            <BsChevronUp  />
          </button>
          <p className='cardQty'>
            {quantity}
          </p>
          <button className='cardQtyBtn' onClick={() => dispatch(decrease(id))}>
            <BsChevronDown  />
          </button>
        </div>
        <button className='cardDeleteBtn' onClick={() => dispatch(removeCard(id))}>Delete</button>
      </div>
    </div>
  )
}

export default CourseItem