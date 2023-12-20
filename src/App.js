import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'
import '../src/assets/style/commonCSS/common-class.css'
import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = lazy(() => import('./shared/pages/home/home'))

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true,
    })
  }, [])
  return (
    <>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
        </>
      </Routes>
    </>
  )
}

export default App
