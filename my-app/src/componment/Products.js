import React ,{useState} from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
const productData = [
    {
      id: 1,
      name: 'NIKE Liteforce Blue Sneakers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
      status: 'Available'
    
    },
    {
      id: 2,
      name: 'Stylised Flip Flops and Slippers',
      description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
      status: 'Out of Stock'
    
    },
    {
      id: 3,
      name: 'ADIDAS Adispree Running Shoes',
      description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
      status: 'Available'
    },
    {
      id: 4,
      name: 'ADIDAS Mid Sneakers',
      description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
      status: 'Out of Stock'
    },
    
    ];
    const Product = ({match}) => {
      const [prod, setProd] = useState({}) 
   
       return (
           <BrowserRouter>
           <div >
               <div className="product mt-5 ">
                   <h2 className="mb-5 bg-light">product</h2>
               <div >
                {productData.map((e)=>
                 <>
                {/* {setProd(e)} */}
                <Link onClick={()=>{setProd(e)}} to={`${match.url}/${e.id}`}>{e.name}<br></br> </Link> 
              
                </>)}
               </div> 
   
               </div>
               {console.log(prod)}     
                <Route path={`${match.path}/:id`} render= {() =>( <div className="mt-5"> <p className="font-weight-bold mb-5 ml-3" >{prod.name}</p>{prod.description}<hr></hr><p className="mt-5">{prod.status}</p></div>)}/>  
               
         {/*  <Route path={`${match.path}/:id`} render= {({match}) =>( <div>  {}hiho</div>)}/> */}
   {/* <div className="mt-5"><Route path="/Category" component={Category}></Route></div>  */}    
   
        </div>
           </BrowserRouter>
       )
   }
   
   export default Product