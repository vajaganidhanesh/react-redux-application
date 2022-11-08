export const AddProduct = (value) => async dispatch =>{
    dispatch({
        type:"ADD",
        payload:value
    })
}

export const DeleteProduct = (value) => async dispatch =>{
    dispatch({
        type:"REMOVE",
        payload:value
    })
}