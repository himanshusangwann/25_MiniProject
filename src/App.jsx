import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './components'
import Pagination from './Pagination/Pagination'
import PaginationTest from './Pagination/PaginationTest'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Index/>
  <PaginationTest/>
    </>
  )
}

export default App
