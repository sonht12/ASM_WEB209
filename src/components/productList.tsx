import axios from "axios";
import { IProduct } from "@/interface/IPoroduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const ProductList = ()=>{
    const dispatch = useDispatch();
    const { products, error } = useSelector((state: any) => state.product);
    useEffect(()=>{
        const fetchProduct = async () =>{
            try{
                const {data} = await axios.get(`http://localhost:3000/products`);
                dispatch({ type: "product/fetch", payload: data})
            }catch(error: any){

            }finally{

            }
        };
        fetchProduct();
    },[])
    if (error) return <div>Có lỗi kiểm tra lại</div>;
}
export default ProductList;