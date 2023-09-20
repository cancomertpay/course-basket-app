import Navbar from "./components/Navbar"
import './app.css'
import CourseList from "./components/courseList"
import { useEffect } from "react"
import { calculateTotal } from "./control/cardSlice"
import { useDispatch, useSelector } from "react-redux"

function App() {
  // redux
  const {cardItems} = useSelector(store => store.card)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotal());
  },[cardItems])
  
  return (
    <>
      <Navbar />
      <CourseList />
    </>
  )
}

export default App
