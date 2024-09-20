import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreaMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

    const [category,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreaMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
