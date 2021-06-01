import React from 'react'
import Header from './Header'
import Aside from './Aside'
import Article from './Article'
import SpacData from './SpacData'


const Card = () => {
    return (
    <>
    <div class="container">
    <Header />
    <Aside />
    <div id="main" class="grid">
     {SpacData.map((val) => {
     return (
     <Article 
       imgsrc = {val.imgsrc}
       titel = {val.titel}
        id = {val.id}
        year = {val.year}
        lounch = {val.lounch}
        landg = {val.landg}
     /> 
      );
      })}
    </div>
    </div>
  </>
    )
}

export default Card
