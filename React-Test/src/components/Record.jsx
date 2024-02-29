/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../utility/http"
import Content from "./Content"
// import Error from "./Error"
import Error from "./Error";
import Loading from "./Loading";

const Record = () => {
    // const [isLoading , setisLoading] = useState(true);
    const {data, isLoading, isError} = useQuery({
        queryKey: ["product"],
        queryFn: fetchProducts,
        staleTime: 0
    })
//     console.log(data)
  // useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products?limit=5')
  //           .then(res=>res.json())
  //           .then(json=>setStock(json))
  //   setisLoading(false);
  // },[setStock])
//  function handleDelete(id){
//   const newData = stock.filter((user)=> user.id!== id);
//   setStock(newData);
  return (
    <div>
    {isError && <Error />}
    {isLoading &&   <Loading /> }
     { data && <table className="action10">
      <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody key={data.id}>
       {
        data.map((user)=>(
            <Content key={user.id} user={user}  />
        ))
       }
        </tbody>
      </table>}
     
    </div>
  )
}

export default Record
