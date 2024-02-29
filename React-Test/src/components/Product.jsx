/* eslint-disable react/prop-types */
import {  useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { updateProduct } from "../utility/http";
import Error from "./Error";
import Search from "./Search";

const Product = () => {
    const param = useParams();
    const {data, isLoading, isError} = useQuery({
        queryKey: ['notes'],
        queryFn: ()=>updateProduct(param)
    })
  return (
    <div className="action12">
    {isError && <Error />}
    {isLoading && <Error />}
      {data && <Search data={data} />}
    </div>
  )
}

export default Product