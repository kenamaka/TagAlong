import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Content from './Content'
import Blog from './views/Blog'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <Nav/>
      <Hero/>
      <Content />
      <Blog/>
      <Footer />
    </>
  )
}

export default Home