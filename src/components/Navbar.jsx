import React from 'react'
import { GiBasket } from 'react-icons/gi'
import { useSelector } from 'react-redux'


const Navbar = () => {

  const {quantity} = useSelector((store) => store.card);

  console.log(useSelector((store) => store.card));

  return (
    <nav>
      <div className='navbar'>
        <h3>Courses</h3>
        <div className='navDiv'>
          <div>
            <p>
              {quantity}
            </p>
          </div>
          <GiBasket className='itemsIcon' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar