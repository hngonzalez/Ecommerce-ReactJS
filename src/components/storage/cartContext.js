import { createContext, useState } from "react";

export const cartContext = createContext({cart: []});

function CartProvider(props) {
    const [cart, setCart] = useState([]);

    function addToCart(item, quantity) {
        const temp = [...cart];
        let isInCart = cart.find(itemInCart => itemInCart.id === item.id)


        if (isInCart) {
            isInCart.quantity += quantity;
        } else {
            item.quantity = quantity;
            temp.push(item)
        }

        setCart([...temp]);


        /* if (isInCart) {
            isInCart.quantity += item.count;
        }
        else { */
            // A method
            /* let newCart = [...cart];
            newCart.push(item);
            setCart(newCart); */ 
            
            // B method, same as A
            /* setCart([...cart, item]); */

            // C method, same as A and B
            /* let newCart = cart.map(item => item);
            newCart.push(item)
            setCart(newCart) */
        /* } */
    }

    function removeItem(item, quantity) {        
        const temp = [...cart];
        const found = temp.find((item) => item.id === item.id);
        const index = temp.indexOf(found);

        if (found) {
          if (found.quantity > 1) {
            found.quantity -= 1;
          } else {
            temp.splice(index, 1);
          }
        }

        setCart([...temp]);
    }

    /**
     * Function to 
     */
    function totalItemsInCart(item) {        
        let total = 0;
        const temp = [...cart];
        
        temp.forEach(item => {
            total += item.quantity;
        })
        
        return total;
    }

    /**
     * Function to 
     */
    function totalPriceInCart(item) {        
        let total = 0;
        const temp = [...cart];
        
        temp.forEach(item => {
            total += item.price;
        })
        
        return total;
    }
    
    /**
     * Function to 
     */
    function clear() {        
        setCart([]);
    }
    return (
        <cartContext.Provider value={{cart, addToCart, removeItem, clear, totalItemsInCart, totalPriceInCart}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {
    CartProvider
}