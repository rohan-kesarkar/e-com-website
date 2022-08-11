const initialState = {
    list : JSON.parse(localStorage.getItem('list')) || [],
    address :[]

}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            // console.log("payload", action.payload)
            const {data} = action.payload
            // console.log("action",id,data)
            return{
                ...state,
                list:[
                    ...state.list,
                    {   
                      data : data,
                      
                    }
                ]
            }
            case "REMOVE_FROM_CART":
            // console.log("payload", action.payload)
            const newList = state.list.filter((elem)=>elem.data.id !== action.id)
            // console.log("action", action.id)
        
            // console.log("action",id,data)
            return{
                ...state,
                list: newList
            }
            case "ADD_ADDRESS":
                const {address} = action.payload
                return{
                    ...state,
                    address:[
                        ...state.address,
                        {
                            address:address
                        }
                    ]
                } 
            
            default: return state
    }
}
export default reducer