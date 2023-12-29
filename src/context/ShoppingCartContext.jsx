import {createContext, useContext, useState} from "react";
import { ShoppingCart } from "../components/ShoppingCart";


const ShoppingCartContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

// eslint-disable-next-line react/prop-types
export function ShoppingCartProvider({children}){
    const [isOpen,setIsOoen]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const cartQuantity=cartItems.reduce((quantity,item)=>item.quantity+quantity,0);
    const openCart = () => setIsOoen(true);
    const closeCart = () => setIsOoen(false);
    function getItemQuantity(id){
        
        return cartItems.find(item=>item.id===id)?.quantity||0
    }

    function increaseItemQuantity(id) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }]
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
              } else {
                return item
              }
            })
          }
        })
      }
    function decreaseItemQuantity(id){
        setCartItems(currItems=>{
            if(currItems.find(item=>item.id===id)?.quantity===1){

               return currItems.filter(item=>item.id!==id)
            }else{
                return currItems.map(item=>{
                        if(item.id===id){

                            return {...item,quantity:item.quantity-1}
                        }else
                            return item;
                    }

                )
            }
        })

    }
    function removeFromCart(id){
        setCartItems(currItems=>{
            return currItems.filter(item=>item.id!==id)

        })
    }
    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeFromCart,
            openCart,closeCart,
            cartItems,
            cartQuantity}}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}