import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
    {
        cartitems:[],
        subtotal : 0,
        shipping:0,
        tax:0,
        total:0,

    },
    {
        addtocart:(state,action)=>{
            const item = action.payload;
            const isitemexist=state.cartitems.find((i) => i.id === action.payload.id);

            if(isitemexist)
            {
              state.cartitems.forEach(i=>{
                if(i.id===item.id) i.quantity+=1;
              })
            }
            else{
                state.cartitems.push(item);
            }

        },

        decrement:(state,action) => {
            const item = state.cartitems.find((i) => i.id === action.payload);
            if(item.quantity > 1 ){
                state.cartitems.forEach((i)=>{
                    if(i.id===item.id) i.quantity -=1;
                });
            }
        },
        deletefromcart:(state,action) =>{
            state.cartitems=state.cartitems.filter((i) => i.id!== action.payload);
        },

        calculateprice:(state) => {
            let sum =0;
            state.cartitems.forEach((i) => (sum += i.price * i.quantity));
            state.Subtotal = sum;
            state.Shipping =state.Subtotal > 1000 ? 0 :200;
            state.tax = +(state.Subtotal *0.18).toFixed();
            state.Total= state.Subtotal + state.tax + state.Shipping;
        },
    }
);

