import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CourseItem from './CourseItem'
import { clearCard } from '../control/cardSlice'

const CourseList = () => {
  const dispatch = useDispatch();
  const {cardItems, quantity, total} = useSelector((store) => store.card)
  return (
    <>
      {
      quantity < 1 ?(
        <section className='card'>
          <header>
            <h2>Sepetim</h2>
            <h4>Bomboş</h4>
          </header>
        </section>
      ):(
        <section className='card'>
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cardItems.map(item => {
              return <CourseItem key={item.id} {...item} />
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>Toplam Tutar <span>{total} TL</span></h4>
            </div>
            <button className='clearBtn' onClick={() => dispatch(clearCard())}>Clear</button>
          </footer>
        </section>
      )
    }
    </>
  )
}

export default CourseList