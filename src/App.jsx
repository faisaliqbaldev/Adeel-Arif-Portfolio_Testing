import { Children, useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Research from './pages/Research'
import Teachings from './pages/Teachings'

const Layout = ({children})=>{
  return(
    <div className='flex flex-col'>
      <Navbar></Navbar>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
} 
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/teachings" element={<Teachings />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
