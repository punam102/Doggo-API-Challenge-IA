import * as types from "./actionTypes";
const initialState = {
  dog: [],
  isLoading: false,
  isError: false,
};

export const appreducer = (state = initialState,action) => {
  const {type,payload}=action;
  switch(type){
    case types.GET_DOG_DATA_REQUEST:
        return {...state,isLoading:true};
    case types.GET_DOG_DATA_SUCCESS:
      console.log("hi")
      // var shoe=[[...payload]]
      var newdog=[]
      for(var key in payload)
      {
        newdog.push(key)
      }
        return {...state,
        
         
          dog:newdog,
          isLoading:false,
          isError:false
        
         };
        
       
    case  types.GET_DOG_DATA_FAILURE:
        return {...state,
       
         
          isLoading:false,
          isError:payload
        };
    

        default:
          return state;    
};
}
export default appreducer