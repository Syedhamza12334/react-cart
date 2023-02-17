import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
//import toast from "react-hot-toast";
const img1 ="https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 ="https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";


const Home = () => {
  const productList =[
    {
    name:"Mac Book",
    price:1200,
    imgSrc:img1,
    id:"fgyhyhuuuuuuu"
    },

    {
      name:"Mac shoes",
      price:1700,
      imgSrc:img2,
      id:"fgyhyhuukkkkuu"
      },
  ];

  const dispatch = useDispatch()
  const AddtocartHandler =(options) =>{
    dispatch({type:"addtocart",payload:options});
    dispatch({type:"calculateprice"});
    toast.success("added to cart");
  };
  return (
    <div className="home">
      {productList.map((i) =>
      (
        <ProductCard 
        key={i.id}
        imgSrc={i.imgSrc}
        name={i.name}
        price={i.price}
        id={i.id}
        handler={AddtocartHandler}       
        />
      ))}
      
    </div>
  )
};

const ProductCard =({name,id,price,handler,imgSrc})=>(
<div className="ProductCard">
  <img src={imgSrc} alt={name}/>
 <p>{name}</p>
 <h4>
  ${price}</h4>
 <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to cart</button>
</div>

);

export default Home