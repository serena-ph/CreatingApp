import { useGetProductsQuery, useDeleteProductMutation,useAddProductMutation } from "../reducers/api";

function Products(){
    const {data, isLoading}= useGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();
    const [addProduct]= useAddProductMutation();

    return(
       <div>
        
       </div> 
    )
}