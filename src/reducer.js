export const initialState =  {
    basket:[
        {
            id:"473843",
            title:"Samsung Galaxy Tab A 8.0 (2019, WiFi Only) 32GB, 5100mAh Battery, Dual Speaker, SM-T290, International Model (Black)",
            image:"https://images-na.ssl-images-amazon.com/images/I/51RScDZUEfL._AC_SL1000_.jpg",
            rating:4,
            price:365,
        },
    ],
};

const reducer = (state,action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state, //old state as it is. 
                basket:[...state.basket,action.item], //changing the basket
            };
            break;  
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = newBasket.findIndex((basketItem)=> basketItem.id===action.id);
            if (index>=0){
                newBasket.splice(index,1);
            }
            else{
                console.warn(`item with id:${action.id} doesn't exist`);
            }
            return {...state,basket:newBasket};
            break;
        default:
            return state;
            
    }   
};
export const getBasketTotal = (basket)=> basket.reduce((amount,item)=>amount+item.price,0);
export default reducer;