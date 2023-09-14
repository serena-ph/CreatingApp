import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const storeApi = createApi({
    tagTypes:['products'],
    reducerPath: 'createappApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5173/'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ()=> 'api/products'
        }),
        getProductById :builder.query({
            query: (id)=> 'api/products/'+id
        }),
        deleteProduct: builder.mutation({
            query: (id)=>({
                url:'api/products/'+id,
                method: "DELETE"
            })
        }),
        addProduct: builder.mutation({
            query: (body)=>({
                url:'api/products',
                method:"POST",
                body:body
            })
        }), editProduct : builder.mutation({
            query(data){
                const {id, ...body}=data;
                return {
                    url: 'api/products/'+id,
                    method:"PUT",
                    body
                }
            }
        })
    }),
})

export const {useGetProductsQuery,useGetProductByIdQuery, useDeleteProductMutation, useAddProductMutation, useEditProductMutation } = storeApi