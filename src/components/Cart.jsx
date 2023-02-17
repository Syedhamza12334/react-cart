import React from 'react';
import {AiFillDelete} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux"

const Cart = () => {
    const {cartitems,Subtotal,Shipping,tax,Total}= useSelector(state => state.cart);

    const dispatch = useDispatch();
    const increment=(id)=>{
        dispatch({
            type:"addtocart",
            payload:{id},
        });
        dispatch({type:"calculateprice"});

    }
    const decrement=(id)=>{
        dispatch({
            type:"decrement",
            payload:id,

    });
    dispatch({type:"calculateprice"});
};

    const deleteHandler=(id)=>{
        dispatch({
            type:"deletefromcart",
            payload:id,
    });
    dispatch({type:"calculateprice"});
};

  return (
    <div className="cart">
    <main>
{
    cartitems.length > 0 ?(
        cartitems.map((i)=>(
           <Cartitem 
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            qty={i.quantity}
            id={i.id}
            key={i.id}
            decrement={decrement}
            increment={increment}
           deleteHandler={deleteHandler}

            />
        ))
    ): (
     <h1>
        NO item yet
    </h1>
)}
</main>
    <aside>
        <h2>Subtotal: ${Subtotal}</h2>
        <h2>Shipping: ${Shipping}</h2>
        <h2>tax: ${tax}</h2>
        <h2>Total : ${Total}</h2>
    </aside>
    </div>
  );
};

const Cartitem =({imgSrc,name,price,qty,decrement,increment,id,
    deleteHandler}) =>(
    <div className="cartitem">
        <img src={imgSrc} alt="item" />
        <article>
            <h3>
                {name}
            </h3>
            <p>
               ${price} 
            </p>
        </article>
        <div>
            <button onClick={()=> decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=> increment(id)}>+</button>
        </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>

    )


export default Cart