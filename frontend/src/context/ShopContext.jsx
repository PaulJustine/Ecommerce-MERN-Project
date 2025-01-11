import { createContext, useEffect, useState } from "react"
import { products } from "../assets/frontend_assets/assets"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const  ShopContext=createContext()

const ShopContextProvider = (props) =>{
    const currency='₹';
    const delivery_fee=10;
    const backendUrl = "http://localhost:4000"
    const [search,setSearch] = useState(' ');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [token,setToken] = useState('');
    const navigate= useNavigate();

    const addtoCart = async (productId,size) => {
        if (!size) {
            toast.error('Select product size');
            return;
        }
        let cartData = structuredClone(cartItems);
        if (cartData[productId])
        {
            if (cartData[productId][size])
            {
                cartData[productId][size]+=1;
            }
            else{
                cartData[productId][size]=1;

            }
        }
        else{
            cartData[productId] = {};
            cartData[productId][size]=1;

        }
        setCartItems(cartData);
    }
    const getCartCount = () => {
        let totalCount = 0;
        for (const productId in cartItems) {
            for (const size in cartItems[productId]) {
                try {
                    if (cartItems[productId][size] > 0) {
                        totalCount += cartItems[productId][size];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalCount;
    }
    
    const updateQuantity = async(itemId,size,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size]=quantity;
        setCartItems(cartData);

    }
    const getCartAmount =  () =>{
        let totalAmount=0;
        for(const item in cartItems){
            let itemInfo=products.find((product)=>product._id === item);
            for(const size in cartItems[item]){
                try{
                    if(cartItems[item][size]>0){
                        totalAmount += itemInfo.price * cartItems[item][size];
                    }
                }catch(error){

                    }
                

            
            }
        }
      return totalAmount;
    }

    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))

        }

    },[])
    const value={
      products,currency,delivery_fee,
      search,setSearch,showSearch,setShowSearch,
      cartItems,addtoCart,getCartCount,updateQuantity,getCartAmount,navigate,backendUrl,token,setToken
      
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}

        </ShopContext.Provider>
    )
}
export default ShopContextProvider;