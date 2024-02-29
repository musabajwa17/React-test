/* eslint-disable react-refresh/only-export-components */
// export  function addUser(note){
//     console.log(note);
//     fetch('https://fakestoreapi.com/users',{
//         method:"POST",
//         body:JSON.stringify(
//             {
//                 email:'John@gmail.com',
//                 username: note.userName,
//                 password: note.password,
//                 name:{
//                     firstname:'Musa',
//                     lastname:'Bajwa'
//                 },
//                 address:{
//                     city:'pindi',
//                     street:'7835 new road',
//                     number:3,
//                     zipcode:'12926-3874',
//                     geolocation:{
//                         lat:'-37.3159',
//                         long:'81.1496'
//                     }
//                 },
//                 phone:'1-570-236-7033'
//             }
//         )
//     })
//         .then(res=>res.json())
//         .then(json=>console.log(json))
//     // return await handleResponse(response)
// }
export async function fetchdata(){
    const response = await fetch("http://fakestoreapi.com/users");
    return await handleResponse(response)
}
export async function fetchProducts(){
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    return await handleResponse(response);
}
export async function updateProduct(id){
    const URL = `https://fakestoreapi.com/products/${id.id}`;
    const response =  await fetch(URL)
    return await handleResponse(response);
}
export async function update({id, payload}){
    fetch(`https://fakestoreapi.com/products/${id}`, {
        method : 'PATCH',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then((result)=>{
        result.json().then((res)=>{
          console.log(res);
        })
      })
}
export async function NewProduct(payload){
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(payload)
    }).then(res=> res.json())
    .then(json=> console.log(json))
}
export async function deleteData(id){
    fetch(`https://fakestoreapi.com/products/${id.id}`, {
        method: 'DELETE',
      }).then(res=>res.json())
      .then(json=>console.log(json))
}
async function handleResponse(res){
    if(!res.ok) { 
        const error = new Error("Something went wrong");
        error.code = res.status;
        error.message = error.code === 404 ? "Something is wrong " : await res.json();
    throw error
}
    return await res.json();
}