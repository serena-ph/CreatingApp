import { useGetProductsQuery, useDeleteProductMutation,useAddProductMutation } from "../reducers/api";

function Products(){
    const {data, isLoading}= useGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();
    const [addProduct]= useAddProductMutation();
    console.log(data)

    return (

        <>
    
        {isLoading? <h1>Loading...</h1>: data.length===0? <h1>No Products Listed</h1>:data.map((i)=>
            <div key={i.id}>
                <h1 >{i.name}</h1>
                <h3>$ {i.price}</h3>
          
            </div>

        )}

    </>
);
}


export default Products;