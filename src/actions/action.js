export const addToCart = (data)=>{
    return{
        type: "ADD_TO_CART",
        payload:{
            id: data.id,
            data:data
        }
    }
}

export const removeFromCart = (id)=>{
    return{
        type: "REMOVE_FROM_CART",
        id
        
    }
}