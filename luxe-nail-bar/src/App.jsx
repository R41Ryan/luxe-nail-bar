import { useState } from 'react'
import HomePage from './HomePage';

function App() {
  const [page, setPage] = useState('index');

  return (
    <HomePage />
  )
}

export default App
