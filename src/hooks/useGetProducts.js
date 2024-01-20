import  { useEffect, useState } from 'react'
import { getAllProducts } from '../services';
import {  useSearchParams } from 'react-router-dom';

const useGetProducts = () => {
    const [res,setRes]=useState([]);
    const [searchParams,setSearchParams]=useSearchParams();
    const key=searchParams.get('searchKey');

    const filteredValue=key ? res?.filter((item)=>{
        if(item.productCategory.productCategoryName?.toLowerCase().match(key)){
            return item;
        }
    }):res;

    useEffect(()=>{
        const getAllData=async()=>{
            const data=await getAllProducts();
            setRes(data?.response);
        }
        getAllData();
    },[key])
    return filteredValue; 
}

export default useGetProducts