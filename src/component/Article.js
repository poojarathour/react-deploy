import React from 'react'


function Article(props) {
    return (
       
    <article>
    {/* <div class="card">
    <img src="https://3.bp.blogspot.com/-JV_Dd_xGCus/WcWMHoLrwcI/AAAAAAAACXE/L1y8EJggSKoZ5rrSC_e9IwXdW2Kl0na_QCLcBGAs/s1600/Drawing%2Bof%2BSpaceX%2BITS%2Bspaceship%2Blanding%2Bon%2BMars%2Bby%2BAbby%2BGarrett.jpg" alt="spax-one" class="card__image" />
    <div class="card_info">
      <h5>Thaicom 6 #13</h5>
      <p>Misson Ids: 9D1B7E0</p>
      <p>Launch Year: 2014 </p>
      <p>Successful Launch: true</p>
      <p>Successful Landing: Na </p>
    </div>
    </div> */}
    <div className="card">
    <img src={props.imgsrc} 
                   alt ="spax-one" 
                   className ="card__image"    
                   />
    <div className="card_info">
      <h5>{props.titel}</h5>
      <p>{props.id}</p>
      <p>{props.year}</p> 
      <p>{props.lounch}</p> 
      <p>{props.landg}</p>
    </div>
    </div>
    </article>
       
    )
}

export default Article
