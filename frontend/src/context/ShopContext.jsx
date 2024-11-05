import { createContext } from "react";
import { donghanhuutu  } from "../assets/assets";

export const ShopContext = createContext()

const ShopContextProvider = (props) => {


    const value = {
        donghanhuutu
    }


    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;