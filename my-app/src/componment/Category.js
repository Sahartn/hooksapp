import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'


const Category = ({match}) => {
    return (
        <div className="mt-3">
            <h2 >Category</h2>
           < BrowserRouter>
              <ul className=" mt-4 nav navbar justify-content-around bg-light ">
    <li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
    <li><Link to={`${match.url}/boots`}>Boots</Link></li>
    <li><Link to={`${match.url}/footwear`}>Footwear</Link></li>

  </ul>
  <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
  </BrowserRouter>
  </div>
        
    )
}

export default Category