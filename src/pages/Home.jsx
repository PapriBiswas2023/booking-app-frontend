import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header/Header'
import Featured from '../components/featured/Featured'
import PropertyList from '../components/propertyList/PropertyList'
const Home = () => {
  return (
    <div><Navbar />
      <Header />
      <Featured/>
      <PropertyList type={'rt'}/>
    </div>
  )
}

export default Home