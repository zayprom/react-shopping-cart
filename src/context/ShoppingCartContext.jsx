// import { createContext, ReactNode, useContext } from "react";

// // TO DO - FIX Context provider (https://beta.reactjs.org/)

// type ShoppingCartProviderProps = {
//     children: ReactNode
// }

// type ShoppingCartContext = {
//     getItemQuantity,
//     increateCartQuantity,
//     decreaseCartQuantity,
// }

// const ShoppingCartContext = createContext({})

// export function useShoppingCart() {
//     return useContext(ShoppingCartContext);
// }

// export function ShoppingCartProvider({ children }:
// ShoppingCartProviderProps) {
//    return (
//    <ShoppingCartContext.Provider value={{}}>
//         {children}
//     </ShoppingCartContext.Provider>
//    )
// }

// import React from "react";
// import { createContext } from "react";
// import NavBar from "../components/NavBar";

// export const ShoppingCartContext = createContext({
//     items: [],
//     getProductQuantity: () => {},
//     addToCart: () => {},
//     removeFromCart: () => {},
//     deleteFromCart: () => {},
//     totalSum: () => {}
// });

// export function Cart({NavBar}) {
//     const contextValue = {
//         items: [],
//         addToCart,
//         removeFromCart,
//         deleteFromCart,
//         totalSum,
//     }
//     return(
//         <ShoppingCartContext.Provider value={contextValue}>
//             <NavBar />
//         </ShoppingCartContext.Provider>
//     )
// }

// export default Cart;